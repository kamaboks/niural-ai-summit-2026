import React from "react";
import { motion } from "framer-motion";

const SPONSORS = [
  { name: "PwC", tier: "Presenting" },
  { name: "Basis Capital", tier: "Presenting" },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">Our Sponsors</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Made possible by our partners
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {SPONSORS.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-56 h-24 rounded-2xl border border-gray-200 bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="text-xl font-bold text-gray-700">{sponsor.name}</span>
              </div>
              <span className="text-xs text-gray-400 uppercase tracking-wider">{sponsor.tier} Sponsor</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-gray-400 mt-10"
        >
          Interested in sponsoring?{" "}
          <a href="mailto:info@niural.com" className="text-[#714DFF] hover:underline font-medium">
            Get in touch
          </a>
        </motion.p>
      </div>
    </section>
  );
}