import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Presentation, Target } from "lucide-react";

const REASONS = [
  {
    icon: Lightbulb,
    title: "Tactical Operator-Led Insights",
    description: "Not surface-level theory. Real implementation playbooks from leaders who've deployed AI across finance, HR, and operations.",
  },
  {
    icon: Users,
    title: "Curated Access to 200+ Leaders",
    description: "Executive decision-makers — founders, CFOs, HR leaders, and investors — shaping the next generation of modern companies.",
  },
  {
    icon: Presentation,
    title: "Live Demos & Product Showcase",
    description: "Cutting-edge AI tools transforming payroll, compliance, treasury, and workforce infrastructure. No fluff — just practical solutions.",
  },
  {
    icon: Target,
    title: "Decision-Maker Environment",
    description: "Build relationships and pipeline before the broader NYC Tech Week noise begins. A focused, high-signal room.",
  },
];

export default function WhyAttend() {
  return (
    <section id="why-attend" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Why Attend the Niural AI Summit
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#5E3BD4]/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5E3BD4]/5 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#5E3BD4]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}