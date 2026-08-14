import React, { useState } from 'react';
import { Zap, Code2, Brain, Gauge, TrendingUp, Cpu } from 'lucide-react';

interface Props { setView: (v: string) => void }

export default function CaseStudyAIAutomation({ setView }: Props) {
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [formResponse, setFormResponse] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contactForm, source: 'Case Study - AI Automation' })
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
            <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ background: 'var(--accent-soft, rgba(88,183,128,0.09))', padding: '6px 12px', borderRadius: 999 }}>Case Study · AI Automation & Workflow Intelligence</span>
            <button className="ml-auto text-sm font-mono text-[var(--text-secondary,#5A5E82)]" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>&larr; Back</button>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">Automated Workflows That Think <span style={{ background: 'linear-gradient(100deg,#58B780,var(--series-1,#3A47B5))', WebkitBackgroundClip: 'text', color: 'transparent' }}>and learn from patterns</span></h1>
          <p className="text-[var(--text-secondary,#5A5E82)] max-w-3xl">Intelligent automation systems powered by machine learning. We integrate cutting-edge AI models that continuously improve processes, eliminate human bottlenecks, and deliver predictive insights. 78% average reduction in manual processing time across all implementations.</p>
        </div>

        {/* At-a-Glance Section */}
        <div className="-mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="md:col-span-3 bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg shadow-sm">
            <h3 className="font-bold">AI Automation Solutions We Build</h3>
            <p className="text-[var(--text-secondary,#5A5E82)] text-sm mt-2">Custom AI models tailored to your specific workflows and business logic.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              <div className="card">
                <Brain className="w-4 h-4 text-green-500 mb-2" />
                <h4 className="font-bold text-sm">Predictive Analytics</h4>
                <p className="text-xs text-[var(--text-secondary,#5A5E82)]">ML models that forecast customer behavior, demand, and churn.</p>
              </div>
              <div className="card">
                <Zap className="w-4 h-4 text-green-500 mb-2" />
                <h4 className="font-bold text-sm">Process Automation</h4>
                <p className="text-xs text-[var(--text-secondary,#5A5E82)]">Intelligent bots that handle repetitive tasks 24/7.</p>
              </div>
              <div className="card">
                <Cpu className="w-4 h-4 text-green-500 mb-2" />
                <h4 className="font-bold text-sm">Natural Language Processing</h4>
                <p className="text-xs text-[var(--text-secondary,#5A5E82)]">AI chatbots, document analysis, and sentiment detection.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg shadow-sm">
            <h4 className="font-bold">Key Metrics Across Clients</h4>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">Processing Time Cut</div>
                <div className="font-black text-lg">-78%</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">Accuracy Improvement</div>
                <div className="font-black text-lg">+94%</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">Cost Per Transaction</div>
                <div className="font-black text-lg">-62%</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-secondary,#5A5E82)]">24/7 Availability</div>
                <div className="font-black text-lg">✓ Yes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <section className="mb-8">
          <h2 className="sec-head">Technology Stack</h2>
          <p className="sec-sub">Enterprise-grade AI infrastructure built for scale and reliability.</p>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded border border-green-200 text-center">
                <div className="text-xs font-mono font-bold text-green-700 mb-2">AI Frameworks</div>
                <div className="text-sm text-[var(--text-secondary,#5A5E82)]">TensorFlow, PyTorch, LLMs</div>
              </div>
              <div className="bg-white p-4 rounded border border-green-200 text-center">
                <div className="text-xs font-mono font-bold text-green-700 mb-2">Deployment</div>
                <div className="text-sm text-[var(--text-secondary,#5A5E82)]">AWS SageMaker, GPU clusters</div>
              </div>
              <div className="bg-white p-4 rounded border border-green-200 text-center">
                <div className="text-xs font-mono font-bold text-green-700 mb-2">Data Pipeline</div>
                <div className="text-sm text-[var(--text-secondary,#5A5E82)]">Apache Spark, Kafka</div>
              </div>
              <div className="bg-white p-4 rounded border border-green-200 text-center">
                <div className="text-xs font-mono font-bold text-green-700 mb-2">Monitoring</div>
                <div className="text-sm text-[var(--text-secondary,#5A5E82)]">Model drift detection & alerts</div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-8">
          <h2 className="sec-head">Real-World Applications</h2>
          <p className="sec-sub">How AI automation creates immediate ROI across industries.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg">
              <h4 className="font-bold mb-3">E-Commerce & Retail</h4>
              <p className="text-sm text-[var(--text-secondary,#5A5E82)]">AI-powered recommendation engine increased average order value by 34%. Automated inventory forecasting reduced stockouts by 89% and overstock by 56%.</p>
              <div className="mt-3 text-xs font-mono text-green-700 bg-green-50 p-2 rounded">Result: $2.3M additional annual revenue</div>
            </div>

            <div className="bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg">
              <h4 className="font-bold mb-3">Customer Support Automation</h4>
              <p className="text-sm text-[var(--text-secondary,#5A5E82)]">NLP-powered chatbot resolved 78% of support tickets without human intervention. Response time dropped from 4 hours to 2 minutes.</p>
              <div className="mt-3 text-xs font-mono text-green-700 bg-green-50 p-2 rounded">Result: 68% reduction in support costs</div>
            </div>

            <div className="bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg">
              <h4 className="font-bold mb-3">Predictive Maintenance</h4>
              <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Machine learning models predict equipment failures 14 days in advance with 92% accuracy. Unplanned downtime reduced by 73%.</p>
              <div className="mt-3 text-xs font-mono text-green-700 bg-green-50 p-2 rounded">Result: $4.1M saved in avoided downtime</div>
            </div>

            <div className="bg-white border border-[var(--border,#E2E4F5)] p-6 rounded-lg">
              <h4 className="font-bold mb-3">Fraud Detection</h4>
              <p className="text-sm text-[var(--text-secondary,#5A5E82)]">Real-time AI model detects fraudulent transactions with 97% accuracy. False positive rate reduced from 3.2% to 0.4%.</p>
              <div className="mt-3 text-xs font-mono text-green-700 bg-green-50 p-2 rounded">Result: $18.7M in fraud prevented</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-2 text-green-900">Transform Your Operations with AI Automation</h2>
            <p className="text-[var(--text-secondary,#5A5E82)] mb-6">Ready to eliminate manual bottlenecks and scale intelligent processes? Let's discuss your automation roadmap.</p>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full bg-white border border-green-200 px-4 py-3 rounded text-sm text-green-900 focus:border-green-600 focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full bg-white border border-green-200 px-4 py-3 rounded text-sm text-green-900 focus:border-green-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="WhatsApp Number (Optional)"
                value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                className="w-full bg-white border border-green-200 px-4 py-3 rounded text-sm text-green-900 focus:border-green-600 focus:outline-none"
              />
              <textarea
                rows={3}
                placeholder="Describe your automation needs and workflows"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full bg-white border border-green-200 p-4 rounded text-sm text-green-900 focus:border-green-600 focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-sans font-extrabold uppercase text-xs tracking-wider py-3.5 rounded transition-all cursor-pointer shadow-sm"
              >
                Schedule AI Automation Consultation
              </button>
            </form>

            {formResponse && (
              <div className="mt-4 bg-white border border-green-200 p-3 rounded text-xs text-green-700 font-mono leading-relaxed shadow-sm">
                {formResponse}
              </div>
            )}
          </div>
        </section>

        <footer className="mt-8 border-t border-[var(--border,#E2E4F5)] pt-8 text-sm text-[var(--text-secondary,#5A5E82)]">
          <p>AI Automation metrics represent results across enterprise implementations from 2023-2026. Individual results may vary based on use case complexity and data quality.</p>
        </footer>
      </div>
    </div>
  );
}
