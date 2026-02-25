import React from "react";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const TICKET_URL = "https://luma.com/mggz3md1";

function preserveUtms(baseUrl) {
  const currentParams = new URLSearchParams(window.location.search);
  const url = new URL(baseUrl);
  currentParams.forEach((value, key) => {
    url.searchParams.set(key, value);
  });
  return url.toString();
}

export default function Hero() {
  const scrollToTickets = (e) => {
    e.preventDefault();
    document.querySelector("#tickets")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - soft mesh/aurora */}
      <div className="absolute inset-0" style={{ background: "#faf8ff" }} />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-[350px] h-[350px] rounded-full" style={{ background: "radial-gradient(circle, rgba(113,77,255,0.25) 0%, transparent 65%)", filter: "blur(80px)" }} />
        <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full" style={{ background: "radial-gradient(circle, rgba(225,81,255,0.2) 0%, transparent 65%)", filter: "blur(90px)" }} />
        <div className="absolute bottom-10 left-1/3 w-[300px] h-[250px] rounded-full" style={{ background: "radial-gradient(circle, rgba(196,181,253,0.25) 0%, transparent 65%)", filter: "blur(100px)" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#714DFF]/10 border border-[#714DFF]/20 mb-6">
          <Calendar className="w-3.5 h-3.5 text-[#714DFF]" />
          <span className="text-sm font-medium text-[#714DFF] tracking-wide">NYC Tech Week Pre-Summit</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#1a0e3d] tracking-tight leading-[1.08] mb-5"
        >
          Niural AI Summit 2026
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#3d2d6e]/70 max-w-xl mx-auto mb-5 leading-relaxed"
        >
          Executive AI Conference in NYC for Finance, HR, and Operations Leaders
        </motion.p>

        {/* Meta details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 text-[#3d2d6e]/40 text-xs"
        >
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            Thursday, May 28, 2026
          </span>
          <span className="text-[#714DFF]/25">|</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            Midtown Manhattan
          </span>
          <span className="text-[#714DFF]/25">|</span>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            200+ Curated Leaders
          </span>
        </motion.div>

        {/* Supporting SEO line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base sm:text-lg text-[#3d2d6e]/55 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          The pre-NYC Tech Week AI summit brings together founders, CFOs, HR leaders, and operators building modern finance and workforce systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={preserveUtms(TICKET_URL)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#714DFF]/25"
            style={{ background: "linear-gradient(135deg, #714DFF, #E151FF)" }}
          >
            Get Tickets
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTickets}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-[#714DFF] bg-white/70 backdrop-blur-sm border border-[#714DFF]/15 rounded-full hover:bg-white transition-all duration-300"
          >
            View Tickets
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent" />
    </section>);

}