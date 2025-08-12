// Wait for shared data
(function boot(retries=80){
  if (Array.isArray(window.PW_TERMS) && window.PW_TERMS.length) {
    initTermsPage(window.PW_TERMS);
    return;
  }
  if (retries<=0) { console.error("[PW] PW_TERMS not available."); return; }
  setTimeout(()=>boot(retries-1),30);
})();

function initTermsPage(ALL_TERMS){
  const tbody = document.getElementById('termBody');
  const currentCard = document.getElementById('currentCard');
  const searchInput = document.getElementById('searchInput');
  const monthSelect = document.getElementById('monthSelect');
  const lastSelect = document.getElementById('lastSelect');
  const resetBtn = document.getElementById('resetBtn');

  const CURRENT = ALL_TERMS.find(t => {
    const now = new Date();
    return now >= t.startDate && now <= t.endDate;
  }) || null;

  // Summary: two calm lines, no parentheses, year = end year
  function renderCurrentCard(term){
    if(!term){ currentCard.style.display='none'; return; }
    const endYear = term.endDate.getFullYear();
    currentCard.style.display='block';
    currentCard.innerHTML = `
      <p class="lead">It is currently year <strong>${term.term}</strong></p>
      <p class="sub">This term started <strong>${term.startLabel}</strong> and will end <strong>${term.endLabel} ${endYear}</strong></p>
    `;
  }
  renderCurrentCard(CURRENT);

  function monthOK(t){
    const m = monthSelect.value;
    if(m==='any') return true;
    return t.startMonthKey===m || t.endMonthKey===m;
  }

  // Collapsible year groups
  const collapsedYears = new Set();

  function apply(){
    const q=(searchInput.value||'').toLowerCase().trim();

    let list = ALL_TERMS.filter(t=>{
      if(!monthOK(t)) return false;
      if(!q) return true;
      const hay = `year ${t.term} ${t.startLabel} ${t.endLabel} ${t.yearsLabel} ${t.months}`.toLowerCase();
      return hay.includes(q);
    });

    const last=lastSelect.value;
    if(last!=='all'){ list=list.slice(0, parseInt(last,10)); }

    render(list, CURRENT);
  }

  function render(list, current){
    tbody.innerHTML='';
    const frag=document.createDocumentFragment();
    let lastGroup=null;

    list.forEach(t=>{
      const group = t.yearsLabel;

      if(group !== lastGroup){
        lastGroup = group;
        const collapsed = collapsedYears.has(group);
        const g=document.createElement('tr');
        g.className='year-divider';
        g.dataset.year = group;
        g.innerHTML=`
          <td colspan="4">
            <button class="year-toggle" data-year="${group}" aria-expanded="${!collapsed}">
              <span class="chev">▾</span>
              <span class="mono">${group}</span>
            </button>
          </td>`;
        frag.appendChild(g);
      }

      if (collapsedYears.has(group)) return;

      const tr=document.createElement('tr');
      tr.dataset.term=t.term;
      tr.dataset.group=group;
      if(current && current.term===t.term) tr.classList.add('is-current');

      tr.innerHTML=`
        <td>Year ${t.term} ${current && current.term===t.term ? '<span class="term-star" title="Current term">⭐</span>' : ''}</td>
        <td>${t.startLabel}</td>
        <td>${t.endLabel}</td>
        <td class="mono">${t.yearsLabel}</td>
      `;
      frag.appendChild(tr);
    });

    tbody.appendChild(frag);
  }

  // Toggle collapse/expand by clicking divider
  tbody.addEventListener('click', (e)=>{
    const btn = e.target.closest('.year-toggle');
    if(!btn) return;
    const y = btn.dataset.year;
    if (collapsedYears.has(y)) collapsedYears.delete(y); else collapsedYears.add(y);
    apply();
  });

  // Events
  searchInput.addEventListener('input', apply);
  monthSelect.addEventListener('change', apply);
  lastSelect.addEventListener('change', apply);
  resetBtn.addEventListener('click', ()=>{ searchInput.value=''; monthSelect.value='any'; lastSelect.value='20'; apply(); });

  // Initial render
  apply();
}
