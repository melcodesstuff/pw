// Uses shared data from terms-data.js
(function boot(retries=80){
  if (Array.isArray(window.PW_TERMS) && window.PW_TERMS.length) {
    initTermsPage(window.PW_TERMS);
    return;
  }
  if (retries<=0) { console.error("[PW] PW_TERMS not available."); return; }
  setTimeout(()=>boot(retries-1),30);
})();

function initTermsPage(ALL_TERMS){
  // DOM
  const tbody = document.getElementById('termBody');
  const currentCard = document.getElementById('currentCard');
  const searchInput = document.getElementById('searchInput');
  const monthSelect = document.getElementById('monthSelect');
  const lastSelect = document.getElementById('lastSelect');
  const resetBtn = document.getElementById('resetBtn');
  const jumpBtn = document.getElementById('jumpBtn');

  // Current term
  const CURRENT = ALL_TERMS.find(t => {
    const now = new Date();
    return now >= t.startDate && now <= t.endDate;
  }) || null;

  // Summary callout (exact wording)
  function renderCurrentCard(term){
    if(!term){ currentCard.style.display='none'; return; }
    currentCard.style.display='flex';
    currentCard.innerHTML = `
      <div>
        <p>It is currently <strong>year ${term.term}</strong></p>
        <h2>This term started <strong>${term.startLabel}</strong></h2>
        <p>and will end <strong>${term.endLabel}</strong> <span class="mono">(${term.yearsLabel})</span></p>
      </div>
      <div style="margin-left:auto;">
        <button id="jumpBtnTop" class="btn" type="button">Jump to row</button>
      </div>
    `;
    document.getElementById('jumpBtnTop')?.addEventListener('click',()=>jumpTo(term.term));
  }
  renderCurrentCard(CURRENT);

  // Filters
  function monthOK(t){
    const m = monthSelect.value;
    if(m==='any') return true;
    return t.startMonthKey===m || t.endMonthKey===m;
  }

  // Collapsed groups (by yearsLabel)
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

      // Year divider row
      if(group !== lastGroup){
        lastGroup = group;
        const collapsed = collapsedYears.has(group);
        const g=document.createElement('tr');
        g.className='year-divider';
        g.dataset.year = group;
        g.innerHTML=`
          <td colspan="4" style="padding:0 12px;">
            <button class="year-toggle" data-year="${group}" aria-expanded="${!collapsed}">
              <span class="chev">${collapsed ? '▸' : '▾'}</span>
              <span class="mono">${group}</span>
            </button>
          </td>`;
        frag.appendChild(g);
      }

      // Term row (hide if that year is collapsed)
      if (collapsedYears.has(group)) return;

      const tr=document.createElement('tr');
      tr.dataset.term=t.term;
      tr.dataset.group=group;
      if(current && current.term===t.term) tr.classList.add('is-current');

      tr.innerHTML=`
        <td style="padding:10px; border-bottom:1px solid var(--border);">
          Year ${t.term} ${current && current.term===t.term ? '<span class="term-star" title="Current term">⭐</span>' : ''}
        </td>
        <td style="padding:10px; border-bottom:1px solid var(--border);">${t.startLabel}</td>
        <td style="padding:10px; border-bottom:1px solid var(--border);">${t.endLabel}</td>
        <td style="padding:10px; border-bottom:1px solid var(--border);" class="mono">${t.yearsLabel}</td>
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

  function jumpTo(termNum){
    const row=tbody.querySelector(`tr[data-term="${termNum}"]`);
    if(!row) return;
    row.scrollIntoView({behavior:'smooth', block:'center'});
    row.classList.add('pulse');
    setTimeout(()=>row.classList.remove('pulse'),900);
  }

  // Events
  searchInput.addEventListener('input', apply);
  monthSelect.addEventListener('change', apply);
  lastSelect.addEventListener('change', apply);
  resetBtn.addEventListener('click', ()=>{ searchInput.value=''; monthSelect.value='any'; lastSelect.value='20'; apply(); });
  jumpBtn.addEventListener('click', ()=> CURRENT && jumpTo(CURRENT.term));

  // Initial render
  apply();
}
