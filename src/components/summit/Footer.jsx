import React, { useState } from "react";
import { Linkedin, ExternalLink } from "lucide-react";

const MAILING_LIST_URL = "https://share.hsforms.com/1GHpNjc5RTCikP6O4gElZFge3b02";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      window.open(MAILING_LIST_URL, "_blank", "noopener,noreferrer");
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-950 text-white">
      {/* Mailing List */}
      <div className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h3 className="text-2xl font-bold mb-2">Join the Niural Mailing List</h3>
          <p className="text-white/50 mb-8 text-sm">
            Receive executive insights and event updates.
          </p>
          {submitted ? (
            <p className="text-[#E151FF] font-medium">You're on the list!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#714DFF] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-colors whitespace-nowrap" style={{ background: "linear-gradient(135deg, #714DFF, #E151FF)" }}
              >
                Be the First to Know!
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dd0c3a7954b36d829e748/2a9e777ab_logomark.png"
              alt="Niural logo"
              className="w-7 h-7 object-contain brightness-0 invert"
            />
            <span className="text-white font-semibold text-sm">Niural</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/40">
            <a href="https://niural.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="https://niural.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
              Event Terms & Conditions
            </a>
            <a href="mailto:events@niural.com" className="hover:text-white/70 transition-colors">
              Contact
            </a>
            <a href="https://niural.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
              Niural Website
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/niural"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/niural"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/10 transition-all"
              aria-label="X"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a
              href="https://lu.ma/niural"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/10 transition-all"
              aria-label="Luma Events"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-white/20">
          © 2026 Niural. All rights reserved.
        </div>
      </div>

      {/* Large "Niural Inc." watermark at the very bottom */}
      <div className="w-full overflow-hidden" style={{ lineHeight: 0 }}>
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dd0c3a7954b36d829e748/d1ca927ec_footer-text.png"
          alt="Niural Inc."
          className="w-full object-cover opacity-60"
          style={{ display: "block" }}
        />
      </div>
    </footer>
  );
}