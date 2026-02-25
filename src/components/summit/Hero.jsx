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
    <section className="relative min-h-[115vh] flex items-center justify-center overflow-hidden">
      {/* Background - soft mesh/aurora */}
      <div className="absolute inset-0" style={{ background: "#faf8ff" }} />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full" style={{ background: "radial-gradient(circle, rgba(113,77,255,0.45) 0%, transparent 65%)", filter: "blur(80px)" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(225,81,255,0.35) 0%, transparent 65%)", filter: "blur(90px)" }} />
        <div className="absolute bottom-10 left-1/3 w-[550px] h-[450px] rounded-full" style={{ background: "radial-gradient(circle, rgba(196,181,253,0.5) 0%, transparent 65%)", filter: "blur(100px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(240,171,252,0.3) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div className="absolute -bottom-10 right-10 w-[450px] h-[450px] rounded-full" style={{ background: "radial-gradient(circle, rgba(113,77,255,0.3) 0%, transparent 65%)", filter: "blur(110px)" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
        {/* Niural Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center gap-3">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dd0c3a7954b36d829e748/2a9e777ab_logomark.png"
              alt="Niural logomark"
              className="w-12 h-12 object-contain"
            />
            <span className="text-[#1a0e3d] text-2xl font-bold tracking-tight">Niural AI</span>
          </div>
        </motion.div>

        {/* Pre-NYC Tech Week Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#714DFF]/10 backdrop-blur-sm border border-[#714DFF]/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#714DFF] animate-pulse" />
          <span className="text-sm font-medium text-[#714DFF] tracking-wide">
            Pre-NYC Tech Week Flagship Event
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
        >
          Niural AI Summit 2026
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Executive AI Conference in NYC for Finance, HR, and Operations Leaders
        </motion.p>

        {/* Meta details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 text-white/70"
        >
          <span className="flex items-center gap-2 text-sm sm:text-base">
            <Calendar className="w-4 h-4" />
            Thursday, May 28, 2026
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="flex items-center gap-2 text-sm sm:text-base">
            <MapPin className="w-4 h-4" />
            Midtown Manhattan
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="flex items-center gap-2 text-sm sm:text-base">
            <Users className="w-4 h-4" />
            200+ Curated Leaders
          </span>
        </motion.div>

        {/* Supporting SEO line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base text-white/60 max-w-2xl mx-auto mb-10"
        >
          The pre-NYC Tech Week AI summit brings together founders, CFOs, HR leaders, and operators building modern finance and workforce systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={preserveUtms(TICKET_URL)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-xl shadow-[#714DFF]/30 border-2 border-[#E151FF]/50 hover:border-[#E151FF]" style={{ background: "linear-gradient(135deg, #714DFF, #E151FF)" }}
          >
            Get Tickets
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTickets}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            View Tickets
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/70 to-transparent" />
    </section>
  );
}