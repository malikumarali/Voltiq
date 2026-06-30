import { useState, useEffect } from "react";
import { Zap, Menu, X, PhoneCall } from "lucide-react";
import { View } from "../types";

interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

export default function Header({ currentView, setCurrentView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open to prevent background scrolling/transparency issues
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", view: "home" as View, id: "hero-section" },
    { label: "About Us", view: "about" as View, id: "" },
    { label: "Careers", view: "careers" as View, id: "" },
    { label: "Contact Us", view: "contact" as View, id: "" },
  ];

  const handleNavClick = (item: { label: string; view: View; id: string }) => {
    setIsOpen(false);
    setCurrentView(item.view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white border-b border-[#BDCEFF] py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="header-logo"
            onClick={() => {
              setCurrentView("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <Zap className="h-7 w-7 text-[#F5C500] fill-[#F5C500] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            <span className="font-display text-2xl font-black tracking-tight text-[#0A163B]">
              VOLT<span className="text-[#F5C500]">IQ</span>
            </span>
          </div>

          {/* Desktop Nav (Centered in the remaining header space) */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-14">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.label}
                  id={`nav-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => handleNavClick(item)}
                  className={`font-sans text-xs lg:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap relative py-2 ${
                    isActive 
                      ? "text-[#1A3FD8]" 
                      : "text-[#41517D] hover:text-[#1A3FD8]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1A3FD8] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Buttons (Aligned to the far right) */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <button
              id="cta-book-call-header"
              onClick={() => {
                setCurrentView("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-4 py-2.5 bg-[#1A3FD8] text-white font-sans font-bold text-xs lg:text-sm tracking-wide rounded hover:bg-[#0A163B] transition-all duration-300 flex items-center space-x-1.5 cursor-pointer shadow-sm whitespace-nowrap"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Book a Free Call</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              id="mobile-menu-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0A163B] hover:text-[#1A3FD8] transition-colors p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu-overlay"
        className={`fixed inset-x-0 top-[56px] bottom-0 bg-white z-40 md:hidden flex flex-col justify-between py-10 px-6 border-t border-[#BDCEFF] transition-all duration-500 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              id={`mobile-nav-item-${index}`}
              onClick={() => handleNavClick(item)}
              className={`text-left font-display text-2xl font-bold transition-colors border-b border-[#BDCEFF]/40 pb-4 ${
                currentView === item.view ? "text-[#1A3FD8]" : "text-[#0A163B] hover:text-[#1A3FD8]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          <button
            id="mobile-nav-booking-btn"
            onClick={() => {
              setIsOpen(false);
              setCurrentView("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-full py-4 bg-[#1A3FD8] text-white text-center font-display font-black tracking-wide rounded shadow-md hover:bg-[#0A163B]"
          >
            BOOK A FREE CALL
          </button>
        </div>
      </div>
    </header>
  );
}
