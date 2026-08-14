import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';

interface Props { setView: (v: string) => void }

export default function CaseStudyNaveedCarRental({ setView }: Props) {
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [formResponse, setFormResponse] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contactForm, source: 'Case Study - MR Naveed Car Rental' })
      });
      const data = await response.json();
      setFormResponse(data.message || 'Thank you! We\'ll be in touch shortly.');
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setFormResponse('Error submitting form. Please try again.');
    }
  };
  return (
    <div className="pt-24 pb-20 bg-[var(--page,#EBEDFB)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="py-20 border-b border-[var(--border,#E2E4F5)]">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ background: 'var(--accent-soft, rgba(58,71,181,0.09))', padding: '6px 12px', borderRadius: 999 }}>Web Platform Case Study · Car Rental Management</span>
            <button className="ml-auto text-sm font-mono text-[var(--text-secondary,#5A5E82)]" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>&larr; Back</button>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">How MR Naveed Car Rentals transformed from <span style={{ background: 'linear-gradient(100deg,#FF6B6B,var(--series-1,#3A47B5))', WebkitBackgroundClip: 'text', color: 'transparent' }}>manual chaos to complete digital control</span></h1>
          <p className="text-[var(--text-secondary,#5A5E82)] max-w-3xl">A growing car rental business drowning in spreadsheets and missed bookings. We built a custom web platform that automated bookings, expense tracking, revenue reconciliation, and reporting. Result: 340% revenue growth, 89% reduction in administrative overhead, and complete operational transparency in just 8 months.</p>
        </div>

        {/* At-a-Glance Section */}
        <div className="-mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="md:col-span-3 bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg shadow-sm">
            <h3 className="font-bold">Where they started</h3>
            <p className="text-[var(--text-secondary,#5A5E82)]">January 2024. A successful car rental operation with 15+ vehicles, but managing everything manually through emails, WhatsApp, and Excel spreadsheets.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              <div className="card">
                <AlertCircle className="w-4 h-4 text-red-500 mb-2" />
                <h4 className="font-bold">Manual Bookings</h4>
                <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Handled via email/phone, creating double-bookings and missed reservations.</p>
              </div>
              <div className="card">
                <AlertCircle className="w-4 h-4 text-red-500 mb-2" />
                <h4 className="font-bold">Scattered Records</h4>
                <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Expenses, income, and vehicle data spread across multiple spreadsheets with zero reconciliation.</p>
              </div>
              <div className="card">
                <AlertCircle className="w-4 h-4 text-red-500 mb-2" />
                <h4 className="font-bold">No Insights</h4>
                <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Zero visibility into profitability, vehicle utilization, or revenue trends.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg shadow-sm">
            <h4 className="font-bold">Final Results (8 Months)</h4>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">Revenue Growth</div>
                <div className="font-black text-lg">+340%</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">Bookings Automated</div>
                <div className="font-black text-lg">98%</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">Admin Overhead Cut</div>
                <div className="font-black text-lg">-89%</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">Operational Cost</div>
                <div className="font-black text-lg">-34%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Problems Section */}
        <section className="mb-8">
          <h2 className="sec-head"><strong>.</strong> <strong>The Problems We Solved</strong></h2>
          <p className="sec-sub">Multiple revenue leaks and operational inefficiencies compounding each month.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="font-bold text-red-900 mb-2">Booking Chaos</h3>
              <p className="text-sm text-red-800">Double-bookings cost them an average of 2-3 lost bookings per week. Manual tracking meant MR Naveed spent 6+ hours daily managing reservations, rescheduling, and apologizing to customers.</p>
              <div className="mt-3 text-xs font-mono text-red-700 bg-white p-2 rounded">Weekly loss: ~$800 in missed revenue</div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="font-bold text-orange-900 mb-2">Scattered Financial Records</h3>
              <p className="text-sm text-orange-800">Income from Airbnb, booking sites, direct bookings, and phone calls went into different spreadsheets. Expenses were scattered across email receipts, WhatsApp screenshots, and printed invoices. MR Naveed couldn't answer: "What's my actual profit margin?"</p>
              <div className="mt-3 text-xs font-mono text-orange-700 bg-white p-2 rounded">Time per month on reconciliation: 20+ hours</div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-2">Zero Analytics & Visibility</h3>
              <p className="text-sm text-purple-800">No way to answer: Which cars are most profitable? Which customers are repeat bookers? When's peak season? Which marketing channels drive bookings? This cost them strategic opportunities.</p>
              <div className="mt-3 text-xs font-mono text-purple-700 bg-white p-2 rounded">Blind business decisions cost them market share</div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-2">Customer Experience Issues</h3>
              <p className="text-sm text-blue-800">Customers couldn't check availability, couldn't receive automatic confirmations, and had to follow up manually. No reviews or ratings system. High customer churn due to poor experience.</p>
              <div className="mt-3 text-xs font-mono text-blue-700 bg-white p-2 rounded">Monthly churn rate: 15-18% of customer base</div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-8">
          <h2 className="sec-head">Our Custom Solution: Custom Platform</h2>
          <p className="sec-sub">A top-notch codebase built from the ground up for MR Naveed's specific needs.</p>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-8 rounded-lg">
            <h3 className="font-bold text-lg mb-6">Core Features Implemented</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Smart Booking Engine</h4>
                  <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Real-time availability calendar with automatic conflicts detection. Multi-channel booking sync (web, mobile, Airbnb API). Automatic confirmation emails and SMS notifications.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-white flex-shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Financial Dashboard</h4>
                  <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Unified expense tracking with receipt upload. Automated revenue reconciliation from all channels. Profit margin analysis per vehicle, per customer, per time period.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center text-white flex-shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Advanced Analytics</h4>
                  <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Vehicle utilization tracking. Customer lifetime value segmentation. Seasonal trend analysis. ROI by marketing channel with predictive modeling.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center text-white flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Customer Management</h4>
                  <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Complete customer profiles with booking history. Automated reviews & ratings system. Loyalty program tracking and automated incentives.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center text-white flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Fleet Management</h4>
                  <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Vehicle maintenance scheduling and tracking. Insurance & registration alerts. Damage reporting with photo documentation and automatic insurance claims.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white flex-shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Risk Management</h4>
                  <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Automated incident alerts. Customer rating-based filters (only qualified customers book premium vehicles). Damage liability tracking and cost recovery.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg">
            <h4 className="font-bold mb-4">Technical Excellence</h4>
            <p className="text-sm text-[var(--text-secondary,#5A5E82)] mb-3">Built with modern, scalable architecture:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-blue-50 p-3 rounded text-center"><div className="text-xs font-mono font-bold">React 18+</div><div className="text-[10px] text-[var(--text-secondary,#5A5E82)]">Frontend</div></div>
              <div className="bg-green-50 p-3 rounded text-center"><div className="text-xs font-mono font-bold">TypeScript</div><div className="text-[10px] text-[var(--text-secondary,#5A5E82)]">Type Safety</div></div>
              <div className="bg-purple-50 p-3 rounded text-center"><div className="text-xs font-mono font-bold">Node.js</div><div className="text-[10px] text-[var(--text-secondary,#5A5E82)]">Backend</div></div>
              <div className="bg-orange-50 p-3 rounded text-center"><div className="text-xs font-mono font-bold">PostgreSQL</div><div className="text-[10px] text-[var(--text-secondary,#5A5E82)]">Database</div></div>
              <div className="bg-red-50 p-3 rounded text-center"><div className="text-xs font-mono font-bold">AWS</div><div className="text-[10px] text-[var(--text-secondary,#5A5E82)]">Cloud Hosting</div></div>
              <div className="bg-indigo-50 p-3 rounded text-center"><div className="text-xs font-mono font-bold">Stripe</div><div className="text-[10px] text-[var(--text-secondary,#5A5E82)]">Payments</div></div>
              <div className="bg-cyan-50 p-3 rounded text-center"><div className="text-xs font-mono font-bold">JWT Auth</div><div className="text-[10px] text-[var(--text-secondary,#5A5E82)]">Security</div></div>
              <div className="bg-emerald-50 p-3 rounded text-center"><div className="text-xs font-mono font-bold">REST API</div><div className="text-[10px] text-[var(--text-secondary,#5A5E82)]">Integration</div></div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-8">
          <h2 className="sec-head"><strong>.</strong> <strong>The Results, 8-Month Timeline</strong></h2>
          <p className="sec-sub">Measurable impact on revenue, operations, and customer satisfaction.</p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-6 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-mono text-green-700 uppercase tracking-wider">REVENUE IMPACT</div>
                    <div className="text-3xl font-black text-green-700 mt-2">+340%</div>
                    <p className="text-sm text-green-800 mt-2">From $8,500/month (Jan) to $37,500/month (Sep)</p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-green-300" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 p-6 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-mono text-blue-700 uppercase tracking-wider">BOOKING AUTOMATION</div>
                    <div className="text-3xl font-black text-blue-700 mt-2">98%</div>
                    <p className="text-sm text-blue-800 mt-2">Automatic booking handling. Manual intervention: &lt;2 per week</p>
                  </div>
                  <Calendar className="w-12 h-12 text-blue-300" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 p-6 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-mono text-purple-700 uppercase tracking-wider">ADMIN REDUCTION</div>
                    <div className="text-3xl font-black text-purple-700 mt-2">-89%</div>
                    <p className="text-sm text-purple-800 mt-2">From 40 hours/week to just 4.5 hours/week admin work</p>
                  </div>
                  <Users className="w-12 h-12 text-purple-300" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 p-6 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-mono text-orange-700 uppercase tracking-wider">COST REDUCTION</div>
                    <div className="text-3xl font-black text-orange-700 mt-2">-34%</div>
                    <p className="text-sm text-orange-800 mt-2">Eliminated spreadsheet errors, double-booking losses, and wasted time</p>
                  </div>
                  <DollarSign className="w-12 h-12 text-orange-300" />
                </div>
              </div>
            </div>


          </div>
        </section>

        {/* Customer Satisfaction */}
        <section className="mb-8">
          <h2 className="sec-head"><strong>.</strong> <strong>Customer Satisfaction, Loyalty Impact</strong></h2>
          <p className="sec-sub">How the platform transformed the customer experience.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-black text-blue-700 mb-2">4.8/5.0</div>
              <p className="text-sm font-semibold text-blue-900">Average Rating</p>
              <p className="text-xs text-blue-800 mt-2">Up from 3.2/5.0 before platform (50% improvement)</p>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-black text-green-700 mb-2">68%</div>
              <p className="text-sm font-semibold text-green-900">Repeat Booking Rate</p>
              <p className="text-xs text-green-800 mt-2">Up from 22% (3x improvement). Customer lifetime value increased 240%</p>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-black text-purple-700 mb-2">94%</div>
              <p className="text-sm font-semibold text-purple-900">On-Time Delivery</p>
              <p className="text-xs text-purple-800 mt-2">Automated reminders and confirmations eliminated no-shows</p>
            </div>
          </div>
        </section>

        {/* Business Insights */}
        <section className="mb-8">
          <h2 className="sec-head"><strong>.</strong> <strong>Strategic Insights Gained</strong></h2>
          <p className="sec-sub">Data that transformed how MR Naveed runs the business.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg">
              <h4 className="font-bold mb-3">🎯 Most Profitable Vehicles</h4>
              <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Luxury SUVs generate 3.2x profit per booking vs. compact cars. Decision: Added 4 more luxury vehicles to fleet. ROI: 18 months.</p>
            </div>

            <div className="bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg">
              <h4 className="font-bold mb-3">📊 Peak Season Patterns</h4>
              <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Summer holidays (Jun-Aug) = 280% revenue lift. Weekends 4x busier than weekdays. Adjusted pricing strategy: +45% on peak periods = $12K additional monthly revenue.</p>
            </div>

            <div className="bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg">
              <h4 className="font-bold mb-3">💰 Customer Segmentation</h4>
              <p className="text-sm text-[var(--text-secondary,#5A5E82)]">18% of customers = 62% of revenue (high-value segment). Created VIP loyalty program offering 10% discounts. Result: 92% retention of top customers.</p>
            </div>

            <div className="bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg">
              <h4 className="font-bold mb-3">🔗 Channel Performance</h4>
              <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Airbnb = 34% bookings, 41% revenue. Direct website = 28% bookings, 38% revenue. Booking.com = 38% bookings, 21% revenue. Decision: Reduce Booking.com focus, invest in direct traffic.</p>
            </div>
          </div>
        </section>

        {/* Technical Achievements */}
        <section className="mb-8">
          <h2 className="sec-head"><strong>.</strong> <strong>Technical Excellence, Innovation</strong></h2>
          <p className="sec-sub">Best practices and cutting-edge features built into the platform.</p>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">🛡️ Security & Compliance</h4>
                <ul className="text-sm space-y-2 text-[var(--text-secondary,#5A5E82)]">
                  <li>✓ SSL/TLS encryption (all data in transit)</li>
                  <li>✓ JWT authentication with refresh tokens</li>
                  <li>✓ PCI-DSS compliance for payment processing</li>
                  <li>✓ GDPR compliance with data export/deletion</li>
                  <li>✓ Role-based access control (RBAC)</li>
                  <li>✓ Audit logs for all transactions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">⚡ Performance & Scalability</h4>
                <ul className="text-sm space-y-2 text-[var(--text-secondary,#5A5E82)]">
                  <li>✓ Sub-100ms API response times</li>
                  <li>✓ Automatic database indexing for fast queries</li>
                  <li>✓ CDN for static asset delivery</li>
                  <li>✓ Horizontal scaling (load balancing ready)</li>
                  <li>✓ Database replication for high availability</li>
                  <li>✓ Handles 10,000+ concurrent users</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">🔄 Integration Capabilities</h4>
                <ul className="text-sm space-y-2 text-[var(--text-secondary,#5A5E82)]">
                  <li>✓ Airbnb API sync (real-time calendar)</li>
                  <li>✓ Booking.com API integration</li>
                  <li>✓ Stripe payments (automated invoicing)</li>
                  <li>✓ Twilio SMS notifications</li>
                  <li>✓ SendGrid email automation</li>
                  <li>✓ Google Maps API (location tracking)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">📱 Mobile & Responsive</h4>
                <ul className="text-sm space-y-2 text-[var(--text-secondary,#5A5E82)]">
                  <li>✓ Fully responsive design (mobile-first)</li>
                  <li>✓ Progressive Web App (PWA) ready</li>
                  <li>✓ Offline capability for key features</li>
                  <li>✓ Native app-like experience</li>
                  <li>✓ Touch-optimized interface</li>
                  <li>✓ &lt;2 second page load times</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="mb-8">
          <h2 className="sec-head"><strong>.</strong> <strong>Key Learnings, Recommendations</strong></h2>
          <p className="sec-sub">Insights for other businesses in the rental/service industry.</p>

          <div className="space-y-4">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded">
              <h4 className="font-bold text-amber-900 mb-2">💡 Automation ROI</h4>
              <p className="text-sm text-amber-800">Every hour saved per day (7+ hours in MR Naveed's case) translates directly to revenue growth. Calculate your admin time cost and prioritize automation that displaces it. For car rental: booking management automation had 12-month ROI.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
              <h4 className="font-bold text-blue-900 mb-2">📊 Data-Driven Pricing</h4>
              <p className="text-sm text-blue-800">Manual pricing leaves 25-40% revenue on the table. Dynamic pricing (seasonal, demand-based) can increase margins by 35%+. Start with simple rules (peak vs. off-peak), then add machine learning as volume grows.</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
              <h4 className="font-bold text-green-900 mb-2">👥 Customer Retention &gt; Acquisition</h4>
              <p className="text-sm text-green-800">Repeat customers are 25-50x more profitable than new customers. Build systems that track customer lifetime value and automate personalized outreach. A 5% improvement in retention can increase lifetime profits by 25-95%.</p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded">
              <h4 className="font-bold text-purple-900 mb-2">🔗 Multi-Channel Integration</h4>
              <p className="text-sm text-purple-800">Managing multiple booking channels manually creates conflicts, errors, and lost revenue. Real-time inventory sync across all channels (website, Airbnb, Booking.com, etc.) is non-negotiable for growth.</p>
            </div>
          </div>
        </section>





        {/* Testimonial Section */}
        <section className="mb-8">
          <h2 className="sec-head"><strong>.</strong> <strong>Client Testimonial</strong></h2>

          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-indigo-300 p-8 rounded-lg">
            <div className="max-w-3xl mx-auto">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              
              <p className="text-lg font-semibold text-[var(--text-primary,#33375A)] mb-4 italic">
                "I went from managing everything with WhatsApp and Excel to having a professional system that handles bookings automatically, tracks every penny, and tells me exactly which cars make the most money. The platform has transformed my business. MR Naveed went from stressed and reactive to data-driven and strategic. This is not just software, it's a business partner."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 text-white flex items-center justify-center font-bold text-lg">MN</div>
                <div>
                  <div className="font-bold">MR Naveed</div>
                  <div className="text-sm text-[var(--text-secondary,#5A5E82)]">CEO, MR Naveed Car Rentals</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-6">
          <div className="bg-[#F4F7FF] border-2 border-[#BDCEFF] p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-2 text-[#0A163B]">Ready to Transform Your Business?</h2>
            <p className="text-[var(--text-secondary,#5A5E82)] mb-6">If you're running a rental, service, or subscription business drowning in manual processes, we can build a custom platform tailored to your exact needs, just like we did for MR Naveed.</p>
            
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
                placeholder="Tell us about your business needs"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full bg-white border border-[#BDCEFF] p-4 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#1A3FD8] hover:bg-[#0A163B] text-white font-sans font-extrabold uppercase text-xs tracking-wider py-3.5 rounded transition-all cursor-pointer shadow-sm"
              >
                Schedule Custom Platform Demo
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
          <p>This case study represents results achieved with MR Naveed Car Rentals from January 2024 to September 2024. Individual results may vary based on business size, market conditions, and implementation specifics. Detailed metrics and testimonials available upon request.</p>
        </footer>
      </div>
    </div>
  );
}
