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
      // Pill path: starts at left-center, goes clockwise
      const d = [
      `M ${r} 0`,
      `L ${width - r} 0`,
      `A ${r} ${r} 0 0 1 ${width - r} ${height}`,
      `L ${r} ${height}`,
      `A ${r} ${r} 0 0 1 ${r} 0`,
      `Z`].
      join(" ");
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
          transition={{ duration: 0.6 }}>

          <h2 className="text-white mb-6 text-4xl font-bold tracking-tight leading-tight sm:text-4xl md:text-4xl">Join NYC’s Premier AI Summit for Finance, HR, and Ops Leaders

          </h2>
          <p className="text-lg text-white/70 mb-10">Thursday, May 28, 2026. Midtown Manhattan.

          </p>

          {/* Glow path button wrapper */}
          <div className="inline-block relative" style={{ isolation: "isolate" }}>
            {pathD &&
            <svg
              className="absolute pointer-events-none"
              style={{ top: 0, left: 0, width: "100%", height: "100%", overflow: "visible", zIndex: 10 }}>

                <defs>
                  <filter id="glow-filter" x="-500%" y="-500%" width="1100%" height="1100%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Visible border path */}
                <path d={pathD} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                {/* Glow dot with comet tail */}
                <path id="glow-ring" d={pathD} fill="none" />
                
                {/* Tail particles */}
                <g opacity="0.4">
                  <circle r="3" fill="white" filter="url(#glow-filter)">
                    <animateMotion dur="2.4s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1">
                      <mpath href="#glow-ring" />
                    </animateMotion>
                  </circle>
                </g>
                
                <g opacity="0.25">
                  <circle r="2.5" fill="white" filter="url(#glow-filter)">
                    <animateMotion dur="2.4s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1">
                      <mpath href="#glow-ring" />
                    </animateMotion>
                  </circle>
                </g>

                {/* Main glowing dot */}
                <circle r="4" fill="white" filter="url(#glow-filter)">
                  <animateMotion dur="2.4s" repeatCount="indefinite">
                    <mpath href="#glow-ring" />
                  </animateMotion>
                </circle>
              </svg>
            }

            <a
              ref={btnRef}
              href={preserveUtms(TICKET_URL)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-[#5E3BD4] bg-white rounded-full hover:bg-gray-50 transition-all duration-200 shadow-xl"
              style={{ zIndex: 1, display: "inline-flex" }}>

              Get Tickets
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>


    </section>);

}