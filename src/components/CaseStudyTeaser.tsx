import React from 'react';

interface Props {
  setView: (v: string) => void;
}

export default function CaseStudyTeaser({ setView }: Props) {
  return (
    <div className="max-w-5xl mx-auto my-12 px-4 sm:px-6">
      <div className="space-y-6">
        {/* TALHA RANA HVAC CASE STUDY */}
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

        {/* MR NAVEED CAR RENTAL CASE STUDY */}
        <button
          onClick={() => { setView('case-study-naveed-car-rental'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="w-full text-left bg-white border border-[#E2E4F5] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white" style={{ background: 'linear-gradient(135deg,#FF6B6B,#E74C3C)' }}>MN</div>
              <div>
                <div className="text-sm font-bold text-[var(--text-primary,#33375A)]">MR Naveed Car Rentals</div>
                <div className="text-xs font-mono text-[var(--text-secondary,#6A6E8F)]">Custom booking & management platform</div>
              </div>
            </div>
            <div className="font-mono text-xs text-[var(--text-secondary,#6A6E8F)] bg-[#FFE8E8] px-3 py-1 rounded-full">CASE STUDY</div>
          </div>

          <h3 className="text-lg font-extrabold text-[var(--text-primary,#33375A)]">From <span style={{ background: 'linear-gradient(100deg,#FF6B6B,#3A47B5)', WebkitBackgroundClip: 'text', color: 'transparent' }}>manual chaos to complete digital control</span></h3>
          <p className="text-sm text-[var(--text-secondary,#6A6E8F)] mt-2">Drowning in spreadsheets and missed bookings. We built a custom web platform that automated everything. Result: 340% revenue growth and 89% reduction in admin overhead.</p>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-[#FFF5F5] border border-[#FFE2E2] rounded-md p-2 text-center">
              <div className="text-[9px] font-mono text-[var(--text-secondary,#6A6E8F)] uppercase">Revenue Growth</div>
              <div className="font-black text-lg text-[#E74C3C]">+340%</div>
            </div>
            <div className="bg-[#FFF5F5] border border-[#FFE2E2] rounded-md p-2 text-center">
              <div className="text-[9px] font-mono text-[var(--text-secondary,#6A6E8F)] uppercase">Bookings Automated</div>
              <div className="font-black text-lg text-[#E74C3C]">98%</div>
            </div>
            <div className="bg-[#FFF5F5] border border-[#FFE2E2] rounded-md p-2 text-center">
              <div className="text-[9px] font-mono text-[var(--text-secondary,#6A6E8F)] uppercase">Admin Cut</div>
              <div className="font-black text-lg text-[#E74C3C]">-89%</div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-bold text-[#E74C3C]">Read the full case study →</span>
            <span className="text-xs text-[var(--text-secondary,#6A6E8F)] font-mono">Real results, Jan-Sep 2024</span>
          </div>
        </button>

        {/* AI AUTOMATION CASE STUDY */}
        <button
          onClick={() => { setView('case-study-ai-automation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="w-full text-left bg-white border border-[#E2E4F5] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white" style={{ background: 'linear-gradient(135deg,#58B780,#17A34A)' }}>AI</div>
              <div>
                <div className="text-sm font-bold text-[var(--text-primary,#33375A)]">AI Automation Solutions</div>
                <div className="text-xs font-mono text-[var(--text-secondary,#6A6E8F)]">Intelligent workflows & predictive systems</div>
              </div>
            </div>
            <div className="font-mono text-xs text-[var(--text-secondary,#6A6E8F)] bg-[#F0FDF4] px-3 py-1 rounded-full">CASE STUDY</div>
          </div>

          <h3 className="text-lg font-extrabold text-[var(--text-primary,#33375A)]">Workflows that <span style={{ background: 'linear-gradient(100deg,#58B780,#3A47B5)', WebkitBackgroundClip: 'text', color: 'transparent' }}>think and learn from patterns</span></h3>
          <p className="text-sm text-[var(--text-secondary,#6A6E8F)] mt-2">ML models that predict customer behavior, automate processes 24/7, and continuously improve accuracy. No manual bottlenecks. Just intelligent systems that scale.</p>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-md p-2 text-center">
              <div className="text-[9px] font-mono text-[var(--text-secondary,#6A6E8F)] uppercase">Processing Time</div>
              <div className="font-black text-lg text-[#17A34A]">-78%</div>
            </div>
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-md p-2 text-center">
              <div className="text-[9px] font-mono text-[var(--text-secondary,#6A6E8F)] uppercase">Accuracy Gained</div>
              <div className="font-black text-lg text-[#17A34A]">+94%</div>
            </div>
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-md p-2 text-center">
              <div className="text-[9px] font-mono text-[var(--text-secondary,#6A6E8F)] uppercase">Cost/Transaction</div>
              <div className="font-black text-lg text-[#17A34A]">-62%</div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-bold text-[#17A34A]">Read the full case study →</span>
            <span className="text-xs text-[var(--text-secondary,#6A6E8F)] font-mono">Enterprise implementations</span>
          </div>
        </button>

        {/* CUSTOM SYSTEMS CASE STUDY */}
        <button
          onClick={() => { setView('case-study-custom-solutions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="w-full text-left bg-white border border-[#E2E4F5] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white" style={{ background: 'linear-gradient(135deg,#1D4ED8,#3A47B5)' }}>CS</div>
              <div>
                <div className="text-sm font-bold text-[var(--text-primary,#33375A)]">Custom Systems</div>
                <div className="text-xs font-mono text-[var(--text-secondary,#6A6E8F)]">Enterprise software built exactly for you</div>
              </div>
            </div>
            <div className="font-mono text-xs text-[var(--text-secondary,#6A6E8F)] bg-[#EEF0FB] px-3 py-1 rounded-full">CASE STUDY</div>
          </div>

          <h3 className="text-lg font-extrabold text-[var(--text-primary,#33375A)]">Built-to-spec systems that <span style={{ background: 'linear-gradient(100deg,#1D4ED8,#3A47B5)', WebkitBackgroundClip: 'text', color: 'transparent' }}>scale beyond off-the-shelf</span></h3>
          <p className="text-sm text-[var(--text-secondary,#6A6E8F)] mt-2">No feature bloat. No forced workflows. Just ruthlessly efficient architecture designed for your exact needs. Full stack built right with zero technical debt.</p>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-[#EEF0FB] border border-[#BDCEFF] rounded-md p-2 text-center">
              <div className="text-[9px] font-mono text-[var(--text-secondary,#6A6E8F)] uppercase">On-Time Delivery</div>
              <div className="font-black text-lg text-[#1D4ED8]">96%</div>
            </div>
            <div className="bg-[#EEF0FB] border border-[#BDCEFF] rounded-md p-2 text-center">
              <div className="text-[9px] font-mono text-[var(--text-secondary,#6A6E8F)] uppercase">Avg Build Time</div>
              <div className="font-black text-lg text-[#1D4ED8]">16 weeks</div>
            </div>
            <div className="bg-[#EEF0FB] border border-[#BDCEFF] rounded-md p-2 text-center">
              <div className="text-[9px] font-mono text-[var(--text-secondary,#6A6E8F)] uppercase">vs SaaS Cost</div>
              <div className="font-black text-lg text-[#1D4ED8]">-62%</div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-bold text-[#1D4ED8]">Read the full case study →</span>
            <span className="text-xs text-[var(--text-secondary,#6A6E8F)] font-mono">Real implementations</span>
          </div>
        </button>
      </div>
    </div>
  );
}
