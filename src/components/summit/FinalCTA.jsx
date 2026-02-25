import React, { useRef, useEffect, useState } from "react";
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
  const btnRef = useRef(null);
  const [pathD, setPathD] = useState("");

  useEffect(() => {
    function measure() {
      if (!btnRef.current) return;
      const { width, height } = btnRef.current.getBoundingClientRect();
      const r = height / 2;
      // Rounded-rect path (pill shape)
      const d = `
        M ${r},0
        L ${width - r},0
        A ${r},${r} 0 0 1 ${width - r},${height}
        L ${r},${height}
        A ${r},${r} 0 0 1 ${r},0
        Z
      `.trim();
      setPathD(d);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

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

          {/* Glow path button wrapper */}
          <div className="inline-block relative">
            {/* SVG glow path that traces the button border */}
            <svg
              className="absolute pointer-events-none"
              style={{
                top: -2,
                left: -2,
                width: "calc(100% + 4px)",
                height: "calc(100% + 4px)",
                overflow: "visible",
                zIndex: 2,
              }}
            >
              <rect
                id="btn-path"
                x="2" y="2"
                width="calc(100% - 4px)" height="calc(100% - 4px)"
                rx="9999"
                fill="none"
              />
              {/* Animated glow dot */}
              <circle r="4" fill="white" filter="url(#glow-filter)" style={{ opacity: 0.95 }}>
                <animateMotion dur="2.5s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#btn-path" />
                </animateMotion>
              </circle>
              <defs>
                <filter id="glow-filter" x="-200%" y="-200%" width="500%" height="500%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>

            <a
              href={preserveUtms(TICKET_URL)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-[#5E3BD4] bg-white rounded-full hover:bg-gray-50 transition-all duration-200 shadow-xl"
              style={{ zIndex: 1 }}
            >
              Get Tickets
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>


    </section>
  );
}