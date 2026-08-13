import React from 'react';
import TalhaCharts from './TalhaCharts';

interface Props { setView: (v: string) => void }

export default function CaseStudyTalhaRana({ setView }: Props) {
  return (
    <div className="pt-24 pb-20 bg-[var(--page,#EBEDFB)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 border-b border-[var(--border,#E2E4F5)]">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ background: 'var(--accent-soft, rgba(58,71,181,0.09))', padding: '6px 12px', borderRadius: 999 }}>Google Ads case study · Home service</span>
            <button className="ml-auto text-sm font-mono text-[var(--text-secondary,#5A5E82)]" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>&larr; Back</button>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">How Talha Rana HVAC went from <span style={{ background: 'linear-gradient(100deg,var(--gold,#F2B705),var(--series-1,#3A47B5))', WebkitBackgroundClip: 'text', color: 'transparent' }}>zero to a booked-out calendar</span></h1>
          <p className="text-[var(--text-secondary,#5A5E82)] max-w-3xl">An aircon repair and installation business with no website and no tracking. Ten months later the account books more than 200 enquiries in its best month, at a third of what a lead used to cost.</p>
        </div>

        <div className="-mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="md:col-span-3 bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg shadow-sm">
            <h3 className="font-bold">Where they started</h3>
            <p className="text-[var(--text-secondary,#5A5E82)]">October 2025. A skilled aircon crew with no way for anyone to find them. No website, no tracking, crowded market.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              <div className="card"><h4 className="font-bold">No website</h4><p className="text-sm text-[var(--text-secondary,#5A5E82)]">Nowhere to send traffic, nowhere to explain the packages, nothing for Google to score.</p></div>
              <div className="card"><h4 className="font-bold">No tracking</h4><p className="text-sm text-[var(--text-secondary,#5A5E82)]">Zero conversion actions. No way to tell a lead from a bounce.</p></div>
              <div className="card"><h4 className="font-bold">Crowded market</h4><p className="text-sm text-[var(--text-secondary,#5A5E82)]">Two established local players already owned the top of search results.</p></div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg shadow-sm">
            <h4 className="font-bold">At-a-glance</h4>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">Ad spend managed</div>
                <div className="font-black text-lg">$7,174</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">Tracked leads</div>
                <div className="font-black text-lg">848</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">Blended cost / lead</div>
                <div className="font-black text-lg">$7.75</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">Paying clients</div>
                <div className="font-black text-lg">150+</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="sec-head"><span className="sec-num">08</span> What it produced</h2>
          <p className="sec-sub">Every figure below is pulled live from the account. Client name, domain, city and account ID are masked.</p>

          <div className="card">
            <TalhaCharts />
          </div>
        </section>

        <section className="mt-8">
          <div className="cta">
            <h2 className="text-xl font-bold">Want help building a booked-out pipeline?</h2>
            <p className="text-[var(--text-secondary,#5A5E82)] max-w-2xl mx-auto">If you'd like a similar playbook for your home-service business, book a quick strategy call.</p>
            <div className="mt-6">
              <button onClick={() => { setView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn">Book a Free Call</button>
            </div>
          </div>
        </section>

        <footer className="mt-8 border-t border-[var(--border,#E2E4F5)] pt-8 text-sm text-[var(--text-secondary,#5A5E82)]">
          <p>Client name and account details masked at client request. Figures cover Oct 2025 – Aug 2026.</p>
        </footer>
      </div>
    </div>
  );
}
