import React, { useRef, useState } from "react";
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

const PARTICLES = [
  { x: 10, y: 25, size: 0.3, delay: 0.0, duration: 2.4, alpha: 0.9, ox: 80, oy: 120 },
  { x: 20, y: 60, size: 0.5, delay: 0.6, duration: 2.0, alpha: 0.7, ox: 120, oy: 80 },
  { x: 35, y: 15, size: 0.4, delay: 1.1, duration: 2.8, alpha: 0.8, ox: 90, oy: 150 },
  { x: 50, y: 80, size: 0.3, delay: 0.3, duration: 2.2, alpha: 0.6, ox: 110, oy: 70 },
  { x: 65, y: 10, size: 0.5, delay: 0.9, duration: 2.6, alpha: 0.9, ox: 70, oy: 130 },
  { x: 75, y: 70, size: 0.4, delay: 0.15, duration: 2.1, alpha: 0.7, ox: 130, oy: 90 },
  { x: 88, y: 35, size: 0.3, delay: 0.75, duration: 2.5, alpha: 0.8, ox: 85, oy: 110 },
  { x: 55, y: 50, size: 0.45, delay: 0.45, duration: 1.9, alpha: 0.6, ox: 100, oy: 100 },
  { x: 5,  y: 80, size: 0.35, delay: 1.3, duration: 2.3, alpha: 0.9, ox: 115, oy: 85 },
  { x: 92, y: 65, size: 0.5, delay: 0.55, duration: 2.7, alpha: 0.7, ox: 75, oy: 125 },
  { x: 28, y: 90, size: 0.3, delay: 1.0, duration: 2.0, alpha: 0.8, ox: 95, oy: 105 },
  { x: 72, y: 20, size: 0.4, delay: 0.2, duration: 2.4, alpha: 0.6, ox: 105, oy: 95 },
];

export default function FinalCTA() {
  const [hovered, setHovered] = useState(false);

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

          {/* Particle button wrapper */}
          <div className="inline-block relative">
            {/* Particle container */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: "200%",
                aspectRatio: "1",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                WebkitMask: "radial-gradient(white, transparent 65%)",
                zIndex: 0,
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
            >
              {PARTICLES.map((p, i) => (
                <svg
                  key={i}
                  viewBox="0 0 15 15"
                  style={{
                    width: `${p.size}rem`,
                    position: "absolute",
                    top: `${p.y}%`,
                    left: `${p.x}%`,
                    opacity: hovered ? p.alpha : 0,
                    transformOrigin: `${p.ox}% ${p.oy}%`,
                    animation: `flt-out ${p.duration}s ${-p.delay}s infinite linear`,
                    animationDirection: i % 2 === 0 ? "normal" : "reverse",
                    animationPlayState: hovered ? "running" : "paused",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <path d="M6.937 3.846L7.5 1 8.063 3.846a.361.361 0 00.27.303l2.848.672-2.17 1.837a.361.361 0 00-.112.35l.606 2.888-2.302-1.493a.36.36 0 00-.386 0L4.515 9.896l.606-2.888a.36.36 0 00-.112-.35L2.84 4.821l2.847-.672a.36.36 0 00.27-.303z" fill="hsl(0 0% 90%)" stroke="none" />
                </svg>
              ))}
            </div>

            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)",
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.4s ease",
                filter: "blur(12px)",
                transform: "scale(1.3)",
                zIndex: 0,
              }}
            />

            <a
              href={preserveUtms(TICKET_URL)}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-[#5E3BD4] bg-white rounded-full hover:bg-gray-50 transition-all duration-200 shadow-xl"
              style={{ zIndex: 1 }}
            >
              Get Tickets
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes flt-out {
          to { rotate: 360deg; }
        }
      `}</style>
    </section>
  );
}