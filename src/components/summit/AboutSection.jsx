import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>

          <p className="text-xs font-bold tracking-widest text-[#714DFF] uppercase mb-3">
            About the Summit
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a0e3d] mb-8 tracking-tight">
            Redefining How Modern Companies Run
          </h2>

          <div className="space-y-5 text-base text-gray-500 leading-relaxed">
            <p>Niural AI Summit is an AI conference in NYC designed for leaders building in the age of automation.

            </p>
            <p>AI is not just automating tasks. It is reshaping leadership across finance, HR, and operations. The leaders driving this shift are not asking if they will adopt AI. They decide how it changes their org structure, risk posture, talent model, and long-term strategy.

            </p>
            <p>Join 200+ curated founders and executive operators at Niural AI Summit; a high-signal gathering where leaders unpack their journeys, share inflection moments, and discuss what the AI-native organization truly looks like.

            </p>
            <p className="font-bold text-gray-800">
              Before Tech Week begins, the real conversation starts here.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}