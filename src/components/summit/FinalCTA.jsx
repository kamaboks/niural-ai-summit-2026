import React, { useRef } from "react";
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

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 0.1 + Math.random() * 0.3,
  alpha: 0.5 + Math.random() * 0.5,
  duration: 1 + Math.random() * 2,
  delay: Math.random() * 2,
  originX: -50 + Math.random() * 200,
  originY: -50 + Math.random() * 200,
}));

function SparkleIcon() {
  return (
    <svg className="sparkle" style={{ width: "1.25em", translate: "-25% -5%", overflow: "visible" }} viewBox="0 0 24 24" fill="none">
      <path d="M12 3C12 3 12 8 8 10C12 12 12 21 12 21" strokeWidth="0" />
      <path d="M12 3L14 10L21 12L14 14L12 21L10 14L3 12L10 10L12 3Z" strokeWidth="0" />
      <path className="sparkle-path" style={{ "--scale": 0.5, "--delay": 0.1, "--base": "40%" }}
        d="M12 6L13 10L17 11L13 12L12 16L11 12L7 11L11 10Z" />
      <path className="sparkle-path" style={{ "--scale": 1.5, "--delay": 0.2, "--base": "20%" }}
        d="M12 4L13.5 9L18 10.5L13.5 12L12 17L10.5 12L6 10.5L10.5 9Z" />
      <path className="sparkle-path" style={{ "--scale": 2.5, "--delay": 0.35, "--base": "30%" }}
        d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9Z" />
    </svg>
  );
}

export default function FinalCTA() {
  const [active, setActive] = React.useState(false);

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

          {/* Sparkle Button */}
          <div className="inline-block relative sparkle-button">
            {/* Particle pen */}
            <div
              className="particle-pen"
              style={{
                position: "absolute",
                width: "200%",
                aspectRatio: "1",
                top: "50%",
                left: "50%",
                translate: "-50% -50%",
                WebkitMask: "radial-gradient(white, transparent 65%)",
                zIndex: -1,
                opacity: active ? 1 : 0,
                transition: "opacity 0.25s",
                pointerEvents: "none",
              }}
            >
              {PARTICLES.map((p) => (
                <svg
                  key={p.id}
                  style={{
                    width: `${p.size}rem`,
                    position: "absolute",
                    top: `${p.y}%`,
                    left: `${p.x}%`,
                    opacity: p.alpha,
                    transformOrigin: `${p.originX}% ${p.originY}%`,
                    animation: active
                      ? `sparkle-float ${p.duration}s ${-p.delay}s infinite linear`
                      : "none",
                  }}
                  viewBox="0 0 5 5"
                >
                  <path d="M2 1 L2.5 2.5 L4 3 L2.5 3.5 L2 5 L1.5 3.5 L0 3 L1.5 2.5 Z" fill="white" />
                </svg>
              ))}
            </div>

            <a
              href={preserveUtms(TICKET_URL)}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
              onFocus={() => setActive(true)}
              onBlur={() => setActive(false)}
              style={{
                "--active": active ? 1 : 0,
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5em",
                padding: "0.75em 1.5em",
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                textDecoration: "none",
                background: active
                  ? "radial-gradient(40% 50% at center 100%, hsl(270 97% 72% / 1), transparent), radial-gradient(80% 100% at center 120%, hsl(260 97% 70% / 1), transparent), hsl(260 97% 56%)"
                  : "hsl(260 0% 12%)",
                boxShadow: active
                  ? "0 0 6em 3em hsl(260 97% 61% / 0.75), 0 0.05em 0 0 hsl(260 97% 80%) inset, 0 -0.05em 0 0 hsl(260 97% 60%) inset"
                  : "0 0.05em 0 0 hsl(260 0% 42%) inset, 0 -0.05em 0 0 hsl(260 0% 8%) inset",
                transition: "box-shadow 0.25s, scale 0.25s, background 0.25s",
                scale: active ? "1.05" : "1",
                overflow: "visible",
              }}
            >
              {/* Spark sweep */}
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "100px",
                  overflow: "hidden",
                  mask: "linear-gradient(white, transparent 50%)",
                  animation: active ? "sparkle-flip 3.6s infinite steps(2, end)" : "none",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    content: '""',
                    display: "block",
                    position: "absolute",
                    width: "200%",
                    aspectRatio: "1",
                    top: "0%",
                    left: "50%",
                    translate: "-50% -15%",
                    opacity: active ? 1 : 0.4,
                    background: "conic-gradient(from 0deg, transparent 0 340deg, white 360deg)",
                    transition: "opacity 0.25s",
                    animation: active ? "sparkle-rotate 1.8s linear infinite both" : "none",
                  }}
                />
              </span>

              {/* Backdrop */}
              <span
                style={{
                  position: "absolute",
                  inset: "0.1em",
                  borderRadius: "100px",
                  background: active
                    ? "radial-gradient(40% 50% at center 100%, hsl(270 97% 72% / 1), transparent), radial-gradient(80% 100% at center 120%, hsl(260 97% 70% / 1), transparent), hsl(260 97% 56%)"
                    : "hsl(260 0% 12%)",
                  transition: "background 0.25s",
                  pointerEvents: "none",
                }}
              />

              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  background: active
                    ? "linear-gradient(90deg, hsl(0 0% 165%), hsl(0 0% 126%))"
                    : "linear-gradient(90deg, hsl(0 0% 65%), hsl(0 0% 26%))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  transition: "background 0.25s",
                  letterSpacing: "0.01ch",
                }}
              >
                Get Tickets
              </span>
              <ArrowRight
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "1em",
                  height: "1em",
                  color: active ? "white" : "hsl(0 0% 65%)",
                  transition: "color 0.25s",
                }}
              />
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes sparkle-flip {
          to { rotate: 360deg; }
        }
        @keyframes sparkle-rotate {
          to { transform: rotate(90deg); }
        }
        @keyframes sparkle-float {
          to { rotate: 360deg; }
        }
      `}</style>
    </section>
  );
}