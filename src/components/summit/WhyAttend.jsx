import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Presentation, Target } from "lucide-react";

const REASONS = [
{
  icon: Lightbulb,
  title: "Tactical Operator-Led Insights",
  description: "Not surface-level theory. Real implementation playbooks from leaders who've deployed AI across finance, HR, and operations."
},
{
  icon: Users,
  title: "Curated Access to 200+ Leaders",
  description: "Executive decision-makers: founders, CFOs, HR leaders, and investors shaping the next generation of modern companies."
},
{
  icon: Presentation,
  title: "Live Demos & Product Showcase",
  description: "Cutting-edge AI tools transforming payroll, compliance, treasury, and workforce infrastructure. No fluff, just practical solutions."
},
{
  icon: Target,
  title: "Decision-Maker Environment",
  description: "Build relationships and pipeline before the broader NYC Tech Week noise begins. A focused, high-signal room."
}];


export default function WhyAttend() {
  return (
    <section id="why-attend" className="py-20 sm:py-28 relative bg-cover bg-center bg-fixed overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699dd0c3a7954b36d829e748/fd9203df8_1mb.jpg')" }}>
      {/* Dark overlay */}
      <div className="bg-black/60 opacity-100 absolute inset-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
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
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-[#5E3BD4]/40 transition-colors duration-300">

                <div className="w-12 h-12 rounded-xl bg-[#714DFF]/5 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#714DFF]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}