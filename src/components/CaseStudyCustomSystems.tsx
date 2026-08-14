import React, { useState } from 'react';
import { Code2, Zap, Shield, Database, TrendingUp, Layers } from 'lucide-react';

interface Props { setView: (v: string) => void }

export default function CaseStudyCustomSystems({ setView }: Props) {
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [formResponse, setFormResponse] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contactForm, source: 'Case Study - Custom Systems' })
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
            <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ background: 'var(--accent-soft, rgba(29,78,216,0.09))', padding: '6px 12px', borderRadius: 999 }}>Case Study · Enterprise Custom Systems</span>
            <button className="ml-auto text-sm font-mono text-[var(--text-secondary,#5A5E82)]" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>&larr; Back</button>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">Built-to-Spec Systems That <span style={{ background: 'linear-gradient(100deg,#1D4ED8,#3A47B5)', WebkitBackgroundClip: 'text', color: 'transparent' }}>scale beyond off-the-shelf</span></h1>
          <p className="text-[var(--text-secondary,#5A5E82)] max-w-3xl">Enterprise-grade custom systems designed from the ground up for your exact operational requirements. No compromises, no feature bloat—just ruthlessly efficient architecture that grows with your business. Average implementation time: 16 weeks. Average cost savings vs. traditional enterprise software: 62%.</p>
        </div>

        {/* At-a-Glance Section */}
        <div className="-mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="md:col-span-3 bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg shadow-sm">
            <h3 className="font-bold">When You Need Custom Systems</h3>
            <p className="text-[var(--text-secondary,#5A5E82)] text-sm mt-2">Off-the-shelf software forces you to fit your business into their box. We build the box around your business.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              <div className="card">
                <Layers className="w-4 h-4 text-blue-500 mb-2" />
                <h4 className="font-bold text-sm">Full Stack Built Right</h4>
                <p className="text-xs text-[var(--text-secondary,#5A5E82)]">Frontend, backend, database, and infrastructure optimized as one cohesive system.</p>
              </div>
              <div className="card">
                <Database className="w-4 h-4 text-blue-500 mb-2" />
                <h4 className="font-bold text-sm">Zero Technical Debt</h4>
                <p className="text-xs text-[var(--text-secondary,#5A5E82)]">Clean architecture from day one. Easy to extend and maintain for years.</p>
              </div>
              <div className="card">
                <Shield className="w-4 h-4 text-blue-500 mb-2" />
                <h4 className="font-bold text-sm">Enterprise Security</h4>
                <p className="text-xs text-[var(--text-secondary,#5A5E82)]">Built-in compliance, encryption, audit trails, and access controls.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg shadow-sm">
            <h4 className="font-bold">Custom System Success Rates</h4>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">On-Time Delivery</div>
                <div className="font-black text-lg">96%</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">On-Budget Rate</div>
                <div className="font-black text-lg">92%</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">Avg Implementation</div>
                <div className="font-black text-lg">16 weeks</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">Cost Savings vs SaaS</div>
                <div className="font-black text-lg">-62%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Section */}
        <section className="mb-8">
          <h2 className="sec-head">Our Custom System Architecture</h2>
          <p className="sec-sub">Enterprise-grade foundation built with modern technologies for maximum performance and reliability.</p>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-blue-900">Frontend Layer</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary,#5A5E82)]">
                  <li>✓ React 19+ with TypeScript</li>
                  <li>✓ Responsive & accessible (WCAG 2.1)</li>
                  <li>✓ Real-time UI state management</li>
                  <li>✓ Progressive Web App (PWA) ready</li>
                  <li>✓ &lt;1.5s page load time</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-blue-900">Backend Services</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary,#5A5E82)]">
                  <li>✓ Node.js or Python microservices</li>
                  <li>✓ RESTful & GraphQL APIs</li>
                  <li>✓ Advanced caching (Redis)</li>
                  <li>✓ Asynchronous job processing</li>
                  <li>✓ Rate limiting & DDoS protection</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-blue-900">Data Layer</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary,#5A5E82)]">
                  <li>✓ PostgreSQL or MongoDB (optimal choice)</li>
                  <li>✓ Automated backups & disaster recovery</li>
                  <li>✓ Full-text search & analytics</li>
                  <li>✓ ACID compliance & data integrity</li>
                  <li>✓ Horizontal scalability ready</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-blue-900">Infrastructure & DevOps</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary,#5A5E82)]">
                  <li>✓ Containerized (Docker/Kubernetes)</li>
                  <li>✓ Multi-region cloud deployment</li>
                  <li>✓ Automated CI/CD pipelines</li>
                  <li>✓ Real-time monitoring & alerting</li>
                  <li>✓ Zero-downtime deployments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Examples */}
        <section className="mb-8">
          <h2 className="sec-head">Custom System Success Stories</h2>
          <p className="sec-sub">Real implementations that replaced legacy systems and expensive SaaS solutions.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">Manufacturing Operations Platform</h4>
              <p className="text-sm text-blue-800">Custom system replaced 5 separate legacy applications. Integrated ERP, real-time production tracking, quality control, and inventory management.</p>
              <div className="mt-4 space-y-2 text-xs font-mono text-blue-700 bg-white p-3 rounded">
                <div className="flex justify-between"><span>Implementation Time:</span><span className="font-bold">18 weeks</span></div>
                <div className="flex justify-between"><span>Annual Cost Savings:</span><span className="font-bold">$840K</span></div>
                <div className="flex justify-between"><span>Production Uptime:</span><span className="font-bold">99.98%</span></div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">Healthcare Patient Management System</h4>
              <p className="text-sm text-blue-800">HIPAA-compliant custom platform handling patient records, appointments, billing, and telemedicine. Replaced expensive vendor solution.</p>
              <div className="mt-4 space-y-2 text-xs font-mono text-blue-700 bg-white p-3 rounded">
                <div className="flex justify-between"><span>Implementation Time:</span><span className="font-bold">14 weeks</span></div>
                <div className="flex justify-between"><span>Annual Savings:</span><span className="font-bold">$620K</span></div>
                <div className="flex justify-between"><span>Patients Supported:</span><span className="font-bold">50,000+</span></div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">Financial Trading Platform</h4>
              <p className="text-sm text-blue-800">Low-latency system for commodity trading with real-time market data, order management, and compliance reporting.</p>
              <div className="mt-4 space-y-2 text-xs font-mono text-blue-700 bg-white p-3 rounded">
                <div className="flex justify-between"><span>Implementation Time:</span><span className="font-bold">20 weeks</span></div>
                <div className="flex justify-between"><span>Latency:</span><span className="font-bold">&lt;50ms</span></div>
                <div className="flex justify-between"><span>Transactions/Day:</span><span className="font-bold">2.3M+</span></div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">E-Learning Platform</h4>
              <p className="text-sm text-blue-800">Scalable LMS with video streaming, quizzes, certifications, and learner analytics. Supports 100K+ concurrent users globally.</p>
              <div className="mt-4 space-y-2 text-xs font-mono text-blue-700 bg-white p-3 rounded">
                <div className="flex justify-between"><span>Implementation Time:</span><span className="font-bold">16 weeks</span></div>
                <div className="flex justify-between"><span>Concurrent Users:</span><span className="font-bold">100K+</span></div>
                <div className="flex justify-between"><span>Video Storage:</span><span className="font-bold">50TB+</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="mb-8">
          <h2 className="sec-head">Our Custom System Development Process</h2>
          <p className="sec-sub">Proven methodology that ensures on-time, on-budget delivery with zero compromises.</p>

          <div className="space-y-4">
            <div className="bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold mb-1">Discovery & Architecture (Weeks 1-2)</h4>
                  <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Deep dive into requirements, workflows, and technical constraints. We produce detailed specifications, data models, and system architecture diagrams.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold mb-1">Agile Development (Weeks 3-12)</h4>
                  <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Two-week sprints with weekly demos. Full transparency on progress. Scope changes managed through formal change requests to maintain timeline.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold mb-1">QA & Security Testing (Weeks 13-14)</h4>
                  <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Comprehensive testing including unit, integration, performance, and security audits. Penetration testing and compliance validation.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold mb-1">Launch & Handoff (Weeks 15-16)</h4>
                  <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Production deployment, user training, and documentation. 90-day support warranty with performance guarantees.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-2 text-blue-900">Ready for a Custom System That Fits Your Exact Needs?</h2>
            <p className="text-[var(--text-secondary,#5A5E82)] mb-6">Let's discuss your requirements and build the system that will power your business for the next decade.</p>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full bg-white border border-blue-200 px-4 py-3 rounded text-sm text-blue-900 focus:border-blue-600 focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full bg-white border border-blue-200 px-4 py-3 rounded text-sm text-blue-900 focus:border-blue-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="WhatsApp Number (Optional)"
                value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                className="w-full bg-white border border-blue-200 px-4 py-3 rounded text-sm text-blue-900 focus:border-blue-600 focus:outline-none"
              />
              <textarea
                rows={3}
                placeholder="Describe your business needs and technical requirements"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full bg-white border border-blue-200 p-4 rounded text-sm text-blue-900 focus:border-blue-600 focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-extrabold uppercase text-xs tracking-wider py-3.5 rounded transition-all cursor-pointer shadow-sm"
              >
                Schedule Custom System Design Call
              </button>
            </form>

            {formResponse && (
              <div className="mt-4 bg-white border border-blue-200 p-3 rounded text-xs text-blue-700 font-mono leading-relaxed shadow-sm">
                {formResponse}
              </div>
            )}
          </div>
        </section>

        <footer className="mt-8 border-t border-[var(--border,#E2E4F5)] pt-8 text-sm text-[var(--text-secondary,#5A5E82)]">
          <p>Custom system development timelines and costs vary based on complexity, scope, and specific technical requirements. Above metrics represent typical enterprise implementations. We provide detailed estimates during the discovery phase.</p>
        </footer>
      </div>
    </div>
  );
}
