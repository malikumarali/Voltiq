import React from 'react';

interface Props {
  setView: (v: string) => void;
}

export default function CaseStudyTeaser({ setView }: Props) {
  return (
    <div className="max-w-3xl mx-auto my-12 px-4 sm:px-6">
      <button
        onClick={() => { setView('case-study-talha-rana-hvac'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="w-full text-left bg-white border border-[#E2E4F5] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white" style={{ background: 'linear-gradient(135deg,#4B59D9,var(--color-electric-blue))' }}>TR</div>
            <div>
              <div className="text-sm font-bold text-[var(--text-primary,#33375A)]">Talha Rana HVAC</div>
              <div className="text-xs font-mono text-[var(--text-secondary,#6A6E8F)]">Aircon service & installation</div>
            </div>
          </div>
          <div className="font-mono text-xs text-[var(--text-secondary,#6A6E8F)] bg-[#EEF0FB] px-3 py-1 rounded-full">CASE STUDY</div>
        </div>

        <h3 className="text-lg font-extrabold text-[var(--text-primary,#33375A)]">From <span style={{ background: 'linear-gradient(100deg,var(--gold,#F2B705),var(--color-electric-blue,#3A47B5))', WebkitBackgroundClip: 'text', color: 'transparent' }}>zero website</span> to a booked-out calendar in 10 months</h3>
        <p className="text-sm text-[var(--text-secondary,#6A6E8F)] mt-2">No site, no tracking, two established competitors owning search. We rebuilt the measurement, priced the offer honestly, then bought the traffic.</p>

        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-[#F5F6FD] border border-[#E2E4F5] rounded-md p-2 text-center">
            <div className="text-[9px] font-mono text-[var(--text-secondary,#6A6E8F)] uppercase">Paying clients</div>
            <div className="font-black text-lg text-[var(--text-primary,#33375A)]">150+</div>
          </div>
          <div className="bg-[#F5F6FD] border border-[#E2E4F5] rounded-md p-2 text-center">
            <div className="text-[9px] font-mono text-[var(--text-secondary,#6A6E8F)] uppercase">Cost / lead</div>
            <div className="font-black text-lg text-[var(--text-primary,#33375A)]">$7.75 <span className="text-[var(--green,#17A34A)] text-sm font-bold">↓66%</span></div>
          </div>
          <div className="bg-[#F5F6FD] border border-[#E2E4F5] rounded-md p-2 text-center">
            <div className="text-[9px] font-mono text-[var(--text-secondary,#6A6E8F)] uppercase">Tracked leads</div>
            <div className="font-black text-lg text-[var(--text-primary,#33375A)]">848</div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-bold text-[var(--color-electric-blue,#3A47B5)]">Read the full case study →</span>
          <span className="text-xs text-[var(--text-secondary,#6A6E8F)] font-mono">Live account data</span>
        </div>
      </button>
    </div>
  );
}
