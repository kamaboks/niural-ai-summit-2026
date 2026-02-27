import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ATTENDEES = [
"Founders & Co-Founders at Series A+ companies",
"CFOs & Heads of Finance",
"COOs & Operations Leaders",
"Heads of HR & People Operations",
"Controllers & Finance Directors",
"Venture Investors & Infrastructure Leaders",
"Technology executives implementing AI across business systems"];


export default function WhoShouldAttend() {
  return (
    <section id="who-should-attend" className="py-20 sm:py-28 bg-[#f9f8ff]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>

          <p className="text-xs font-bold tracking-widest text-[#714DFF] uppercase mb-3">
            Who Should Attend
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a0e3d] mb-6 tracking-tight">
            Built for Senior Operators
          </h2>
          <p className="text-base text-gray-500 leading-relaxed mb-10">
            The Niural AI Summit is designed for senior operators actively building and scaling modern companies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {ATTENDEES.map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm">

                <CheckCircle className="w-5 h-5 text-[#714DFF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{item}</span>
              </motion.div>
            )}
          </div>

          <p className="text-base text-gray-500 leading-relaxed">If you're responsible for how your company runs, from payroll and treasury to compliance, automation, and workforce infrastructure, this room is built for you.

          </p>
        </motion.div>
      </div>
    </section>);

}