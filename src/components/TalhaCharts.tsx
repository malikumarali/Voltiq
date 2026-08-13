import React, { useState } from 'react';

const DATA = [
  { m: 'Dec 2025', s: 'Dec', leads: 47, cost: 678.27, cpl: 14.43, partial: false },
  { m: 'Jan 2026', s: 'Jan', leads: 50, cost: 649.82, cpl: 13.0, partial: false },
  { m: 'Feb 2026', s: 'Feb', leads: 47, cost: 589.71, cpl: 12.55, partial: false },
  { m: 'Mar 2026', s: 'Mar', leads: 105, cost: 945.5, cpl: 9.0, partial: false },
  { m: 'Apr 2026', s: 'Apr', leads: 106, cost: 844.7, cpl: 7.97, partial: false },
  { m: 'May 2026', s: 'May', leads: 145, cost: 965.78, cpl: 6.66, partial: false },
  { m: 'Jun 2026', s: 'Jun', leads: 204, cost: 1005.24, cpl: 4.93, partial: false },
  { m: 'Jul 2026', s: 'Jul', leads: 95, cost: 700.11, cpl: 7.37, partial: false },
  { m: 'Aug 1–5', s: 'Aug', leads: 49, cost: 189.45, cpl: 3.87, partial: true }
];

function usd(v: number) {
  return '$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function LeadsBarChart() {
  const [hover, setHover] = useState<number | null>(null);
  const max = 220;
  const ticks = [0, 50, 100, 150, 200];
  const W = 760, H = 320, L = 44, R = 12, T = 26, B = 42;
  const pw = W - L - R, ph = H - T - B;
  const band = pw / DATA.length, bw = Math.min(24, band - 16);

  return (
    <figure>
      <figcaption>Monthly leads</figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg">
        {/* grid ticks */}
        {ticks.map((t, i) => {
          const y = T + ph - (t / max) * ph;
          return <text key={i} x={L - 9} y={y + 4} className="tick" textAnchor="end">{t}</text>;
        })}

        {/* bars */}
        {DATA.map((d, i) => {
          const x = L + (i * band) + (band - bw) / 2;
          const h = Math.max(2, (d.leads / max) * ph);
          const y = T + ph - h;
          return (
            <g key={i}>
              <rect x={x} y={y} width={bw} height={h} fill="var(--series-1,#3A47B5)" className={d.partial ? 'bar dim' : 'bar'} />
              <rect
                x={x - 4}
                y={T}
                width={bw + 8}
                height={ph}
                fill="transparent"
                className="hit"
                onMouseEnter={(e) => setHover(i)}
                onMouseMove={(e) => setHover(i)}
                onMouseLeave={() => setHover(null)}
              />
              <text x={x + bw / 2} y={T + ph + 16} className="tick" textAnchor="middle">{d.s}</text>
            </g>
          );
        })}
      </svg>

      {hover !== null && (
        <div className="tt" style={{ position: 'relative', marginTop: 8 }}>
          <div className="bg-[var(--text-primary,#33375A)] text-white p-2 rounded">{DATA[hover].m} — {DATA[hover].leads} leads</div>
        </div>
      )}

      <button className="tbl-toggle mt-4" onClick={() => { const t = document.getElementById('leads-table'); if (t) t.classList.toggle('hidden'); }}>Show data table</button>

      <div id="leads-table" className="tbl-wrap hidden">
        <table>
          <thead>
            <tr><th>Month</th><th>Leads</th><th>Cost</th><th>CPL</th></tr>
          </thead>
          <tbody>
            {DATA.map((d, i) => (
              <tr key={i}><td style={{ textAlign: 'left' }}>{d.m}</td><td>{d.leads}</td><td>{usd(d.cost)}</td><td>{d.cpl}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export function CplLineChart() {
  const [hover, setHover] = useState<number | null>(null);
  const max = 16;
  const W = 760, H = 300, L = 52, R = 92, T = 26, B = 42;
  const pw = W - L - R, ph = H - T - B;
  const step = pw / (DATA.length - 1);
  const pts = DATA.map((d, i) => ({ x: L + step * i, y: T + ph - (d.cpl / max) * ph, d }));

  const line = pts.map((p, i) => (i ? 'L' : 'M') + p.x.toFixed(1) + ',' + p.y.toFixed(1)).join(' ');
  const area = line + ' L' + pts[pts.length - 1].x.toFixed(1) + ',' + (T + ph) + ' L' + pts[0].x.toFixed(1) + ',' + (T + ph) + ' Z';

  return (
    <figure>
      <figcaption>Cost per lead</figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg">
        {([0, 4, 8, 12, 16] as number[]).map((t, i) => {
          const y = T + ph - (t / max) * ph;
          return <text key={i} x={L - 9} y={y + 4} className="tick" textAnchor="end">{t === 0 ? '0' : '$' + t}</text>;
        })}
        <path d={area} fill="var(--series-1,#3A47B5)" fillOpacity={0.1} />
        <path d={line} fill="none" stroke="var(--series-1,#3A47B5)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

        {pts.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={5} fill="white" stroke="var(--series-1,#3A47B5)" />
            <rect x={p.x - 8} y={T} width={16} height={ph} fill="transparent" onMouseEnter={() => setHover(i)} onMouseMove={() => setHover(i)} onMouseLeave={() => setHover(null)} />
            <text x={p.x} y={T + ph + 16} className="tick" textAnchor="middle">{p.d.s}</text>
          </g>
        ))}
      </svg>

      {hover !== null && (
        <div className="tt" style={{ position: 'relative', marginTop: 8 }}>
          <div className="bg-[var(--text-primary,#33375A)] text-white p-2 rounded">{DATA[hover].m} — {usd(DATA[hover].cost)} — ${DATA[hover].cpl}</div>
        </div>
      )}

      <button className="tbl-toggle mt-4" onClick={() => { const t = document.getElementById('cpl-table'); if (t) t.classList.toggle('hidden'); }}>Show data table</button>

      <div id="cpl-table" className="tbl-wrap hidden">
        <table>
          <thead>
            <tr><th>Month</th><th>Cost</th><th>CPL</th></tr>
          </thead>
          <tbody>
            {DATA.map((d, i) => (
              <tr key={i}><td style={{ textAlign: 'left' }}>{d.m}</td><td>{usd(d.cost)}</td><td>{d.cpl}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export default function TalhaCharts() {
  return (
    <div className="space-y-8">
      <LeadsBarChart />
      <CplLineChart />
    </div>
  );
}
