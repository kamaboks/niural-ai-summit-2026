import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
{ label: "Why Attend", href: "#why-attend" },
{ label: "Speakers", href: "#speakers" },
{ label: "Agenda", href: "#agenda" },
{ label: "Tickets", href: "#tickets" },
{ label: "FAQ", href: "#faq" }];


const TICKET_URL = "https://luma.com/mggz3md1";

function preserveUtms(baseUrl) {
  const currentParams = new URLSearchParams(window.location.search);
  const url = new URL(baseUrl);
  currentParams.forEach((value, key) => {
    url.searchParams.set(key, value);
  });
  return url.toString();
}

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/60 px-5 rounded-2xl flex items-center justify-between h-14 backdrop-blur-xl border border-white/40 shadow-sm">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {e.preventDefault();window.scrollTo({ top: 0, behavior: "smooth" });}}
            className="flex items-center gap-2 flex-shrink-0">

            <img
              src="https://www.niural.com/assets/logo.svg"
              alt="Niural"
              className="h-5 object-contain" />

          </a>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-gray-200 mx-4" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 flex-1">
            {NAV_LINKS.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors">

                {link.label}
              </a>
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={preserveUtms(TICKET_URL)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white rounded-full hover:opacity-90 transition-all"
              style={{ background: "linear-gradient(135deg, #714DFF, #E151FF)" }}>

              Get Tickets
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu">

            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open &&
      <div className="md:hidden max-w-6xl mx-auto mt-2">
          <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl px-4 py-5 space-y-1">
            {NAV_LINKS.map((link) =>
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#714DFF] hover:bg-gray-50 rounded-xl transition-colors">

                {link.label}
              </a>
          )}
            <div className="pt-3 border-t border-gray-100 mt-2">
              <a
              href={preserveUtms(TICKET_URL)}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 text-base font-semibold text-white rounded-full hover:opacity-90 transition-all"
              style={{ background: "linear-gradient(135deg, #714DFF, #E151FF)" }}>

                Get Tickets
              </a>
            </div>
          </div>
        </div>
      }
    </nav>);

}