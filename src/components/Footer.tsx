import React, { useState } from "react";
import { Zap, Mail, MessageSquare, MapPin, Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react";
import { View } from "../types";

interface FooterProps {
  setCurrentView: (view: View) => void;
}

export default function Footer({ setCurrentView }: FooterProps) {

  const handleLinkClick = (view: View, elementId?: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (elementId) {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  };

  return (
    <footer id="main-footer" className="relative bg-white text-[#0A163B] border-t-2 border-[#1A3FD8] pt-12 overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1A3FD8]/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A3FD8]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 4 COLUMNS LAYOUT */}
        <div id="footer-columns-grid" className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#BDCEFF]">
          {/* Column 1: Brand */}
          <div className="md:col-span-4 flex flex-col space-y-6">
            <div
              onClick={() => handleLinkClick("home")}
              className="flex items-center space-x-2 cursor-pointer group w-fit"
            >
              <Zap className="h-6 w-6 text-[#F5C500] fill-[#F5C500]" />
              <span className="font-display text-xl font-black text-[#0A163B] tracking-tight">
                VOLT<span className="text-[#F5C500]">IQ</span>
              </span>
            </div>
            <p className="text-[#41517D] font-sans text-sm leading-relaxed max-w-sm">
              Voltiq is a full-service digital agency that fuses data-driven strategy with creative force — delivering measurable growth across web, search, social, and paid media.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-link-linkedin"
                className="h-9 w-9 bg-white border border-[#BDCEFF] hover:border-[#1A3FD8] hover:text-[#1A3FD8] text-[#41517D] flex items-center justify-center rounded-md transition-all duration-300 shadow-sm"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-link-instagram"
                className="h-9 w-9 bg-white border border-[#BDCEFF] hover:border-[#1A3FD8] hover:text-[#1A3FD8] text-[#41517D] flex items-center justify-center rounded-md transition-all duration-300 shadow-sm"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-link-facebook"
                className="h-9 w-9 bg-white border border-[#BDCEFF] hover:border-[#1A3FD8] hover:text-[#1A3FD8] text-[#41517D] flex items-center justify-center rounded-md transition-all duration-300 shadow-sm"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-[#0A163B] border-l-2 border-[#1A3FD8] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-[#41517D]">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => handleLinkClick("home")}
                  className="hover:text-[#1A3FD8] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-link-services"
                  onClick={() => handleLinkClick("services")}
                  className="hover:text-[#1A3FD8] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  id="footer-link-how-it-works"
                  onClick={() => handleLinkClick("home", "how-it-works-section")}
                  className="hover:text-[#1A3FD8] transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  id="footer-link-blog"
                  onClick={() => handleLinkClick("blog")}
                  className="hover:text-[#1A3FD8] transition-colors"
                >
                  Blog Articles
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => handleLinkClick("contact")}
                  className="hover:text-[#1A3FD8] transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-[#0A163B] border-l-2 border-[#1A3FD8] pl-3">
              Services
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-[#41517D]">
              <li>
                <button
                  id="footer-link-service-web"
                  onClick={() => handleLinkClick("service-web")}
                  className="hover:text-[#1A3FD8] transition-colors text-left"
                >
                  Web Design & Development
                </button>
              </li>
              <li>
                <button
                  id="footer-link-service-seo"
                  onClick={() => handleLinkClick("service-seo")}
                  className="hover:text-[#1A3FD8] transition-colors text-left"
                >
                  Digital Marketing & SEO
                </button>
              </li>
              <li>
                <button
                  id="footer-link-service-social"
                  onClick={() => handleLinkClick("service-social")}
                  className="hover:text-[#1A3FD8] transition-colors text-left"
                >
                  Social Media Management
                </button>
              </li>
              <li>
                <button
                  id="footer-link-service-ads"
                  onClick={() => handleLinkClick("service-ads")}
                  className="hover:text-[#1A3FD8] transition-colors text-left"
                >
                  Paid Ads (Google & Meta)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-[#0A163B] border-l-2 border-[#1A3FD8] pl-3">
              Contact Info
            </h4>
            <ul className="space-y-3 font-sans text-sm text-[#41517D]">
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-[#1A3FD8] mt-0.5 shrink-0" />
                <span className="text-[#0A163B] hover:text-[#1A3FD8] transition-colors break-all">
                  hello@voltiq.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MessageSquare className="h-4 w-4 text-[#1A3FD8] mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/923305125600"
                  target="_blank"
                  rel="noreferrer"
                  id="footer-whatsapp-link"
                  className="text-[#0A163B] hover:text-[#1A3FD8] transition-colors"
                >
                  +92 330 5125600 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#1A3FD8] mt-0.5 shrink-0" />
                <span className="text-[#0A163B]">Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div id="footer-bottom-bar" className="flex flex-col md:flex-row items-center justify-between py-8 text-xs text-[#41517D] font-sans">
          <div>
            &copy; {new Date().getFullYear()} Voltiq. All Rights Reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Policy applied under standard Voltiq corporate terms."); }} className="hover:text-[#1A3FD8] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms & Conditions applied under standard Voltiq corporate terms."); }} className="hover:text-[#1A3FD8] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
