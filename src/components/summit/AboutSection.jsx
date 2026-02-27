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
          <h2 className="text-[#1a0e3d] mb-3 tracking-tight text-3xl sm:text-4xl">
            <span className="font-bold">Niural AI Summit</span>
            
          </h2>

          <div className="space-y-5 text-base text-gray-500 leading-relaxed">
            <p> is where the architects of the AI-native era convene.

            </p>
            <p>At Niural AI Summit, 200+ curated founders and executive operators gather in New York City to confront that question head-on. This is not a theoretical AI conference. It is a working session for leaders redesigning their companies in real time  sharing inflection points, structural rewrites, failures, breakthroughs, and the blueprint for what an AI-native organization truly looks like.


            </p>
            <p>If you’re building for the next decade not the last one this is where you need to be.

            </p>
            <p className="text-gray-800 text-xl font-bold">Redefining How Modern Companies Run

            </p>
          </div>
        </motion.div>
      </div>
    </section>);
}