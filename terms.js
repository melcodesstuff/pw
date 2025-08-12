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

/* Summary callout (exact wording requested) */
function renderCurrentCard(term){
  if(!term){ currentCard.style.display='none'; return; }
  currentCard.style.display='flex';
  currentCard.innerHTML = `
    <div>
      <p style="margin:0 0 4px;">It is currently <strong>year ${term.term}</strong></p>
      <h2 style="margin:0 0 2px;">This term started <strong>${term.startLabel}</strong></h2>
      <p style="margin:0; color:var(--muted);">and will end <strong>${term.endLabel}</strong> <span class="mono">(${term.yearsLabel})</span></p>
    </div>
    <div style="margin-left:auto;">
      <button id="jumpBtnTop" class="btn" type="button">Jump to row</button>
    </div>
  `;
  document.getElementById('jumpBtnTop')?.addEventListener('click',()=>jumpTo(term.term));
}
renderCurrentCard(CURRENT);

/* filtering */
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
    const hay = `year ${t.term} ${t.startLabel} ${t.endLabel} ${t.yearsLabel} ${t.months}`.toLowerCase();
    return hay.includes(q);
  });

  const last=lastSelect.value;
  if(last!=='all'){ list=list.slice(0, parseInt(last,10)); }

  render(list, CURRENT);
}

/* render */
function render(list, current){
  tbody.innerHTML='';
  const frag=document.createDocumentFragment();
  let lastGroup=null;

  list.forEach(t=>{
    if(t.yearsLabel!==lastGroup){
      lastGroup=t.yearsLabel;
      const g=document.createElement('tr');
      g.className='year-divider';
      g.innerHTML=`<td colspan="4" style="padding:8px 12px;">
        <span class="year-chip mono">${t.yearsLabel}</span>
      </td>`;
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
