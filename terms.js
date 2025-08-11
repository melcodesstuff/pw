// Uses shared data from terms-data.js
const ALL_TERMS = window.PW_TERMS; // descending 178 → 1

/* DOM refs */
const tbody = document.getElementById('termBody');
const currentCard = document.getElementById('currentCard');
const searchInput = document.getElementById('searchInput');
const monthSelect = document.getElementById('monthSelect');
const lastSelect = document.getElementById('lastSelect');
const resetBtn = document.getElementById('resetBtn');
const jumpBtn = document.getElementById('jumpBtn');

/* helpers */
function findCurrent(list, now=new Date()){
  return list.find(t => now >= t.startDate && now <= t.endDate) || null;
}
const CURRENT = findCurrent(ALL_TERMS);

function renderCurrentCard(term){
  if(!term){ currentCard.style.display='none'; return; }
  currentCard.style.display='block';
  currentCard.innerHTML = `
    <p>It is currently <strong>term ${term.term}</strong></p>
    <h2>The term started on <strong>${term.startLabel}</strong> and will end on <strong>${term.endLabel}</strong></h2>
    <p class="mono" style="margin-top:2px;">(${term.yearsLabel})</p>
  `;
}
renderCurrentCard(CURRENT);

function monthOK(t){
  const m = monthSelect.value;
  if(m==='any') return true;
  return t.startMonthKey===m || t.endMonthKey===m;
}

function apply(){
  const q=(searchInput.value||'').toLowerCase().trim();

  let list = ALL_TERMS.filter(t=>{
    if(!monthOK(t)) return false;
    if(!q) return true;
    // search includes month names even though they aren't shown
    const hay = `year ${t.term} ${t.startLabel} ${t.endLabel} ${t.yearsLabel} ${t.months}`.toLowerCase();
    return hay.includes(q);
  });

  // last N terms (still descending)
  const last=lastSelect.value;
  if(last!=='all'){ list=list.slice(0, parseInt(last,10)); }

  render(list, CURRENT);
}

function render(list, current){
  tbody.innerHTML='';
  const frag=document.createDocumentFragment();
  let lastGroup=null;

  list.forEach(t=>{
    if(t.yearsLabel!==lastGroup){
      lastGroup=t.yearsLabel;
      const g=document.createElement('tr');
      g.className='group-row';
      g.innerHTML=`<td class="mono" colspan="4" style="padding:8px 12px;">${t.yearsLabel}</td>`;
      frag.appendChild(g);
    }
    const tr=document.createElement('tr');
    tr.dataset.term=t.term;
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

function jumpTo(termNum){
  const row=tbody.querySelector(`tr[data-term="${termNum}"]`);
  if(!row) return;
  row.scrollIntoView({behavior:'smooth', block:'center'});
  row.classList.add('pulse');
  setTimeout(()=>row.classList.remove('pulse'),900);
}

/* events */
searchInput.addEventListener('input', apply);
monthSelect.addEventListener('change', apply);
lastSelect.addEventListener('change', apply);
resetBtn.addEventListener('click', ()=>{ searchInput.value=''; monthSelect.value='any'; lastSelect.value='20'; apply(); });
jumpBtn.addEventListener('click', ()=> CURRENT && jumpTo(CURRENT.term));

/* initial render */
apply();
