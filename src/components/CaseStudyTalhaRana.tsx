import React, { useState } from 'react';
import TalhaCharts from './TalhaCharts';

interface Props { setView: (v: string) => void }

export default function CaseStudyTalhaRana({ setView }: Props) {
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [formResponse, setFormResponse] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contactForm, source: 'Case Study - Talha Rana HVAC' })
      });
      const data = await response.json();
      setFormResponse(data.message || 'Thank you! We'll be in touch shortly.');
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setFormResponse('Error submitting form. Please try again.');
    }
  };
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
          <div className="bg-[#F4F7FF] border-2 border-[#BDCEFF] p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-2 text-[#0A163B]">Ready for similar results?</h2>
            <p className="text-[var(--text-secondary,#5A5E82)] mb-6">Let's discuss how we can build a booked-out pipeline for your home-service business.</p>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
              />
              <input
                type="text"
                placeholder="WhatsApp Number (Optional)"
                value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
              />
              <textarea
                rows={3}
                placeholder="Tell us about your business and goals"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full bg-white border border-[#BDCEFF] p-4 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#1A3FD8] hover:bg-[#0A163B] text-white font-sans font-extrabold uppercase text-xs tracking-wider py-3.5 rounded transition-all cursor-pointer shadow-sm"
              >
                Get Your Strategy Call
              </button>
            </form>

            {formResponse && (
              <div className="mt-4 bg-white border border-[#BDCEFF] p-3 rounded text-xs text-[#1A3FD8] font-mono leading-relaxed shadow-sm">
                {formResponse}
              </div>
            )}
          </div>
        </section>

        <footer className="mt-8 border-t border-[var(--border,#E2E4F5)] pt-8 text-sm text-[var(--text-secondary,#5A5E82)]">
          <p>Client name and account details masked at client request. Figures cover Oct 2025 – Aug 2026.</p>
        </footer>
      </div>
    </div>
  );
}
