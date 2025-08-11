/* terms.js
   Builds the Term Date Reference table from the PW Timeline text.
   Data copied from the PW forum timeline to avoid cross‑site fetch/CORS issues.
   You can update this block whenever the forum post updates.
*/

// Raw timeline text copied from: https://forums.pottersworld.org/topic/102052-7-pw-timeline/
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
Year 144 -- April 3 - May 13 (2021)
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
Year 158 -- January 7 - February 17 (2023)
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
`;

// Parse "Year N -- Month D - Month D (YYYY[/YYYY])"
const LINE_RE = /^Year\s+(\d+)\s+--\s+([A-Za-z]+\s+\d{1,2})\s*[-–—]\s*([A-Za-z]+\s+\d{1,2})\s*\(([^)]+)\)\s*$/;

function parseTimeline(raw) {
  return raw
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean)
    .map(line => {
      const m = line.match(LINE_RE);
      if (!m) return null;
      const [, yearStr, start, end, years] = m;
      const year = parseInt(yearStr, 10);
      // Notes: carry over any typos as-is. You can normalize months if desired.
      return { year, start, end, years };
    })
    .filter(Boolean)
    .sort((a, b) => a.year - b.year);
}

function renderRows(list) {
  const tbody = document.getElementById('termBody');
  tbody.innerHTML = '';
  const frag = document.createDocumentFragment();
  list.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="padding:10px; border-bottom:1px solid var(--border);">Year ${row.year}</td>
      <td style="padding:10px; border-bottom:1px solid var(--border);">${row.start}</td>
      <td style="padding:10px; border-bottom:1px solid var(--border);">${row.end}</td>
      <td style="padding:10px; border-bottom:1px solid var(--border);">${row.years}</td>
    `;
    frag.appendChild(tr);
  });
  tbody.appendChild(frag);
}

const ALL_TERMS = parseTimeline(RAW_TIMELINE);

// Controls
const searchInput = document.getElementById('searchInput');
const rangeSelect = document.getElementById('rangeSelect');
const clearBtn = document.getElementById('clearBtn');

function inRange(year, range) {
  if (range === 'all') return true;
  const [lo, hi] = range.split('-').map(n => parseInt(n, 10));
  return year >= lo && year <= hi;
}

function applyFilters() {
  const q = (searchInput.value || '').trim().toLowerCase();
  const range = rangeSelect.value;

  const filtered = ALL_TERMS.filter(t => {
    const matchesRange = inRange(t.year, range);
    if (!matchesRange) return false;
    if (!q) return true;

    const hay = `year ${t.year} ${t.start} ${t.end} ${t.years}`.toLowerCase();
    return hay.includes(q);
  });

  renderRows(filtered);
}

searchInput.addEventListener('input', applyFilters);
rangeSelect.addEventListener('change', applyFilters);
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  rangeSelect.value = 'all';
  applyFilters();
});

// Initial render
renderRows(ALL_TERMS);
