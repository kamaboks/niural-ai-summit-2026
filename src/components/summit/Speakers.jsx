import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const SPEAKERS = [
  {
    name: "Joshua Waldron",
    title: "CAO and SVP, Head of Finance",
    subtitle: "Board Member of Careem",
    company: "Scale AI",
    description: "CAO and SVP, Head of Finance at Scale AI. Board Member. Previously at Uber and Thumbtack. Leads finance, accounting, and business operations for one of the world's leading AI companies.",
    linkedin: "https://www.linkedin.com/in/joshua-waldron-5151bb/",
    alt: "Joshua Waldron speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/0234fdde9_JoshuaWaldron_21049.png"
  },
  {
    name: "Gokul Rajaram",
    title: "Founding Partner",
    subtitle: "Board Member of Coinbase,\nPinterest & The Trade Desk",
    company: "Marathon",
    description: "Founding Partner at Marathon. Board member at Coinbase & Pinterest. Ex product exec at Google, Facebook, and Square.",
    linkedin: "https://www.linkedin.com/in/gokulrajaram1/",
    alt: "Gokul Rajaram speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/e042563d1_Gokul.png"
  },
  {
    name: "Sruthi Lanka",
    title: "CFO",
    subtitle: "Ex VP Strategic Finance, MoneyLion",
    company: "Public",
    description: "CFO at Public, the multi-asset investing platform. Ex VP of Strategic Finance at MoneyLion (first finance hire post-Series A). Previously M&A at RBC and Goldman Sachs. Board member of Women Creating Change.",
    linkedin: "https://www.linkedin.com/in/sruthilanka/",
    alt: "Sruthi Lanka CFO at Public",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/c221388f7_SruthiLankaCFO.jpg"
  },
  {
    name: "Lowell Putnam",
    title: "Co-Founder & CEO",
    subtitle: "Founder of Quovo, acquired by Plaid",
    company: "Supper",
    description: "Co-Founder & CEO of Supper, an AI-native data platform. Previously founded Quovo, acquired by Plaid.",
    linkedin: "https://www.linkedin.com/in/lowell-putnam/",
    alt: "Lowell Putnam speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/a5928cf85_Lowell.png"
  },
  {
    name: "Alexa von Tobel",
    title: "Founder & Managing Partner",
    subtitle: "Ex CIO - Northwestern Mutual",
    company: "Inspired Capital",
    description: "Founder & Managing Partner at Inspired Capital. Founded LearnVest, acquired by Northwestern Mutual. Ex CIO at Northwestern Mutual. Named to Fortune's 40 Under 40 and Forbes' Most Powerful Women.",
    linkedin: "https://www.linkedin.com/in/alexavontobel/",
    alt: "Alexa von Tobel speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/959653110_alexas.png"
  },
  {
    name: "Morgan Blumberg",
    title: "Partner",
    subtitle: "Ex Investment Banking, Morgan Stanley",
    company: "M13",
    description: "Partner at M13 known for a contrarian thesis on agentic workflow automation. Ex Principal at M13 and investment banking at Morgan Stanley.",
    linkedin: "https://www.linkedin.com/in/morgan-blumberg-6a55937a/",
    alt: "Morgan Blumberg speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/a61f9abfd_MorganBlumberg.png"
  },
  {
    name: "Matt Hoffman",
    title: "Head of Talent",
    subtitle: "Ex VP of People, DigitalOcean",
    company: "M13",
    description: "Partner & Head of Talent at M13. Ex VP of People at DigitalOcean. Coaches founders on hiring, culture, and people operations.",
    linkedin: "https://www.linkedin.com/in/mphoffman/",
    alt: "Matt Hoffman speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/855a06a22_Matthoffman.png"
  },
  {
    name: "Christine Choi",
    title: "Head of Brand & Communications",
    subtitle: "Ex Head of Communications, Virgin Galactic",
    company: "M13",
    description: "Partner & Head of Brand/Communications at M13. Ex Head of Communications at Virgin Galactic and Virgin Orbit.",
    linkedin: "https://www.linkedin.com/in/w-christine-choi-m13/",
    alt: "Christine Choi speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/01600afd1_Chrstine.png"
  }
];

function SpeakerCard({ speaker, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center group"
    >
      <div className="w-52 h-52 mx-auto mb-5 rounded-2xl overflow-hidden bg-gradient-to-br from-[#5E3BD4]/10 to-[#E151FF]/10 shadow-xl relative">
        <img
          src={speaker.image}
          alt={speaker.alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-[#231650]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <p className="text-white text-xs text-center leading-relaxed">{speaker.description}</p>
        </div>
      </div>

      <h3 className="text-gray-900 mb-3 text-lg font-semibold">{speaker.name}</h3>

      <div className="flex flex-col items-center gap-3">
        <div className="text-center h-[72px] flex flex-col justify-start">
          <p className="text-gray-700 font-medium text-sm">{speaker.title}</p>
          <p className="text-gray-400 text-sm">{speaker.company}</p>
          {speaker.subtitle && (
            <p className="text-gray-400 text-xs mt-1 italic leading-tight whitespace-pre-line">{speaker.subtitle}</p>
          )}
        </div>

        <a
          href={speaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-400 hover:text-[#714DFF] hover:bg-[#714DFF]/5 transition-colors duration-200"
          aria-label={speaker.name + " LinkedIn profile"}
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Featured Speakers
          </h2>
          <p className="text-gray-500 text-lg">
            Industry leaders sharing real implementation insights
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {SPEAKERS.map((speaker, i) => (
            <SpeakerCard key={i} speaker={speaker} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="bg-gradient-to-r from-[#714DFF] to-[#E151FF] p-8 rounded-[64px]">
            <p className="text-slate-50 text-xl font-semibold text-center uppercase tracking-wide">MORE SPEAKERS COMING SOON</p>
            <p className="text-slate-50 mt-1 text-sm font-light text-center">Stay tuned for additional speaker announcements</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}