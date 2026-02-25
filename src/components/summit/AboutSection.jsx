import React from "react";
import { motion } from "framer-motion";
import { Mic, Users, Play, Network } from "lucide-react";

const FEATURES = [
  {
    icon: Mic,
    title: "Inspiring Keynotes",
    description: "Hear from visionary leaders shaping the future of AI in HR and enterprise operations.",
  },
  {
    icon: Users,
    title: "Expert Panels",
    description: "Engage in thought-provoking discussions with industry pioneers and practitioners.",
  },
  {
    icon: Play,
    title: "Live Demos",
    description: "Experience cutting-edge AI tools and platforms in action through interactive demos.",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Connect with peers, partners, and potential collaborators in the AI ecosystem.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-[#714DFF] uppercase tracking-widest mb-3">About the Summit</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a0e3d] mb-6 tracking-tight">
            Where AI Meets the Future of Work
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-16">
            Join hundreds of HR leaders, operations executives, and AI innovators for a full day of insights, demos, and connections that will transform how you think about workforce management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#faf8ff] rounded-2xl p-6 text-left border border-[#714DFF]/10"
            >
              <div className="w-10 h-10 rounded-xl bg-[#714DFF]/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-[#714DFF]" />
              </div>
              <h3 className="font-semibold text-[#1a0e3d] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}