import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TICKET_URL = "https://luma.com/mggz3md1";

function preserveUtms(baseUrl) {
  const currentParams = new URLSearchParams(window.location.search);
  const url = new URL(baseUrl);
  currentParams.forEach((value, key) => {
    url.searchParams.set(key, value);
  });
  return url.toString();
}

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #714DFF 60%, #E151FF 100%)" }} />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#E151FF]/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#714DFF]/20 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            Secure Your Seat at the Leading Executive AI Summit in NYC
          </h2>
          <p className="text-lg text-white/70 mb-10">
            Secure your seat as spots are limited!
          </p>
          <motion.a
            href={preserveUtms(TICKET_URL)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-[#5E3BD4] bg-white rounded-full hover:bg-gray-100 transition-all duration-200 shadow-xl"
            animate={{ boxShadow: ["0 0 20px 4px rgba(255,255,255,0.2)", "0 0 40px 12px rgba(255,255,255,0.5)", "0 0 20px 4px rgba(255,255,255,0.2)"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Get Tickets
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}