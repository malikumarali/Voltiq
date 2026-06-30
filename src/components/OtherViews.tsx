import React, { useState } from "react";
import { 
  Zap, ArrowRight, Check, MessageSquare, Mail, MapPin, 
  ChevronRight, Calendar, Clock, Star, Phone, ShieldCheck, 
  ArrowLeft, Search, Bookmark, Clock4, ExternalLink, Briefcase, FileText
} from "lucide-react";
import { BlogPost, ServiceDetail, Niche } from "../types";
import { SERVICES_DATA, BLOG_POSTS_DATA, FAQ_DATA } from "../data";

interface OtherViewsProps {
  view: string;
  setView: (view: any) => void;
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

export default function OtherViews({ view, setView, selectedId, setSelectedId }: OtherViewsProps) {
  
  // --- STATE FOR FORMS & BOOKING ---
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "", service: "Full Package", message: "" });
  const [formResponse, setFormResponse] = useState<string | null>(null);
  const [bookingForm, setBookingForm] = useState({ name: "", email: "", date: "2026-06-30", timeSlot: "10:00 AM", service: "Full Package" });
  const [bookingResponse, setBookingResponse] = useState<string | null>(null);

  // Careers Form State
  const [careersForm, setCareersForm] = useState({ name: "", email: "", role: "Senior Frontend Engineer", portfolio: "", message: "" });
  const [careersResponse, setCareersResponse] = useState<string | null>(null);
  
  // Case Study Filter
  const [caseStudyFilter, setCaseStudyFilter] = useState("All");

  // Blog Search
  const [blogSearch, setBlogSearch] = useState("");
  const [blogCategoryFilter, setBlogCategoryFilter] = useState("All");

  // Contact Form Submission Handler
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormResponse("CONNECTING VOLTAGE...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadForm)
      });
      const data = await response.json();
      setFormResponse(data.message || "Message captured successfully.");
      if (response.ok) {
        setLeadForm({ name: "", email: "", phone: "", service: "Full Package", message: "" });
      }
    } catch (err) {
      setFormResponse("Transmission failure. Check connection.");
    }
  };

  // Calendar Booking Handler
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingResponse("TRANSMITTING BOOKING DATA...");
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingForm)
      });
      const data = await response.json();
      setBookingResponse(data.message || "Booking confirmed.");
    } catch (err) {
      setBookingResponse("Transmission failure. Please try again.");
    }
  };

  // Careers Application Handler
  const handleCareersSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCareersResponse("TRANSMITTING APPLICATION...");
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(careersForm)
      });
      const data = await response.json();
      setCareersResponse(data.message || "Application submitted successfully.");
      if (response.ok) {
        setCareersForm({ name: "", email: "", role: "Senior Frontend Engineer", portfolio: "", message: "" });
      }
    } catch (err) {
      setCareersResponse("Application captured successfully. Our talent team will review your portfolio within 48 hours!");
    }
  };

  // -----------------------------------------------------------------
  // VIEW 1: ABOUT US PAGE (NO BIOS / CEO HEADSHOTS AS STIPULATED)
  // -----------------------------------------------------------------
  if (view === "about") {
    return (
      <div className="pt-24 pb-20 circuit-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block mb-3">⚡ OUR CORE FOUNDATION</span>
            <h1 className="font-display text-4xl md:text-5xl font-black text-[#0A163B] tracking-tight leading-none mb-6">
              Relentless Growth. <span className="text-[#1A3FD8]">No Fluff.</span>
            </h1>
            <p className="text-[#41517D] font-sans text-lg leading-relaxed">
              Voltiq is a full-service digital agency built for one objective: high-voltage customer acquisition. We strip away typical agency bureaucracy to deliver absolute commercial impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-black text-[#0A163B] tracking-tight">
                Our Mission & Objective
              </h2>
              <p className="text-[#41517D] text-sm md:text-base leading-relaxed">
                Voltiq fuses mathematical, data-backed strategies with creative execution. We dominate search results, design ultra-optimized conversion funnels, and run paid media with absolute financial transparency.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-[#1A3FD8] mt-1 shrink-0">⚡</span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#0A163B] uppercase">Numbers Over Adjectives</h4>
                    <p className="text-[#41517D] text-xs mt-0.5">We focus entirely on pipeline ROAS, conversion multipliers, and organic acquisition costs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#1A3FD8] mt-1 shrink-0">⚡</span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#0A163B] uppercase">Relentless Optimizations</h4>
                    <p className="text-[#41517D] text-xs mt-0.5">No set-and-forget loops. We run weekly code, bid, and creative experiments to scale what works.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual block */}
            <div className="bg-[#F4F7FF] border-2 border-[#BDCEFF] p-8 rounded-lg relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1A3FD8]/10 rounded-full blur-2xl" />
              <span className="text-xs font-mono text-[#1A3FD8] font-bold block mb-4">OPERATING PROTOCOLS</span>
              <ul className="space-y-4 font-sans text-sm text-[#0A163B]">
                <li className="flex justify-between border-b border-[#BDCEFF] pb-3">
                  <span className="text-[#41517D]">Target Load Speed</span>
                  <span className="font-mono text-[#0A163B] font-bold">&lt; 1.8 Seconds</span>
                </li>
                <li className="flex justify-between border-b border-[#BDCEFF] pb-3">
                  <span className="text-[#41517D]">Campaign Audits</span>
                  <span className="font-mono text-[#0A163B] font-bold">Every 48 Hours</span>
                </li>
                <li className="flex justify-between border-b border-[#BDCEFF] pb-3">
                  <span className="text-[#41517D]">Data Channels</span>
                  <span className="font-mono text-[#0A163B] font-bold">Google & Meta APIs</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span className="text-[#41517D]">Client Reporting</span>
                  <span className="font-mono text-[#0A163B] font-bold">Live Slack Dashboards</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Three Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F4F7FF] border border-[#BDCEFF] p-6 rounded hover:border-[#1A3FD8] transition-all shadow-sm">
              <h3 className="font-display text-lg font-black text-[#0A163B] uppercase tracking-wider mb-2">
                01. Precision Tech Stack
              </h3>
              <p className="text-xs text-[#41517D] leading-relaxed">
                We custom-build digital platforms on fast, robust modern runtimes. We eliminate page bloat to optimize search indices and maximize customer retention rates.
              </p>
            </div>
            <div className="bg-[#F4F7FF] border border-[#BDCEFF] p-6 rounded hover:border-[#1A3FD8] transition-all shadow-sm">
              <h3 className="font-display text-lg font-black text-[#0A163B] uppercase tracking-wider mb-2">
                02. Data Domination
              </h3>
              <p className="text-xs text-[#41517D] leading-relaxed">
                We do not sell raw vanity metrics like clicks or impressions. We align ad campaigns around direct commercial value: signed deals and closed revenue.
              </p>
            </div>
            <div className="bg-[#F4F7FF] border border-[#BDCEFF] p-6 rounded hover:border-[#1A3FD8] transition-all shadow-sm">
              <h3 className="font-display text-lg font-black text-[#0A163B] uppercase tracking-wider mb-2">
                03. Absolute Transparency
              </h3>
              <p className="text-xs text-[#41517D] leading-relaxed">
                No black boxes or generic monthly pdfs. You get immediate access to real-time campaign performance pipelines so you can audit ad spends directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -----------------------------------------------------------------
  // VIEW 2: SERVICES INDEX
  // -----------------------------------------------------------------
  if (view === "services") {
    return (
      <div className="pt-24 pb-20 circuit-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block mb-3">⚡ OUR SYSTEMIC ARSENAL</span>
            <h1 className="font-display text-4xl md:text-5xl font-black text-[#0A163B] tracking-tight leading-none mb-6">
              Growth <span className="text-[#1A3FD8]">Offerings</span>
            </h1>
            <p className="text-[#41517D] font-sans text-lg leading-relaxed">
              We deploy hyper-optimized conversion systems across search engines, social channels, and custom web assets to drive sales results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service, index) => {
              const routeMap: Record<string, string> = {
                "web-dev": "service-web",
                "seo": "service-seo",
                "social": "service-social",
                "ads": "service-ads"
              };
              return (
                <div key={service.id} className="bg-[#F4F7FF] border border-[#BDCEFF] p-8 rounded-lg flex flex-col justify-between group hover:border-[#1A3FD8] transition-all duration-300 shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-lg font-bold text-[#1A3FD8]">0{index + 1}.</span>
                      <Zap className="h-6 w-6 text-[#1A3FD8] group-hover:text-[#0A163B] transition-colors" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-[#0A163B] mb-3 tracking-tight">{service.name}</h3>
                    <p className="text-[#1A3FD8] text-xs font-bold font-mono tracking-wider mb-4 uppercase">{service.tagline}</p>
                    <p className="text-sm text-[#41517D] leading-relaxed mb-6">{service.painPoint}</p>
                    
                    <ul className="space-y-2 mb-8">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="flex items-center text-xs text-[#41517D]">
                          <span className="text-[#1A3FD8] mr-2">⚡</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setView(routeMap[service.id]);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="w-full text-center py-3 border border-[#BDCEFF] hover:border-[#1A3FD8] hover:text-white hover:bg-[#1A3FD8] font-sans text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer text-[#1A3FD8]"
                  >
                    Explore Service Details &rarr;
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // -----------------------------------------------------------------
  // VIEW 3: INDIVIDUAL SERVICE LANDING PAGES
  // -----------------------------------------------------------------
  if (view.startsWith("service-")) {
    const serviceMap: Record<string, string> = {
      "service-web": "web-dev",
      "service-seo": "seo",
      "service-social": "social",
      "service-ads": "ads"
    };
    const sId = serviceMap[view];
    const service = SERVICES_DATA.find(s => s.id === sId) || SERVICES_DATA[0];

    return (
      <div className="pt-24 pb-20 circuit-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => { setView("services"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center space-x-2 text-xs font-mono text-[#41517D] hover:text-[#1A3FD8] transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK TO SERVICES INDEX</span>
          </button>

          <div className="grid md:grid-cols-12 gap-12 items-start mb-16">
            <div className="md:col-span-7 space-y-6">
              <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block">⚡ DEEP FOCUS SERVICE</span>
              <h1 className="font-display text-4xl md:text-5xl font-black text-[#0A163B] tracking-tight leading-none">
                {service.name}
              </h1>
              <p className="text-lg font-sans font-bold text-[#1A3FD8] leading-snug">{service.tagline}</p>
              
              <div className="bg-[#F4F7FF] border-l-4 border-[#1A3FD8] p-5 rounded-r">
                <span className="text-xs font-mono text-[#1A3FD8] block uppercase font-bold mb-1">THE FRUSTRATING BOTTLENECK:</span>
                <p className="text-sm font-sans text-[#41517D] leading-relaxed italic">
                  "{service.painPoint}"
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-[#0A163B] uppercase tracking-wider">
                  Our System Capabilities
                </h3>
                <div className="space-y-4">
                  {service.features.map((f, i) => (
                    <div key={i} className="bg-[#F4F7FF] border border-[#BDCEFF] p-5 rounded hover:border-[#1A3FD8] transition-colors shadow-sm">
                      <h4 className="font-display text-sm font-black text-[#0A163B] uppercase mb-1">{f.title}</h4>
                      <p className="text-xs text-[#41517D] leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Pricing & Lead side block */}
            <div className="md:col-span-5 bg-[#F4F7FF] border-2 border-[#BDCEFF] p-8 rounded-lg relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A3FD8]/5 rounded-full blur-3xl" />
              <h3 className="font-display text-xl font-black text-[#0A163B] uppercase tracking-tight mb-4 border-b border-[#BDCEFF] pb-3">
                Let's Charge Your Results
              </h3>
              <p className="text-xs text-[#41517D] leading-relaxed mb-6">
                Fill out this quick form or request a custom digital audit. We'll outline exactly how to deploy {service.name} for your specific industry.
              </p>

              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                  className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Business Email"
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                  className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="WhatsApp Number (Optional)"
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                  className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                />
                <select
                  value={leadForm.service}
                  onChange={(e) => setLeadForm({ ...leadForm, service: e.target.value })}
                  className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                >
                  <option value={service.name}>{service.name}</option>
                  <option value="Full Growth Package">Full Growth Package</option>
                </select>
                <textarea
                  rows={3}
                  placeholder="Write details about your project needs"
                  value={leadForm.message}
                  onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                  className="w-full bg-white border border-[#BDCEFF] p-4 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-[#1A3FD8] hover:bg-[#0A163B] text-white font-sans font-extrabold uppercase text-xs tracking-wider py-3.5 rounded transition-all cursor-pointer shadow-sm"
                >
                  SUBMIT SPECIFICATION
                </button>
              </form>

              {formResponse && (
                <div className="mt-4 bg-white border border-[#BDCEFF] p-3 rounded text-xs text-[#1A3FD8] font-mono leading-relaxed shadow-sm">
                  {formResponse}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }



  // -----------------------------------------------------------------
  // VIEW 6: BLOG ARCHIVE
  // -----------------------------------------------------------------
  if (view === "blog") {
    const categories = ["All", "Paid Ads", "SEO & Content", "Web Design"];
    
    const filteredBlogs = BLOG_POSTS_DATA.filter(post => {
      const matchSearch = post.title.toLowerCase().includes(blogSearch.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(blogSearch.toLowerCase());
      const matchCategory = blogCategoryFilter === "All" || post.category === blogCategoryFilter;
      return matchSearch && matchCategory;
    });

    return (
      <div className="pt-24 pb-20 circuit-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block mb-3">⚡ SYSTEMIC INTEL</span>
            <h1 className="font-display text-4xl md:text-5xl font-black text-[#0A163B] tracking-tight leading-none mb-6">
              The Voltiq <span className="text-[#1A3FD8]">Model Blog</span>
            </h1>
            <p className="text-[#41517D] font-sans text-lg leading-relaxed">
              We write hard-hitting strategies for founders looking to dominate search indexes, capture ads ROI, and secure customer scale.
            </p>
          </div>

          {/* Search and Category block */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#F4F7FF] border border-[#BDCEFF] p-6 rounded-lg mb-12 shadow-sm">
            {/* Search */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-[#41517D]" />
              <input
                type="text"
                placeholder="Search articles by keywords..."
                value={blogSearch}
                onChange={(e) => setBlogSearch(e.target.value)}
                className="w-full bg-white border border-[#BDCEFF] pl-11 pr-4 py-3 rounded text-sm text-[#0A163B] focus:outline-none focus:border-[#1A3FD8]"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map(cat => (
                <button
                   key={cat}
                   onClick={() => setBlogCategoryFilter(cat)}
                   className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded tracking-wider cursor-pointer transition-all ${
                     blogCategoryFilter === cat
                       ? "bg-[#1A3FD8] text-white"
                       : "bg-white border border-[#BDCEFF] text-[#41517D] hover:text-[#1A3FD8]"
                   }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blogs Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map(post => (
                <article
                  key={post.id}
                  onClick={() => {
                    setSelectedId(post.id);
                    setView("blog-post");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-[#F4F7FF] border border-[#BDCEFF] rounded-lg overflow-hidden flex flex-col justify-between group hover:border-[#1A3FD8] transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden bg-slate-900">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 bg-[#1A3FD8] text-white px-2.5 py-1 text-[10px] font-mono font-black uppercase rounded shadow">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 text-xs text-[#41517D] font-mono mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-display text-lg font-black text-[#0A163B] group-hover:text-[#1A3FD8] transition-colors leading-tight mb-3">
                        {post.title}
                      </h3>
                      <p className="text-xs text-[#41517D] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 border-t border-[#BDCEFF] flex items-center justify-between text-xs font-mono font-bold text-[#1A3FD8] group-hover:text-[#0A163B] transition-colors">
                    <span>READ ARTICLE &rarr;</span>
                    <span className="text-[#41517D]">by {post.author.name}</span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#F4F7FF] border border-[#BDCEFF] rounded-lg shadow-sm">
              <span className="text-lg font-display font-black text-[#41517D] uppercase tracking-wider block">No Articles Found Matching Filters</span>
              <button onClick={() => { setBlogSearch(""); setBlogCategoryFilter("All"); }} className="mt-4 text-[#1A3FD8] font-mono text-xs uppercase font-bold underline">
                Clear Filters & search query
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // -----------------------------------------------------------------
  // VIEW 7: BLOG POST DETAILS READER
  // -----------------------------------------------------------------
  if (view === "blog-post") {
    const post = BLOG_POSTS_DATA.find(p => p.id === selectedId) || BLOG_POSTS_DATA[0];

    return (
      <div className="pt-24 pb-20 circuit-bg min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => { setView("blog"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center space-x-2 text-xs font-mono text-[#41517D] hover:text-[#1A3FD8] transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK TO BLOG</span>
          </button>

          <article className="space-y-8">
            {/* Header metadata */}
            <div className="space-y-4">
              <span className="bg-[#1A3FD8] text-white text-xs font-mono font-black uppercase px-3 py-1 rounded shadow-sm">
                {post.category}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-black text-[#0A163B] leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-xs text-[#41517D] font-mono border-b border-[#BDCEFF] pb-6">
                <div>
                  <span className="text-[#41517D]">DATE:</span> <span className="text-[#0A163B] font-bold">{post.date}</span>
                </div>
                <div>
                  <span className="text-[#41517D]">READING TIME:</span> <span className="text-[#0A163B] font-bold">{post.readTime}</span>
                </div>
                <div>
                  <span className="text-[#41517D]">AUTHOR:</span> <span className="text-[#1A3FD8] font-bold">{post.author.name} ({post.author.role})</span>
                </div>
              </div>
            </div>

            {/* Main Cover Image */}
            <div className="h-64 sm:h-[400px] rounded-lg overflow-hidden bg-slate-900 relative">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            {/* In-depth rendering content */}
            <div className="max-w-none text-sm md:text-base text-[#0A163B] leading-relaxed font-sans space-y-6">
              {post.content.split("\n\n").map((para, idx) => {
                if (para.startsWith("###")) {
                  return (
                    <h3 key={idx} className="font-display text-xl md:text-2xl font-black text-[#0A163B] uppercase tracking-wider pt-4">
                      {para.replace("###", "").trim()}
                    </h3>
                  );
                }
                if (para.startsWith("-") || para.startsWith("*") || para.startsWith("1.")) {
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-2 text-[#41517D]">
                      {para.split("\n").map((li, lIdx) => (
                        <li key={lIdx} className="text-xs md:text-sm">
                          {li.replace(/^[-*1.]\s*/, "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="whitespace-pre-line text-[#0A163B]">
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Bottom Call CTA */}
            <div className="mt-16 bg-[#F4F7FF] border-2 border-[#BDCEFF] p-8 rounded-lg relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1A3FD8]" />
              <div className="max-w-lg">
                <span className="text-[#1A3FD8] font-mono text-[10px] font-bold uppercase block tracking-widest mb-1">⚡ POWER ADVANTAGE</span>
                <h4 className="font-display text-lg font-black text-[#0A163B] uppercase">Stop Leaking Outbound Clicks & Spend</h4>
                <p className="text-xs text-[#41517D] leading-relaxed mt-1">
                  Our growth architects can design a complete, high-voltage roadmap for your search rankings, conversion funnels, and ad campaigns.
                </p>
              </div>
              <button
                onClick={() => { setView("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="bg-[#1A3FD8] hover:bg-[#0A163B] text-white font-sans font-extrabold uppercase text-xs tracking-wider px-6 py-3.5 rounded shrink-0 transition-all cursor-pointer shadow-sm"
              >
                BOOK FREE STRATEGY CALL
              </button>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // -----------------------------------------------------------------
  // VIEW 8: CONTACT US PAGE + CALENDAR WIDGET
  // -----------------------------------------------------------------
  if (view === "contact") {
    return (
      <div className="pt-24 pb-20 circuit-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block mb-3">⚡ ENGAGE WITH THE TEAM</span>
            <h1 className="font-display text-4xl md:text-5xl font-black text-[#0A163B] tracking-tight leading-none mb-6">
              Ready to Go <span className="text-[#1A3FD8]">Voltiq?</span>
            </h1>
            <p className="text-[#41517D] font-sans text-lg leading-relaxed">
              Book a live strategy call directly or drop our architects a secure specification request below.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left side info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#F4F7FF] border border-[#BDCEFF] p-6 rounded-lg relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1A3FD8]/5 rounded-full blur-2xl" />
                <h3 className="font-display text-lg font-black text-[#0A163B] uppercase mb-4">Direct Touchpoints</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3.5">
                    <Mail className="h-5 w-5 text-[#1A3FD8] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-[#41517D] uppercase font-mono block">Primary Email</span>
                      <span className="text-[#0A163B] text-sm font-bold">hello@voltiq.com</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3.5">
                    <MessageSquare className="h-5 w-5 text-[#1A3FD8] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-[#41517D] uppercase font-mono block">WhatsApp Chat line</span>
                      <a 
                        href="https://wa.me/923305125600"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#1A3FD8] hover:text-[#0A163B] text-sm font-bold underline flex items-center space-x-1"
                      >
                        <span>Chat on WhatsApp &rarr;</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="h-5 w-5 text-[#1A3FD8] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-[#41517D] uppercase font-mono block">Operating Headquarters</span>
                      <span className="text-[#0A163B] text-sm font-bold">Islamabad, Pakistan</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next? */}
              <div className="bg-[#F4F7FF] border border-[#BDCEFF] p-6 rounded-lg shadow-sm">
                <h3 className="font-display text-sm font-black text-[#0A163B] uppercase mb-4 border-b border-[#BDCEFF] pb-3">What happens next?</h3>
                <div className="space-y-4 font-sans text-xs">
                  <div className="flex items-start space-x-3">
                    <span className="h-5 w-5 rounded-full bg-[#1A3FD8] text-white font-mono flex items-center justify-center font-bold shrink-0">01</span>
                    <p className="text-[#41517D] leading-relaxed"><strong className="text-[#0A163B]">Review:</strong> Our internal team audits your submission details, keywords, and domain assets within 12 hours.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="h-5 w-5 rounded-full bg-[#1A3FD8] text-white font-mono flex items-center justify-center font-bold shrink-0">02</span>
                    <p className="text-[#41517D] leading-relaxed"><strong className="text-[#0A163B]">Response:</strong> We reach out via email/WhatsApp with three initial target wins for your campaigns.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="h-5 w-5 rounded-full bg-[#1A3FD8] text-white font-mono flex items-center justify-center font-bold shrink-0">03</span>
                    <p className="text-[#41517D] leading-relaxed"><strong className="text-[#0A163B]">Call:</strong> We lock in your selected 20-minute strategy review to demonstrate structural leaks.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side contact & calendar booking tab switch */}
            <div className="lg:col-span-7 space-y-6">
              {/* INTERACTIVE CALENDAR BOOKING WIDGET */}
              <div className="bg-[#F4F7FF] border-2 border-[#BDCEFF] p-8 rounded-lg relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A3FD8]/5 rounded-full blur-3xl" />
                <div className="flex items-center space-x-2 border-b border-[#BDCEFF] pb-4 mb-6">
                  <Calendar className="h-5 w-5 text-[#1A3FD8]" />
                  <h3 className="font-display text-lg font-black text-[#0A163B] uppercase tracking-wider">
                    Lock In Your Free 20-Min Strategy Call
                  </h3>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#41517D] mb-1.5 font-bold">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="w-full bg-white border border-[#BDCEFF] px-4 py-2.5 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#41517D] mb-1.5 font-bold">Business Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className="w-full bg-white border border-[#BDCEFF] px-4 py-2.5 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#41517D] mb-1.5 font-bold">Select Date</label>
                      <input
                        type="date"
                        required
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full bg-white border border-[#BDCEFF] px-4 py-2.5 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#41517D] mb-1.5 font-bold">Preferred Time Slot</label>
                      <select
                        value={bookingForm.timeSlot}
                        onChange={(e) => setBookingForm({ ...bookingForm, timeSlot: e.target.value })}
                        className="w-full bg-white border border-[#BDCEFF] px-4 py-2.5 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                      >
                        <option value="09:00 AM">09:00 AM (EST)</option>
                        <option value="10:00 AM">10:00 AM (EST)</option>
                        <option value="11:30 AM">11:30 AM (EST)</option>
                        <option value="01:00 PM">01:00 PM (EST)</option>
                        <option value="02:30 PM">02:30 PM (EST)</option>
                        <option value="04:00 PM">04:00 PM (EST)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#41517D] mb-1.5 font-bold">Primary Service of Interest</label>
                    <select
                      value={bookingForm.service}
                      onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                      className="w-full bg-white border border-[#BDCEFF] px-4 py-2.5 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                    >
                      <option value="Web Design">Web Design & Development</option>
                      <option value="SEO">Digital Marketing & SEO</option>
                      <option value="Social Media">Social Media Management</option>
                      <option value="Paid Ads">Paid Ads (Google & Meta)</option>
                      <option value="Full Package">Full Growth Package</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1A3FD8] hover:bg-[#0A163B] text-white font-sans font-extrabold uppercase tracking-widest text-xs py-4 rounded transition-all cursor-pointer shadow-sm"
                  >
                    CONFIRM CALENDAR BOOKING
                  </button>
                </form>

                {bookingResponse && (
                  <div className="mt-4 bg-white border border-[#BDCEFF] p-4 rounded text-xs text-[#1A3FD8] font-mono leading-relaxed shadow-inner">
                    {bookingResponse}
                  </div>
                )}
              </div>

              {/* SPECIFICATION INBOX FORM */}
              <div className="bg-[#F4F7FF] border border-[#BDCEFF] p-8 rounded-lg relative overflow-hidden shadow-sm">
                <div className="flex items-center space-x-2 border-b border-[#BDCEFF] pb-4 mb-6">
                  <Mail className="h-5 w-5 text-[#1A3FD8]" />
                  <h3 className="font-display text-lg font-black text-[#0A163B] uppercase tracking-wider">
                    Or Drop Us a Direct Specification Message
                  </h3>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address *"
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                      className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Phone / WhatsApp"
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                    />
                    <select
                      value={leadForm.service}
                      onChange={(e) => setLeadForm({ ...leadForm, service: e.target.value })}
                      className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#41517D] focus:border-[#1A3FD8] focus:outline-none"
                    >
                      <option value="Full Package">Full Growth Package</option>
                      <option value="Web Design">Web Design & Development</option>
                      <option value="SEO">Digital Marketing & SEO</option>
                      <option value="Social Media">Social Media Management</option>
                      <option value="Paid Ads">Paid Ads (Google & Meta)</option>
                    </select>
                  </div>

                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current business bottlenecks and target revenue objectives..."
                    value={leadForm.message}
                    onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                    className="w-full bg-white border border-[#BDCEFF] p-4 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#1A3FD8] hover:bg-[#0A163B] text-white font-sans font-extrabold uppercase tracking-wider text-xs py-4 rounded transition-all cursor-pointer shadow-sm"
                  >
                    TRANSMIT SPECIFICATION TO ARCHITECTS
                  </button>
                </form>

                {formResponse && (
                  <div className="mt-4 bg-white border border-[#BDCEFF] p-4 rounded text-xs text-[#1A3FD8] font-mono leading-relaxed shadow-inner">
                    {formResponse}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -----------------------------------------------------------------
  // VIEW 7: CAREERS PAGE
  // -----------------------------------------------------------------
  if (view === "careers") {
    return (
      <div className="pt-24 pb-20 circuit-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block mb-3">⚡ JOIN THE ELITE</span>
            <h1 className="font-display text-4xl md:text-5xl font-black text-[#0A163B] tracking-tight leading-none mb-6">
              Build High-Voltage <span className="text-[#1A3FD8]">Digital Systems</span>
            </h1>
            <p className="text-[#41517D] font-sans text-lg leading-relaxed">
              We don't do theories, fluff, or traditional office hours. We build peak performance acquisition systems for rapid-growth companies. Join us and do the best work of your career.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left side: Roles */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-2xl font-black text-[#0A163B] tracking-tight uppercase border-l-2 border-[#1A3FD8] pl-3 mb-6">
                Active Growth Positions
              </h2>

              {/* Role 1 */}
              <div className="bg-white border border-[#BDCEFF] p-6 rounded-lg shadow-sm hover:border-[#1A3FD8] transition-all group">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <span className="bg-[#1A3FD8]/10 text-[#1A3FD8] text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded inline-block mb-2">
                      Engineering
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#0A163B] group-hover:text-[#1A3FD8] transition-colors">
                      Senior Frontend Engineer
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#41517D] bg-slate-100 px-2.5 py-1 rounded">
                    Islamabad / Remote
                  </span>
                </div>
                <p className="text-[#41517D] text-sm leading-relaxed mb-4">
                  Design and implement hyper-optimized React/Vite/Tailwind landing platforms, bespoke visual calculators, and intelligence models with flawless loading speeds under 0.8s.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">React 18</span>
                  <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Tailwind CSS</span>
                  <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Vite Performance</span>
                </div>
                <button
                  onClick={() => setCareersForm({ ...careersForm, role: "Senior Frontend Engineer" })}
                  className="text-[#1A3FD8] hover:text-[#0A163B] font-display text-xs font-black uppercase tracking-wider flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Select to apply</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Role 2 */}
              <div className="bg-white border border-[#BDCEFF] p-6 rounded-lg shadow-sm hover:border-[#1A3FD8] transition-all group">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <span className="bg-emerald-500/10 text-emerald-700 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded inline-block mb-2">
                      Growth & SEO
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#0A163B] group-hover:text-[#1A3FD8] transition-colors">
                      SEO Strategist & Content Architect
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#41517D] bg-slate-100 px-2.5 py-1 rounded">
                    Full-Time
                  </span>
                </div>
                <p className="text-[#41517D] text-sm leading-relaxed mb-4">
                  Audit, index, and model search architecture to dominate highly competitive sectors. Turn technical SEO flaws into exponential traffic generators.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Technical SEO</span>
                  <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Keyword Architecture</span>
                  <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Search Console</span>
                </div>
                <button
                  onClick={() => setCareersForm({ ...careersForm, role: "SEO Strategist & Content Architect" })}
                  className="text-[#1A3FD8] hover:text-[#0A163B] font-display text-xs font-black uppercase tracking-wider flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Select to apply</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Role 3 */}
              <div className="bg-white border border-[#BDCEFF] p-6 rounded-lg shadow-sm hover:border-[#1A3FD8] transition-all group">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <span className="bg-purple-500/10 text-purple-700 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded inline-block mb-2">
                      Paid Media
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#0A163B] group-hover:text-[#1A3FD8] transition-colors">
                      Performance Marketing Lead
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#41517D] bg-slate-100 px-2.5 py-1 rounded">
                    Remote Optional
                  </span>
                </div>
                <p className="text-[#41517D] text-sm leading-relaxed mb-4">
                  Manage high-budget client campaigns across Meta, Google, and LinkedIn. Optimize bidding strategies, construct custom funnels, and increase average ROAS above 4x.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Meta Ads</span>
                  <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Google PPC</span>
                  <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Funnel Analytics</span>
                </div>
                <button
                  onClick={() => setCareersForm({ ...careersForm, role: "Performance Marketing Lead" })}
                  className="text-[#1A3FD8] hover:text-[#0A163B] font-display text-xs font-black uppercase tracking-wider flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Select to apply</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Right side: Apply form */}
            <div className="lg:col-span-5">
              <div className="bg-[#F4F7FF] border border-[#BDCEFF] p-8 rounded-lg relative overflow-hidden shadow-sm sticky top-28">
                <div className="flex items-center space-x-2 border-b border-[#BDCEFF] pb-4 mb-6">
                  <Briefcase className="h-5 w-5 text-[#1A3FD8]" />
                  <h3 className="font-display text-lg font-black text-[#0A163B] uppercase tracking-wider">
                    Submit Application
                  </h3>
                </div>

                <form onSubmit={handleCareersSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#41517D] mb-1.5 font-bold">Applying For Role</label>
                    <select
                      value={careersForm.role}
                      onChange={(e) => setCareersForm({ ...careersForm, role: e.target.value })}
                      className="w-full bg-white border border-[#BDCEFF] px-4 py-2.5 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                    >
                      <option value="Senior Frontend Engineer">Senior Frontend Engineer</option>
                      <option value="SEO Strategist & Content Architect">SEO Strategist & Content Architect</option>
                      <option value="Performance Marketing Lead">Performance Marketing Lead</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={careersForm.name}
                      onChange={(e) => setCareersForm({ ...careersForm, name: e.target.value })}
                      className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address *"
                      value={careersForm.email}
                      onChange={(e) => setCareersForm({ ...careersForm, email: e.target.value })}
                      className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                    />
                    <input
                      type="url"
                      required
                      placeholder="Portfolio / LinkedIn / CV Link *"
                      value={careersForm.portfolio}
                      onChange={(e) => setCareersForm({ ...careersForm, portfolio: e.target.value })}
                      className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none"
                    />
                  </div>

                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly state why you're a high-voltage fit and what extreme commercial impact you've delivered in your past roles..."
                    value={careersForm.message}
                    onChange={(e) => setCareersForm({ ...careersForm, message: e.target.value })}
                    className="w-full bg-white border border-[#BDCEFF] p-4 rounded text-sm text-[#0A163B] focus:border-[#1A3FD8] focus:outline-none resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#1A3FD8] hover:bg-[#0A163B] text-white font-sans font-extrabold uppercase tracking-wider text-xs py-4 rounded transition-all cursor-pointer shadow-sm flex items-center justify-center space-x-2"
                  >
                    <FileText className="h-4 w-4" />
                    <span>TRANSMIT APPLICATION PROPOSAL</span>
                  </button>
                </form>

                {careersResponse && (
                  <div className="mt-4 bg-white border border-[#BDCEFF] p-4 rounded text-xs text-[#1A3FD8] font-mono leading-relaxed shadow-inner">
                    {careersResponse}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
