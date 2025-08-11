/* Term Date Reference — descending view with current callout, search, month filter, and copy tool. */

/* Full list through Year 178 from the forum thread (minor spacing preserved). */
const RAW_TIMELINE = `
Year 1 -- February 14 - March 24 (2007)
Year 2 -- March 25 - April 14 (2007)
Year 3 -- April 16 - May 5 (2007)
Year 4 -- May 6 - June 1 (2007)
Year 5 -- June 2 - June 22 (2007)
Year 6 -- June 23 - July 22 (2007)
Year 7 -- July 23 - August 17 (2007)
Year 8 -- August 18 - September 8 (2007)
Year 9 -- September 9 -- September 28 (2007)
Year 10 -- September 29 - October 26 (2007)
Year 11 -- October 27 - November 24 (2007)
Year 12 -- November 25 - December 21 (2007)
Year 13 -- December 22 - January 27 (2008)
Year 14 -- January 28 - February 22 (2008)
Year 15 -- February 23 - March 21 (2008)
Year 16 -- March 22 - April 18 (2008)
Year 17 -- April 19 - May 16 (2008)
Year 18 -- May 17 - June 20 (2008)
Year 19 -- June 21 - July 18 (2008)
Year 20 -- July 19 - August 15 (2008)
Year 21 -- August 16 - September 12 (2008)
Year 22 -- Septmeber 13 - October 10 (2008)
Year 23 -- October 11 - November 7 (2008)
Year 24 -- November 8 - December 5 (2008)
Year 25 -- December 6 - January 9 (2009)
Year 26 -- January 10 - February 6 (2009)
Year 27 -- February 7 - March 6 (2009)
Year 28 -- March 7 - April 2 (2009)
Year 29 -- April 3 -- May 8 (2009)
Year 30 -- May 9 - June 5 (2009)
Year 31 -- June 6 - July 3 (2009)
Year 32 -- July 4 - July 31 (2009)
Year 33 -- August 1 - August 27 (2009)
Year 34 -- August 28 - September 25 (2009)
Year 35 -- September 26 - October 23 (2009)
Year 36 -- October 24 - November 20 (2009)
Year 37 -- November 21 - December 18 (2009)
Year 38 -- December 19 - January 22 (2010)
Year 39 -- January 23 - February 19 (2010)
Year 40 -- February 20 - March 19 (2010)
Year 41 -- March 20 - April 16 (2010)
Year 42 -- April 17 - May 14 (2010)
Year 43 -- May 15 - June 18 (2010)
Year 44 -- June 19 - July 16 (2010)
Year 45 -- July 17 - August 13 (2010)
Year 46 -- August 14 - Septemebr 10 (2010)
Year 47 -- September 11 - October 8 (2010)
Year 48 -- October 9 - November 12 (2010)
Year 49 -- November 13 - December 10 (2010)
Year 50 -- December 11 - January 14 (2011)
Year 51 -- January 15 - February 11 (2011)
Year 52 -- February 12 - March 11 (2011)
Year 53 -- March 12 - April 8 (2011)
Year 54 -- April 9 - May 6 (2011)
Year 55 -- May 7 - June 3 (2011)
Year 56 -- June 4 - July 1 (2011)
Year 57 -- July 2 - July 29 (2011)
Year 58 -- July 30 - August 26 (2011)
Year 59 -- August 27 - October 7 (2011)
Year 60 -- October 8 - November 11 (2011)
Year 61 -- November 12 - December 16 (2011)
Year 62 -- December 17 - January 27 (2011/2012)
Year 63 -- January 28 - March 2 (2012)
Year 64 -- March 3 - April 13 (2012)
Year 65 -- April 14 - May 18 (2012)
Year 66 -- May 19 - June 22 (2012)
Year 67 -- June 23 - July 27 (2012)
Year 68 -- August 4 - September 7 (2012)
Year 69 -- September 8 - October 19 (2012)
Year 70 -- October 20 - November 23 (2012)
Year 71 -- November 24 - January 11 (2012/2013)
Year 72 -- January 12 - February 15 (2013)
Year 73 -- February 16 - March 22 (2013)
Year 74 -- March 23 - April 26 (2013)
Year 75 -- April 27 - June 7 (2013)
Year 76 -- June 8 - July 12 (2013)
Year 77 -- July 13 - August 16 (2013)
Year 78 -- August 17 - September 28 (2013)
Year 79 -- September 29 - November 1 (2013)
Year 80 -- November 2 - December 6 (2013)
Year 81 -- December 7 - January 17 (2013/2014)
Year 82 -- January 18 - March 14 (2014)
Year 83 -- March 15 - April 18 (2014)
Year 84 -- April 19 - May 30 (2014)
Year 85 -- May 31 - July 4 (2014)
Year 86 -- July 5 - August 8 (2014)
Year 87 -- August 9 - September 19 (2014)
Year 88 -- September 20 - October 24 (2014)
Year 89 -- November 7 - December 18 (2014)
Year 90 -- December 19 - January 29 (2014/2015)
Year 91 -- January 30 - March 19 (2015)
Year 92 -- March 20 - May 1 (2015)
Year 93 -- May 2 - June 4 (2015)
Year 94 -- June 5 - July 30 (2015)
Year 95 -- July 31 - September 3 (2015)
Year 96 -- September 4 - October 9 (2015)
Year 97 -- October 10 - November 20 (2015)
Year 98 -- November 21 - January 8 (2015/2016)
Year 99 -- January 9 - February 12 (2016)
Year 100 -- February 13 - March 25 (2016)
Year 101 -- March 26 - April 29 (2016)
Year 102 -- April 30 - June 3 (2016)
Year 103 -- June 4 - July 22 (2016)
Year 104 -- July 23 - August 26 (2016)
Year 105 -- August 27 - September 30 (2016)
Year 106 -- October 1 - November 11 (2016)
Year 107 -- November 12 - December 16 (2016)
Year 108 -- December 17 - February 3 (2016/2017)
Year 109 -- February 4 - March 10 (2017)
Year 110 -- March 11 - April 15 (2017)
Year 111 -- April 22 - May 26 (2017)
Year 112 -- May 27 - June 30 (2017)
Year 113 -- July 1 - August 5 (2017)
Year 114 -- August 12 - September 15 (2017)
Year 115 -- September 16 - October 20 (2017)
Year 116 -- October 21 - December 1 (2017)
Year 117 -- December 2 - January 19 (2017/2018)
Year 118 -- January 20 - February 23 (2018)
Year 119 -- February 24 - March 31 (2018)
Year 120 -- April 7 - May 18 (2018)
Year 121 -- May 19 - June 30 (2018)
Year 122 -- July 7 - August 17 (2018)
Year 123 -- August 18 - September 28 (2018)
Year 124 -- September 29 - November 23 (2018)
Year 125 -- November 24 - January 4 (2018/2019)
Year 126 -- January 5 - February 15 (2019)
Year 127 -- February 16 - March 30 (2019)
Year 128 -- April 6 - May 17 (2019)
Year 129 -- May 18 - June 29 (2019)
Year 130 -- July 6 - August 16 (2019)
Year 131 -- August 17 - September 28 (2019)
Year 132 -- October 5 - November 15 (2019)
Year 133 -- November 16 - December 28 (2019)
Year 134 -- January 4 - February 14 (2020)
Year 135 -- February 15 - March 28 (2020)
Year 136 -- April 4 - May 15 (2020)
Year 137 -- May 16 - June 27 (2020)
Year 138 -- July 4 - August 14 (2020)
Year 139 -- August 15 - September 26 (2020)
Year 140 -- October 3 - November 13 (2020)
Year 141 -- November 14 - December 26 (2020)
Year 142 -- January 2 - February 12 (2021)
Year 143 -- February 13 - March 27 (2021)
Year 144 --  April 3 - May 13 (2021)
Year 145 -- May 14 - June 26 (2021)
Year 146 -- July 3 - August 13 (2021)
Year 147 -- August 14 - September 25 (2021)
Year 148 -- October 2 - November 13 (2021)
Year 149 -- November 20 - December 25 (2021)
Year 150 -- January 1 - February 11 (2022) 
Year 151 -- February 12 - March 26 (2022)
Year 152 -- April 2 - May 13 (2022)
Year 153 -- May 14 - June 25 (2022)
Year 154 -- July 3 - August 12 (2022)
Year 155 -- August 13 - September 24 (2022)
Year 156 -- October 1 - November 11 (2022)
Year 157 -- November 12 - December 24 (2022)
Year 158 -- January 7 -  February 17 (2023)
Year 159 -- February 18 - April 1 (2023)
Year 160 -- April 8 - May 19 (2023)
Year 161 -- May 20 - July 1 (2023)
Year 162 -- July 8 - August 18 (2023)
Year 163 -- August 19 - September 30 (2023)
Year 164 -- October 7 - November 17 (2023)
Year 165 -- November 18 - December 30 (2023)
Year 166 -- January 6 - February 23 (2024)
Year 167 -- February 24 - April 5 (2024)
Year 168 -- April 6 - May 17 (2024)
Year 169 -- May 18 - June 29 (2024)
Year 170 -- July 6 - August 16 (2024)  
Year 171 -- August 17 - September 28 (2024)
Year 172 -- October 5 - November 15 (2024)
Year 173 -- November 16 - December 28 (2024)
Year 174 -- January 4 - February 14 (2025)
Year 175 -- February 15 - March 28 (2025)
Year 176 -- April 5 - May 16 (2025)
Year 177 -- May 17 - June 28 (2025)
Year 178 -- July 5 - August 15 (2025)
`;

