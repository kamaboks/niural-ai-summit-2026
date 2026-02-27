import React, { useState } from "react";

const FOOTER_LINKS = [
{ label: "Terms of Service", href: "https://www.niural.com/legal/customer-terms-of-service", external: true },
{ label: "Privacy Policy", href: "https://www.niural.com/legal/privacy-policy", external: true },
{ label: "Cookie Policy", href: "https://www.niural.com/legal/cookie-policy", external: true },
{ label: "Contact", href: "mailto:events@niural.com" },
{ label: "Niural Website", href: "https://niural.com", external: true },
{ label: "LinkedIn", href: "https://linkedin.com/company/niural", external: true },
{ label: "X", href: "https://x.com/niuralHQ ", external: true },
{ label: "Luma Events Calendar", href: "https://luma.com/niuralaievents", external: true }];


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
    <footer className="bg-white border-t border-gray-100">
      {/* Mailing List */}
      <div className="border-b border-gray-100">
        <div className="max-w-md mx-auto px-4 py-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Join the Niural Mailing List</h3>
          <p className="text-gray-500 mb-6 text-sm text-center whitespace-nowrap">Be the first to know: receive exclusive insights and event updates

          </p>
          {submitted ?
          <p className="text-[#714DFF] font-medium">You're on the list!</p> :

          <form onSubmit={handleSubmit} className="flex gap-2">
              <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#714DFF] transition-colors" />

              <button
              type="submit"
              className="px-5 py-2.5 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-all shrink-0"
              style={{ background: "linear-gradient(135deg, #714DFF, #E151FF)" }}>

                Be the First to Know!
              </button>
            </form>
          }
        </div>
      </div>

      {/* Top bar: copyright + links */}
      <div className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-500">
            <span className="font-medium text-gray-700">© 2026 Niural Inc.</span>
            {FOOTER_LINKS.slice(0, 3).map((link) =>
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="hover:text-[#714DFF] transition-colors">

                {link.label}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Additional links */}
      <div className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            {FOOTER_LINKS.slice(3).map((link) =>
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="hover:text-[#714DFF] transition-colors">

                {link.label}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="max-w-4xl mx-auto px-4 py-10 text-center space-y-3">
        <p className="text-xs text-gray-400">
          Niural Inc., 16192 Coastal Highway, Lewes DE 19958, United States
        </p>
        <p className="text-xs text-gray-400">
          Niural is a financial technology company and is not a bank. Banking services provided by i3 bank; Member{" "}
          <a href="https://fdic.gov" target="_blank" rel="noopener noreferrer" className="text-[#714DFF] hover:underline">FDIC</a>{" "}
          and JP Morgan Bank; Member FDIC.
        </p>
        <p className="text-xs text-gray-400 leading-relaxed">
          Payment services in some countries for Niural Inc. are provided by CurrencyCloud and/or Nium, Inc. which operate in partnership with Community Federal Savings Bank (CFSB). In the U.S., Nium, Inc. operates as a service provider to CFSB and all payment services offered by Nium, Inc. are provided by CFSB. CFSB is registered with the Federal Deposit Insurance Corporation (FDIC Certificate# 57129). The Currency Cloud Inc is registered with{" "}
          <a href="https://fincen.gov" target="_blank" rel="noopener noreferrer" className="text-[#714DFF] hover:underline">FinCEN</a>{" "}
          and authorized in 39 states to transmit money (MSB Registration Number: 31000160311064). Registered Office: Niural Inc., 16192 Coastal Highway, Lewes DE 19958, United States
        </p>
        <p className="text-xs text-gray-400">
          *Exclusions apply based on supported payments methods in certain jurisdictions.
        </p>
      </div>

      {/* Full-width "Niural Inc." watermark */}
      <div className="max-w-4xl mx-auto px-4 overflow-hidden" style={{ lineHeight: 0 }}>
        <img
          src="https://www.niural.com/assets/landing/footer-text.svg"
          alt="Niural Inc."
          aria-hidden="true"
          className="w-full object-cover"
          style={{ display: "block" }} />

      </div>
    </footer>);

}