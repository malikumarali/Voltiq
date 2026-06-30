import React, { useState, useEffect } from "react";
import { 
  Zap, ArrowRight, Play, Check, ChevronDown, ChevronUp, Star, MessageSquare, 
  Mail, Calendar, ShoppingBag, Building2, Stethoscope, Utensils, 
  GraduationCap, Scale, Shirt, Wrench, ShieldAlert 
} from "lucide-react";
import { View, Testimonial, Niche, FAQItem } from "../types";
import { SERVICES_DATA, TESTIMONIALS_DATA, NICHES_DATA, FAQ_DATA } from "../data";

interface HomeViewProps {
  setView: (view: View) => void;
  setSelectedId: (id: string | null) => void;
}

export default function HomeView({ setView, setSelectedId }: HomeViewProps) {
  
  // SECTION 1: HERO STATE
  const [lightningActive, setLightningActive] = useState(false);

  // SECTION 3: BENEFIT TOGGLE STATE
  const [benefitToggle, setBenefitToggle] = useState<"grow" | "retain">("grow");

  // SECTION 5: SERVICES TAB STATE
  const [activeServiceTab, setActiveServiceTab] = useState("web-dev");

  // SECTION 13: FAQ ACCORDION STATE
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // SECTION 14: CONTACT FORM STATE
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", service: "Web Design", message: "" });
  const [formFeedback, setFormFeedback] = useState<string | null>(null);

  // Trigger Hero Lightning on Load
  useEffect(() => {
    setLightningActive(true);
    const timer = setTimeout(() => {
      setLightningActive(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormFeedback("TRANSMITTING PIPELINE SIGNAL...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      const data = await res.json();
      setFormFeedback(data.message || "Lead captured successfully.");
      if (res.ok) {
        setContactForm({ name: "", email: "", phone: "", service: "Web Design", message: "" });
      }
    } catch (err) {
      setFormFeedback("Transmission failure. Check configuration.");
    }
  };



  const handleServiceDetailClick = (id: string) => {
    const routeMap: Record<string, View> = {
      "web-dev": "service-web",
      "seo": "service-seo",
      "social": "service-social",
      "ads": "service-ads"
    };
    setView(routeMap[id] || "services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "ShoppingBag": return <ShoppingBag className="h-6 w-6 text-[#1A3FD8]" />;
      case "Building2": return <Building2 className="h-6 w-6 text-[#1A3FD8]" />;
      case "Stethoscope": return <Stethoscope className="h-6 w-6 text-[#1A3FD8]" />;
      case "Utensils": return <Utensils className="h-6 w-6 text-[#1A3FD8]" />;
      case "GraduationCap": return <GraduationCap className="h-6 w-6 text-[#1A3FD8]" />;
      case "Scale": return <Scale className="h-6 w-6 text-[#1A3FD8]" />;
      case "Shirt": return <Shirt className="h-6 w-6 text-[#1A3FD8]" />;
      case "Wrench": return <Wrench className="h-6 w-6 text-[#1A3FD8]" />;
      default: return <Zap className="h-6 w-6 text-[#1A3FD8]" />;
    }
  };

  return (
    <div className="bg-white text-[#0A163B]">
      
      {/* SECTION 1 — HERO (Full Viewport) */}
      <section 
        id="hero-section" 
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden circuit-bg"
      >
        {/* Animated Lightning Bolt Background Overlay */}
        <div 
          className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-75 z-20 ${
            lightningActive ? "opacity-10" : "opacity-0"
          }`} 
        />
        <div 
          className={`absolute inset-0 bg-[#1A3FD8]/10 pointer-events-none transition-all duration-1000 z-10 ${
            lightningActive ? "scale-105 blur-md" : "scale-100"
          }`} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[#1A3FD8] font-mono text-xs font-black tracking-widest block uppercase border-l-2 border-[#1A3FD8] pl-3">
                ⚡ DATA DRIVEN STRATEGISTS
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#41517D] tracking-tight leading-none text-center space-y-4">
                <div className="flex justify-start">
                  <span className="italic">360°</span>
                </div>
                <div className="relative inline-block w-full">
                  <div>
                    <span className="text-[#F5C500]">Digital Marketing</span> & <span className="text-[#F5C500]">AI Solutions</span>
                  </div>
                  {/* Swoosh underline element */}
                  <svg className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-4/5 h-4 text-[#F5C500]" viewBox="0 0 338 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9C78.5 3.5 249.5 -2.5 335 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex justify-end pt-4">
                  <span className="italic">Agency</span>
                </div>
              </h1>
              <p className="text-[#41517D] font-sans text-base md:text-lg leading-relaxed max-w-2xl pt-2">
                We power your brand's digital growth through data-driven strategy and creative execution & handling everything from web to ads to SEO so you can focus on running your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  id="hero-book-call-btn"
                  onClick={() => {
                    setView("contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="px-8 py-4 bg-[#F5C500] text-[#050A1F] font-sans font-black text-sm uppercase tracking-wider rounded hover:bg-[#0A163B] hover:text-white hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Book a Strategy Call
                </button>
                <button
                  id="hero-see-work-btn"
                  onClick={() => { setView("blog"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="px-8 py-4 text-[#1A3FD8] font-sans font-black text-sm uppercase tracking-wider border-2 border-[#1A3FD8] rounded hover:bg-[#1A3FD8]/10 transition-all duration-300 cursor-pointer"
                >
                  See Our Work
                </button>
              </div>
            </div>

            {/* Hero Visual Dashboard mockups */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white border-2 border-[#BDCEFF] p-6 rounded-lg shadow-2xl relative overflow-hidden group hover:border-[#1A3FD8] transition-colors duration-500">
                {/* Circuit lines */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#1A3FD8]/10 rounded-full blur-xl pointer-events-none" />
                
                {/* Simulated dashboard */}
                <div className="flex items-center justify-between border-b border-[#BDCEFF] pb-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-[#1A3FD8] fill-[#1A3FD8]" />
                    <span className="font-display text-xs font-black uppercase tracking-wider text-[#0A163B]">VOLTIQ PIPELINE MULTIPLIER</span>
                  </div>
                  <span className="text-[10px] text-[#1A3FD8] font-mono bg-[#1A3FD8]/10 px-2.5 py-1 rounded">● REAL-TIME</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#F4F7FF] border border-[#BDCEFF] p-4 rounded">
                    <span className="text-[10px] text-[#41517D] font-mono block">MONTHLY PIPELINE VALUE</span>
                    <span className="font-display text-2xl font-black text-[#0A163B]">$142,500</span>
                    <span className="text-xs text-green-600 font-mono font-bold block mt-1">↑ 280% vs Baseline SEO</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F4F7FF] border border-[#BDCEFF] p-4 rounded">
                      <span className="text-[10px] text-[#41517D] font-mono block">AVERAGE ROAS</span>
                      <span className="font-display text-xl font-black text-[#1A3FD8]">4.2x</span>
                    </div>
                    <div className="bg-[#F4F7FF] border border-[#BDCEFF] p-4 rounded">
                      <span className="text-[10px] text-[#41517D] font-mono block">LOAD SPEED</span>
                      <span className="font-display text-xl font-black text-[#0A163B]">0.8s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — SOCIAL PROOF / STAT STRIP */}
      <section id="stat-strip-section" className="bg-[#F4F7FF] border-y border-[#BDCEFF] py-8 relative z-35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div id="stat-projects-delivered">
              <span className="font-display text-3xl md:text-4xl font-black text-[#0A163B] block">150+</span>
              <span className="text-xs text-[#41517D] font-mono uppercase font-bold mt-1 block">Projects Delivered</span>
            </div>
            <div id="stat-happy-clients">
              <span className="font-display text-3xl md:text-4xl font-black text-[#1A3FD8] block">40+</span>
              <span className="text-xs text-[#41517D] font-mono uppercase font-bold mt-1 block">Happy Clients</span>
            </div>
            <div id="stat-years-game">
              <span className="font-display text-3xl md:text-4xl font-black text-[#0A163B] block">5+</span>
              <span className="text-xs text-[#41517D] font-mono uppercase font-bold mt-1 block">Years in the Game</span>
            </div>
            <div id="stat-industries-served">
              <span className="font-display text-3xl md:text-4xl font-black text-[#1A3FD8] block">8</span>
              <span className="text-xs text-[#41517D] font-mono uppercase font-bold mt-1 block">Industries Dominated</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT CLIENTS SAY (Early Trust Signal with Two-Benefit Toggle) */}
      <section id="early-trust-section" className="py-20 bg-white border-b border-[#BDCEFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block mb-3">HEAR FROM OUR CLIENTS</span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-[#0A163B] tracking-tight">
            Results that speak louder than promises
          </h2>

          {/* Mirrors HexaClicks' two-benefit toggle format */}
          <div className="flex items-center justify-center space-x-4 mt-8 mb-12">
            <button
              id="early-trust-toggle-grow"
              onClick={() => setBenefitToggle("grow")}
              className={`px-6 py-2.5 rounded text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                benefitToggle === "grow"
                  ? "bg-[#1A3FD8] text-white active-glow"
                  : "bg-[#F4F7FF] border border-[#BDCEFF] text-[#41517D]"
              }`}
            >
              We grow your business
            </button>
            <button
              id="early-trust-toggle-retain"
              onClick={() => setBenefitToggle("retain")}
              className={`px-6 py-2.5 rounded text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                benefitToggle === "retain"
                  ? "bg-[#1A3FD8] text-white active-glow"
                  : "bg-[#F4F7FF] border border-[#BDCEFF] text-[#41517D]"
              }`}
            >
              We retain your results
            </button>
          </div>

          {/* 3 Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS_DATA.filter(t => t.benefitType === benefitToggle || t.id === "test-3").slice(0, 3).map(testimonial => (
              <div 
                key={testimonial.id}
                className="bg-[#F4F7FF] border border-[#BDCEFF] p-8 rounded-lg relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#1A3FD8]/5 rounded-bl-full flex items-center justify-center">
                  <span className="text-[#1A3FD8] text-lg font-mono">⚡</span>
                </div>
                <div>
                  <span className="text-[#1A3FD8] text-5xl font-serif block leading-none select-none h-6">&ldquo;</span>
                  <p className="text-[#41517D] text-sm leading-relaxed italic mb-6">
                    {testimonial.quote}
                  </p>
                </div>
                <div>
                  <div className="border-t border-[#BDCEFF] pt-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-sm font-black text-[#0A163B]">{testimonial.clientName}</h4>
                      <p className="text-xs text-[#41517D]">{testimonial.role}</p>
                    </div>
                    <span className="text-[10px] font-mono text-[#1A3FD8] bg-[#1A3FD8]/10 px-2 py-0.5 rounded uppercase font-bold">
                      {testimonial.serviceUsed.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW VOLTIQ HELPS YOU */}
      <section id="how-helps-section" className="py-20 bg-[#F4F7FF] border-y border-[#BDCEFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Left bullet points */}
            <div className="md:col-span-7 space-y-6">
              <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block">YOUR GROWTH PARTNER</span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-[#0A163B] tracking-tight">
                How can Voltiq help your business?
              </h2>
              <p className="text-[#41517D] text-sm md:text-base leading-relaxed">
                Voltiq is your elite digital growth partner. We bypass the usual branding theories and focus entirely on creating systematic pipelines:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#1A3FD8] shrink-0 font-bold">⚡</span>
                  <p className="text-sm text-[#41517D] font-sans">
                    <strong className="text-[#0A163B] font-bold">Build a website that converts</strong> — engineered for sub-2-second load times and high visitor retention.
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#1A3FD8] shrink-0 font-bold">⚡</span>
                  <p className="text-sm text-[#41517D] font-sans">
                    <strong className="text-[#0A163B] font-bold">Rank you higher on Google</strong> — we target high-intent keywords that capture actual commercial buyers.
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#1A3FD8] shrink-0 font-bold">⚡</span>
                  <p className="text-sm text-[#41517D] font-sans">
                    <strong className="text-[#0A163B] font-bold">Run ads that actually make money</strong> — A/B testing hook copies and layout angles with high ROAS thresholds.
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#1A3FD8] shrink-0 font-bold">⚡</span>
                  <p className="text-sm text-[#41517D] font-sans">
                    <strong className="text-[#0A163B] font-bold">Grow your social following with real engagement</strong> — thumb-stopping custom visuals and community care.
                  </p>
                </li>
              </ul>

              <div className="pt-4">
                <button
                  id="about-voltiq-link"
                  onClick={() => { setView("about"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A3FD8] hover:text-[#0A163B] transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>About Voltiq</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right dark card stats counter grid */}
            <div className="md:col-span-5 bg-white border border-[#BDCEFF] p-8 rounded-lg relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1A3FD8]/5 rounded-full blur-2xl" />
              <h3 className="font-display text-sm font-black text-[#1A3FD8] uppercase tracking-wider mb-6 border-b border-[#BDCEFF] pb-3">VOLTIQ BENCHMARKS</h3>
              
              <div className="space-y-6 font-sans">
                <div className="flex justify-between items-center border-b border-[#BDCEFF]/50 pb-3">
                  <span className="text-[#41517D] text-xs uppercase tracking-wide font-mono">Organic Traffic Uplift</span>
                  <span className="font-mono text-[#1A3FD8] font-black">+280%</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#BDCEFF]/50 pb-3">
                  <span className="text-[#41517D] text-xs uppercase tracking-wide font-mono">Cost Per Lead Reduction</span>
                  <span className="font-mono text-[#0A163B] font-black">-40%</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#BDCEFF]/50 pb-3">
                  <span className="text-[#41517D] text-xs uppercase tracking-wide font-mono">Average Landing Page Speed</span>
                  <span className="font-mono text-[#1A3FD8] font-black">0.8s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#41517D] text-xs uppercase tracking-wide font-mono">Active Client Retention</span>
                  <span className="font-mono text-[#0A163B] font-black">94%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — SERVICES (Tab Switcher — Mirror HexaClicks Layout) */}
      <section id="services-section" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block mb-3">WHAT WE DO</span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#0A163B] tracking-tight">
              Beast Mode Offerings
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            
            {/* Left: Vertical tab list */}
            <div id="services-vertical-tabs" className="md:col-span-5 flex flex-col space-y-3">
              {SERVICES_DATA.map(service => (
                <button
                  key={service.id}
                  id={`service-tab-btn-${service.id}`}
                  onClick={() => setActiveServiceTab(service.id)}
                  className={`px-6 py-5 text-left rounded-lg transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    activeServiceTab === service.id
                      ? "bg-[#F4F7FF] border-[#1A3FD8] active-glow text-[#1A3FD8] font-bold"
                      : "bg-[#F4F7FF]/40 border-[#BDCEFF] text-[#41517D] hover:text-[#1A3FD8]"
                  }`}
                >
                  <span className="font-display text-sm uppercase tracking-wide">{service.name}</span>
                  <Zap className={`h-4 w-4 ${activeServiceTab === service.id ? "text-[#1A3FD8] fill-[#1A3FD8]" : "text-[#41517D]"}`} />
                </button>
              ))}
            </div>

            {/* Right: Service detail panel that swaps on tab click */}
            <div id="services-detail-panel" className="md:col-span-7 bg-[#F4F7FF] border-2 border-[#BDCEFF] p-8 md:p-10 rounded-lg relative overflow-hidden min-h-[420px] flex flex-col justify-between">
              {SERVICES_DATA.filter(s => s.id === activeServiceTab).map(service => (
                <div key={service.id} className="space-y-6 animate-fade-in">
                  <div>
                    <span className="text-[#1A3FD8] font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">⚡ CAPABILITY MATRIX</span>
                    <h3 className="font-display text-2xl font-black text-[#0A163B] tracking-tight">{service.name}</h3>
                  </div>
                  
                  <p className="text-sm font-sans font-bold text-[#1A3FD8] italic">
                    "{service.tagline}"
                  </p>

                  <p className="text-[#41517D] text-sm leading-relaxed">
                    {service.painPoint}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono font-bold text-[#41517D] block uppercase">HIGH-VOLTAGE OUTCOMES:</span>
                    <ul className="space-y-2">
                      {service.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <span className="text-[#1A3FD8] shrink-0">⚡</span>
                          <span className="text-xs text-[#41517D] font-sans">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-[#BDCEFF] flex flex-col sm:flex-row gap-4">
                    <button
                      id={`learn-more-service-${service.id}`}
                      onClick={() => handleServiceDetailClick(service.id)}
                      className="px-6 py-3 bg-[#1A3FD8] hover:bg-[#0A163B] text-white font-sans text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      Explore Service Framework &rarr;
                    </button>
                    <button
                      id={`quick-consult-service-${service.id}`}
                      onClick={() => { setView("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      className="px-6 py-3 border border-[#BDCEFF] hover:border-[#1A3FD8] hover:bg-[#1A3FD8]/5 text-[#1A3FD8] font-sans text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      Instant Consult
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* SECTION 7 — THE VOLTIQ MODEL (Visual Equation — Mirror HexaClicks Partner Section) */}
      <section id="voltiq-model-equation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block mb-3">HOW WE WORK</span>
            <h2 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#0A163B] tracking-tight whitespace-nowrap">
              Your Business + Voltiq = Unstoppable Growth
            </h2>
          </div>

          {/* Three-block visual equation */}
          <div id="visual-equation-blocks" className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto text-left relative">
            
            {/* Block 1: Voltiq services */}
            <div className="bg-[#F4F7FF] border border-[#BDCEFF] p-6 rounded-lg relative">
              <span className="text-xs font-mono text-[#1A3FD8] uppercase block mb-3">VOLTIQ SERVICES</span>
              <ul className="space-y-3 text-xs text-[#41517D]">
                <li className="flex items-center space-x-2">
                  <span className="text-[#1A3FD8]">✔</span>
                  <span>Web Conversion Architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#1A3FD8]">✔</span>
                  <span>Deep Technical SEO & Indices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#1A3FD8]">✔</span>
                  <span>Direct Paid Response Ads</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#1A3FD8]">✔</span>
                  <span>Auth Content Schedules</span>
                </li>
              </ul>
            </div>

            {/* Block 2: Your Business */}
            <div className="bg-[#F4F7FF] border border-[#BDCEFF] p-6 rounded-lg relative">
              {/* Plus indicator overlay */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#1A3FD8] text-white h-10 w-10 rounded-full flex items-center justify-center font-bold border-4 border-white lg:static lg:transform-none lg:mx-auto lg:my-0 lg:hidden">
                +
              </div>
              <span className="text-xs font-mono text-[#1A3FD8] uppercase block mb-3">YOUR FOCUS</span>
              <ul className="space-y-3 text-xs text-[#41517D]">
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✔</span>
                  <span>Close Incoming Deals</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✔</span>
                  <span>Serve Retained Clients</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✔</span>
                  <span>Manage Core Product Quality</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✔</span>
                  <span>Scale Operating Revenue</span>
                </li>
              </ul>
            </div>

            {/* Block 3: Outcome block */}
            <div className="bg-[#1A3FD8]/5 border-2 border-[#1A3FD8] p-6 rounded-lg relative">
              <span className="text-xs font-mono text-[#1A3FD8] uppercase block mb-3">GROWTH OUTCOME</span>
              <ul className="space-y-3 text-xs text-[#0A163B] font-bold">
                <li className="flex items-center space-x-2">
                  <span className="text-[#1A3FD8]">⚡</span>
                  <span>Double Pipeline Scale</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#1A3FD8]">⚡</span>
                  <span>Decrease Cost Per Lead</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#1A3FD8]">⚡</span>
                  <span>Consistent Flow of Buyers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#1A3FD8]">⚡</span>
                  <span>Zero Marketing Micromanagement</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8 — NICHES WE SERVE */}
      <section id="niches-section" className="py-20 bg-[#F4F7FF] border-y border-[#BDCEFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block mb-3">INDUSTRIES WE DOMINATE</span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#0A163B] tracking-tight">
              We bring specialized expertise to every sector
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {NICHES_DATA.map((niche, idx) => (
              <div
                key={idx}
                id={`niche-card-${niche.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white border border-[#BDCEFF] p-6 rounded-lg text-left group hover:border-[#1A3FD8] hover-glow transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="mb-4">
                    {getIconComponent(niche.iconName)}
                  </div>
                  <h4 className="font-display text-base font-black text-[#0A163B] group-hover:text-[#1A3FD8] transition-colors leading-tight">
                    {niche.name}
                  </h4>
                  <p className="text-xs text-[#41517D] leading-relaxed mt-2 line-clamp-3 font-sans">
                    {niche.description}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#41517D] group-hover:text-[#1A3FD8] block mt-4">
                  {niche.projects} PROJECTS COMPLETED
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* SECTION 10 — MID-PAGE CTA BANNER */}
      <section id="mid-page-cta-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#F4F7FF] border border-[#BDCEFF] p-8 md:p-12 rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            {/* Visual gradient edge indicator */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#1A3FD8] to-[#BDCEFF]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1A3FD8]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-xl space-y-3">
              <h3 className="font-display text-2xl md:text-3xl font-black text-[#0A163B] uppercase tracking-tight">
                Ready to charge up your digital presence?
              </h3>
              <p className="text-sm text-[#41517D] leading-relaxed font-sans">
                Book a free 20-minute strategy call. We'll analyze your current digital setup in real-time, scan search ranks, and show you exactly how to grow your pipeline.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <button
                id="cta-book-call-mid"
                onClick={() => { setView("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="px-8 py-4 bg-[#1A3FD8] text-white hover:bg-[#0A163B] font-sans font-black text-xs uppercase tracking-wider text-center rounded transition-all cursor-pointer shadow-sm"
              >
                Book Free Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — HOW IT WORKS (Onboarding Process) */}
      <section id="how-it-works-section" className="py-20 bg-[#F4F7FF] border-y border-[#BDCEFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block mb-3">OUR PROCESS</span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#0A163B] tracking-tight">
              From first call to full-throttle growth
            </h2>
          </div>

          {/* 4-step horizontal visual flow with connecting lightning lines */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            
            {/* Step 1 */}
            <div className="relative text-left space-y-4">
              <div className="flex items-center justify-between">
                <span className="h-10 w-10 bg-[#1A3FD8]/10 text-[#1A3FD8] font-mono text-sm font-black flex items-center justify-center rounded-full shadow">
                  01
                </span>
                <div className="hidden md:block flex-grow h-0.5 border-t border-dashed border-[#BDCEFF] mx-4" />
              </div>
              <h3 className="font-display text-sm font-black text-[#0A163B] uppercase tracking-wider">Discovery Call</h3>
              <p className="text-xs text-[#41517D] leading-relaxed">
                We audit your current digital presence and map your specific target objectives in 20 minutes flat.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-left space-y-4">
              <div className="flex items-center justify-between">
                <span className="h-10 w-10 bg-[#1A3FD8]/10 text-[#1A3FD8] font-mono text-sm font-black flex items-center justify-center rounded-full shadow">
                  02
                </span>
                <div className="hidden md:block flex-grow h-0.5 border-t border-dashed border-[#BDCEFF] mx-4" />
              </div>
              <h3 className="font-display text-sm font-black text-[#0A163B] uppercase tracking-wider">Strategy Build</h3>
              <p className="text-xs text-[#41517D] leading-relaxed">
                Our internal architects design a precision customer acquisition strategy tailored to your sector constraints.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-left space-y-4">
              <div className="flex items-center justify-between">
                <span className="h-10 w-10 bg-[#1A3FD8]/10 text-[#1A3FD8] font-mono text-sm font-black flex items-center justify-center rounded-full shadow">
                  03
                </span>
                <div className="hidden md:block flex-grow h-0.5 border-t border-dashed border-[#BDCEFF] mx-4" />
              </div>
              <h3 className="font-display text-sm font-black text-[#0A163B] uppercase tracking-wider">Full Execution</h3>
              <p className="text-xs text-[#41517D] leading-relaxed">
                We design assets, clean page index blocks, deploy campaigns, and optimize weekly with zero micromanagement from you.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative text-left space-y-4">
              <div>
                <span className="h-10 w-10 bg-[#1A3FD8] text-white font-mono text-sm font-black flex items-center justify-center rounded-full shadow active-glow">
                  04
                </span>
              </div>
              <h3 className="font-display text-sm font-black text-[#0A163B] uppercase tracking-wider">Scale & Dominate</h3>
              <p className="text-xs text-[#41517D] leading-relaxed">
                We double down on high-ROAS bid sectors and expand your search footprint dynamically month over month.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 12 — TESTIMONIALS (Full Section) */}
      <section id="full-testimonials-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block mb-3">CLIENT WINS</span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#0A163B] tracking-tight">
              What our partners say about working with Voltiq
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS_DATA.slice(0, 3).map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-[#F4F7FF] border border-[#BDCEFF] p-8 rounded-lg relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#1A3FD8] fill-[#1A3FD8]" />
                    ))}
                  </div>
                  <p className="text-[#41517D] text-sm leading-relaxed italic mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-[#BDCEFF] pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-sm font-black text-[#0A163B]">{testimonial.clientName}</h4>
                    <p className="text-xs text-[#41517D]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Review badge representation */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 border-t border-[#BDCEFF]/50 pt-8">
            <div className="bg-[#F4F7FF] border border-[#BDCEFF] px-5 py-3 rounded flex items-center space-x-3">
              <span className="text-xs font-mono font-bold text-[#41517D]">CLIENT RATING FROM GOOGLE:</span>
              <span className="font-display text-sm font-black text-[#0A163B]">4.9 / 5.0 ★</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 13 — FAQ / OBJECTION HANDLER */}
      <section id="faq-section" className="py-20 bg-[#F4F7FF] border-y border-[#BDCEFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block mb-3">SYSTEMIC QUESTIONS</span>
            <h2 className="font-display text-3xl font-black text-[#0A163B] tracking-tight">
              Can an agency truly deliver results for my business?
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white border border-[#BDCEFF] rounded-lg overflow-hidden transition-colors"
                >
                  <button
                    id={`faq-btn-${index}`}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between font-display text-sm sm:text-base md:text-lg font-bold text-[#0A163B] leading-snug tracking-tight cursor-pointer focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-[#1A3FD8]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#41517D]" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="p-6 pt-0 border-t border-[#BDCEFF]/50 text-xs md:text-sm text-[#41517D] leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 bg-white border border-[#BDCEFF] p-6 rounded-lg shadow-sm">
            <p className="text-xs text-[#41517D] font-sans">
              Still have specific operations questions? Let's discuss directly.
            </p>
            <a
              href="https://wa.me/923305125600"
              target="_blank"
              rel="noreferrer"
              id="whatsapp-faq-btn"
              className="mt-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-sans font-bold text-xs uppercase px-6 py-3 rounded-md inline-flex items-center space-x-2 transition-all shadow-sm"
            >
              <span className="text-white">Chat on WhatsApp &rarr;</span>
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 14 — CONTACT / BOOKING SECTION */}
      <section id="contact-booking-section" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#1A3FD8] font-mono text-xs font-black uppercase tracking-widest block">CHANNELS SECURE</span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-[#0A163B] tracking-tight leading-none">
                Ready to go Voltiq?
              </h2>
              <p className="text-[#41517D] text-sm md:text-base leading-relaxed">
                Book a free 20-minute strategy call or drop us a message. We analyze and respond with custom digital blueprints in 24 hours.
              </p>

              <div className="space-y-4">
                <a 
                  href="https://wa.me/923305125600"
                  target="_blank"
                  rel="noreferrer"
                  id="whatsapp-contact-card"
                  className="bg-[#F4F7FF] border border-[#BDCEFF] p-5 rounded-lg hover:border-[#1A3FD8] transition-colors flex items-center space-x-4 cursor-pointer block"
                >
                  <span className="text-green-500 text-2xl font-bold">💬</span>
                  <div>
                    <span className="text-[10px] text-[#41517D] font-mono block uppercase">WHATSAPP RESPONSE SPEED</span>
                    <strong className="text-[#0A163B] text-sm font-bold block mt-0.5">Chat on WhatsApp ↗</strong>
                  </div>
                </a>

                <div className="bg-[#F4F7FF] border border-[#BDCEFF] p-5 rounded-lg flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-[#1A3FD8]" />
                  <div>
                    <span className="text-[10px] text-[#41517D] font-mono block uppercase">DIRECT CONTACT MAILBOX</span>
                    <span className="text-[#0A163B] text-sm font-bold block mt-0.5">hello@voltiq.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-7 bg-[#F4F7FF] border-2 border-[#BDCEFF] p-8 rounded-lg relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A3FD8]/5 rounded-full blur-2xl" />
              
              <h3 className="font-display text-lg font-black text-[#0A163B] uppercase mb-6 border-b border-[#BDCEFF] pb-3">
                Secure Client Pipeline Request
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] placeholder-[#7B8AB8] focus:border-[#1A3FD8] focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Business Email *"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] placeholder-[#7B8AB8] focus:border-[#1A3FD8] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="WhatsApp Number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#0A163B] placeholder-[#7B8AB8] focus:border-[#1A3FD8] focus:outline-none"
                  />
                  <select
                    value={contactForm.service}
                    onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    className="w-full bg-white border border-[#BDCEFF] px-4 py-3 rounded text-sm text-[#41517D] focus:border-[#1A3FD8] focus:outline-none"
                  >
                    <option value="Web Design" className="text-[#0A163B]">Web Design & Development</option>
                    <option value="SEO" className="text-[#0A163B]">Digital Marketing & SEO</option>
                    <option value="Social Media" className="text-[#0A163B]">Social Media Management</option>
                    <option value="Paid Ads" className="text-[#0A163B]">Paid Ads (Google & Meta)</option>
                  </select>
                </div>

                <textarea
                  rows={4}
                  required
                  placeholder="Detail your digital challenges, monthly budget scale, and revenue targets..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full bg-white border border-[#BDCEFF] p-4 rounded text-sm text-[#0A163B] placeholder-[#7B8AB8] focus:border-[#1A3FD8] focus:outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-[#1A3FD8] hover:bg-[#0A163B] text-white font-sans font-extrabold uppercase tracking-widest text-xs py-4 rounded transition-all cursor-pointer shadow-sm"
                >
                  TRANSMIT PIPELINE SPECIFICATION
                </button>
              </form>

              {formFeedback && (
                <div className="mt-4 bg-white border border-[#BDCEFF] p-4 rounded text-xs text-[#1A3FD8] font-mono leading-relaxed">
                  {formFeedback}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