/* --- Parsing helpers --- */
const MONTHS = {
  january:0,february:1,march:2,april:3,may:4,june:5,
  july:6,august:7,september:8,sept:8,septmeber:8, // forum typo
  october:9,november:10,december:11
};
const LINE_RE = /^Year\s+(\d+)\s+--\s+([A-Za-z]+\s+\d{1,2})\s*[-–—]\s*([A-Za-z]+\s+\d{1,2})\s*\(([^)]+)\)\s*$/;

function parseMonthDay(s){
  const [m,d]=s.trim().split(/\s+/);
  return { m: MONTHS[m.toLowerCase()], d: parseInt(d,10), name: m };
}
function spanYears(label){
  const parts = label.split('/').map(x=>parseInt(x,10));
  return parts.length===1 ? {start:parts[0],end:parts[0]} : {start:parts[0],end:parts[1]};
}
function dt(y,md){ return new Date(y, md.m, md.d, 12); }

function parse(raw){
  return raw.split('\n')
    .map(l=>l.trim()).filter(Boolean)
    .map(line=>{
      const m=line.match(LINE_RE);
      if(!m) return null;
      const [,termStr,startTxt,endTxt,yearsLabel]=m;
      const term=parseInt(termStr,10);
      const sMD=parseMonthDay(startTxt);
      const eMD=parseMonthDay(endTxt);
      const {start,end}=spanYears(yearsLabel);
      const startDate=dt(start,sMD);
      const endDate=dt(end,eMD);
      const months = sMD.name===eMD.name ? sMD.name : `${sMD.name}–${eMD.name}`;
      return {
        term,
        startLabel:startTxt,
        endLabel:endTxt,
        yearsLabel,
        startDate,
        endDate,
        months,
        startMonthKey:sMD.name.toLowerCase(),
        endMonthKey:eMD.name.toLowerCase()
      };
    })
    .filter(Boolean)
    .sort((a,b)=>b.term-a.term); // DESC
}

