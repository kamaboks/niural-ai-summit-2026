import React from "react";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const TICKET_URL = "https://luma.com/mggz3md1?utm_source=summitlandingpage";

function preserveUtms(baseUrl) {
  const currentParams = new URLSearchParams(window.location.search);
  const url = new URL(baseUrl);
  currentParams.forEach((value, key) => {
    url.searchParams.set(key, value);
  });
  return url.toString();
}

const SPONSORS = [
  { name: "Maximore", src: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/f2d3c692a_Maximore.png", bigger: true },
  { name: "Aetna", src: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/de097caa8_Aetna-Logo.jpg" },
  { name: "401GO", src: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/8d2450bf9_401go-logo.png" },
  { name: "Basic Capital", src: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/41016b62d_hf_20260323_161048_2730c8d2-53bb-4728-a7d0-578593145570.png" },
  { name: "PwC", src: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/a6ceb2c65_PwC_logo_rgb_colour_rev.png", invert: true },
  { name: "Shay CPA", src: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/bb7409efa_ShayCPALogo.png", invert: true },
];

const SLOT_WIDTH = 280; // px per sponsor slot
const TOTAL_WIDTH = SPONSORS.length * SLOT_WIDTH; // width of one full set

export default function Hero() {
  const scrollToTickets = (e) => {
    e.preventDefault();
    document.querySelector("#tickets")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "#faf8ff" }} />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-[350px] h-[350px] rounded-full" style={{ background: "radial-gradient(circle, rgba(113,77,255,0.25) 0%, transparent 65%)", filter: "blur(80px)" }} />
        <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full" style={{ background: "radial-gradient(circle, rgba(225,81,255,0.2) 0%, transparent 65%)", filter: "blur(90px)" }} />
        <div className="absolute bottom-10 left-1/3 w-[300px] h-[250px] rounded-full" style={{ background: "radial-gradient(circle, rgba(196,181,253,0.25) 0%, transparent 65%)", filter: "blur(100px)" }} />
      </div>

      <div className="mx-auto pt-32 pb-48 px-4 text-center opacity-100 relative z-10 max-w-4xl sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#714DFF]/10 border border-[#714DFF]/20 mb-6">
          <Calendar className="w-3.5 h-3.5 text-[#714DFF]" />
          <span className="text-sm font-medium text-[#714DFF] tracking-wide">NYC Pre-Tech Week Summit</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#1a0e3d] tracking-tight leading-[1.08] mb-5">
          Niural AI Summit 2026
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-[#3d2d6e]/80 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          AI Conference in NYC for Finance, HR, and Operations Leaders
        </motion.p>

        {/* Meta details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-4 text-[#3d2d6e]/50 text-sm">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            Thursday, May 28, 2026
          </span>
          <span className="hidden sm:inline text-[#714DFF]/25">|</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Midtown Manhattan
          </span>
          <span className="hidden sm:inline text-[#714DFF]/25">|</span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            200+ Curated Leaders
          </span>
        </motion.div>

        {/* Supporting SEO line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-sm md:text-base text-[#3d2d6e]/50 max-w-2xl mx-auto mb-12 leading-relaxed">
          The pre-NYC Tech Week AI summit brings together founders, CFOs, HR leaders,<br />and operators building modern finance and workforce systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={preserveUtms(TICKET_URL)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#714DFF]/25"
            style={{ background: "linear-gradient(135deg, #714DFF, #E151FF)" }}>
            Get Tickets
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Sponsors ticker */}
      <div className="absolute bottom-16 left-0 right-0 z-10">
        <p className="text-[#3d2d6e]/30 mb-8 text-xs font-semibold text-center uppercase tracking-widest">SPONSORED BY</p>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to right, #faf8ff, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to left, #faf8ff, transparent)" }} />

          <style>{`
            @keyframes ticker {
              0%   { transform: translateX(0px); }
              100% { transform: translateX(-${TOTAL_WIDTH}px); }
            }
            .sponsor-ticker {
              display: flex;
              width: max-content;
              animation: ticker 28s linear infinite;
            }
          `}</style>

          {/* Render 3 copies so the loop is always seamless regardless of viewport width */}
          <div className="sponsor-ticker">
            {[...SPONSORS, ...SPONSORS, ...SPONSORS].map((sponsor, i) => (
              <div
                key={i}
                style={{ width: `${SLOT_WIDTH}px`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 40px" }}>
                <img
                  src={sponsor.src}
                  alt={sponsor.name}
                  style={{
                    height: sponsor.bigger ? "90px" : "64px",
                    width: "auto",
                    objectFit: "contain",
                    opacity: sponsor.bigger ? 0.75 : 0.45,
                    filter: `grayscale(1)${sponsor.invert ? " invert(1)" : ""}`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}