const ALL_TERMS = parse(RAW_TIMELINE);

/* --- DOM --- */
const tbody = document.getElementById('termBody');
const currentCard = document.getElementById('currentCard');
const searchInput = document.getElementById('searchInput');
const monthSelect = document.getElementById('monthSelect');
const lastSelect = document.getElementById('lastSelect');
const resetBtn = document.getElementById('resetBtn');
const jumpBtn = document.getElementById('jumpBtn');

function findCurrent(list, now=new Date()){
  return list.find(t => now >= t.startDate && now <= t.endDate) || null;
}
const CURRENT = findCurrent(ALL_TERMS);

function renderCurrentCard(term){
  if(!term){ currentCard.style.display='none'; return; }
  currentCard.style.display='block';
  currentCard.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">
      <div>
        <div class="current-badge">Current</div>
        <h2 class="card-title" style="margin:8px 0 4px;">Year ${term.term}</h2>
        <p class="card-desc">Active ${term.startLabel} – ${term.endLabel} (${term.yearsLabel})</p>
      </div>
      <button id="jumpBtnTop" class="btn" type="button">Jump to row</button>
    </div>`;
  document.getElementById('jumpBtnTop')?.addEventListener('click',()=>jumpTo(term.term));
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
    const hay = `year ${t.term} ${t.startLabel} ${t.endLabel} ${t.yearsLabel} ${t.months}`.toLowerCase();
    return hay.includes(q);
  });

  // last N terms
  const last=lastSelect.value;
  if(last!=='all'){
    list=list.slice(0, parseInt(last,10));
  }

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
      g.innerHTML=`<td class="mono" colspan="6" style="padding:8px 12px;">${t.yearsLabel}</td>`;
      frag.appendChild(g);
    }
    const tr=document.createElement('tr');
    tr.dataset.term=t.term;
    if(current && current.term===t.term) tr.classList.add('is-current');

    const copyTxt = `Year ${t.term} — ${t.startLabel} – ${t.endLabel} (${t.yearsLabel})`;

    tr.innerHTML=`
      <td style="padding:10px; border-bottom:1px solid var(--border);">Year ${t.term} ${current && current.term===t.term ? '<span class="current-badge">Current</span>' : ''}</td>
      <td style="padding:10px; border-bottom:1px solid var(--border);">${t.startLabel}</td>
      <td style="padding:10px; border-bottom:1px solid var(--border);">${t.endLabel}</td>
      <td style="padding:10px; border-bottom:1px solid var(--border);" class="mono">${t.yearsLabel}</td>
      <td style="padding:10px; border-bottom:1px solid var(--border);">${t.months}</td>
      <td style="padding:10px; border-bottom:1px solid var(--border);">
        <div class="tools">
          <button class="btn" data-copy='${copyTxt.replace(/'/g,"&#39;")}'>Copy</button>
        </div>
      </td>
    `;
    frag.appendChild(tr);
  });

  tbody.appendChild(frag);

  // Copy buttons
  tbody.querySelectorAll('button[data-copy]').forEach(btn=>{
    btn.addEventListener('click', async e=>{
      const txt=e.currentTarget.getAttribute('data-copy').replace(/&#39;/g,"'");
      try {
        await navigator.clipboard.writeText(txt);
        e.currentTarget.textContent='Copied!';
        setTimeout(()=>e.currentTarget.textContent='Copy',900);
      } catch {
        const ta=document.createElement('textarea');
        ta.value=txt; document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); document.body.removeChild(ta);
      }
    });
  });
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
resetBtn.addEventListener('click', ()=>{
  searchInput.value=''; monthSelect.value='any'; lastSelect.value='20'; apply();
});
jumpBtn.addEventListener('click', ()=> CURRENT && jumpTo(CURRENT.term));

/* initial render */
apply();
