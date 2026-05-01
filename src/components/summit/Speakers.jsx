import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const SPEAKERS = [
  // Row 1
  {
    name: "Nami Baral",
    title: "Founder & CEO",
    subtitle: "",
    company: "Niural",
    description: "Founder & CEO of Niural, an agentic AI platform for global payroll, compliance, and workforce management. Serial entrepreneur with two successful exits. Former Head of Product Partnerships at Twitter. Harvard alum and prolific angel investor.",
    linkedin: "https://www.linkedin.com/in/namibaral/",
    alt: "Nami Baral CEO Niural",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/namibaral.png"
  },
  {
    name: "Joshua Waldron",
    title: "CAO and SVP, Head of Finance",
    subtitle: "Board Member of Careem",
    company: "Scale AI",
    description: "CAO and SVP, Head of Finance at Scale AI. Board Member. Previously at Uber and Thumbtack.",
    linkedin: "https://www.linkedin.com/in/joshua-waldron-5151bb/",
    alt: "Joshua Waldron speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/0234fdde9_JoshuaWaldron_21049.png"
  },
  {
    name: "Gokul Rajaram",
    title: "Founding Partner",
    subtitle: "Board Member of Coinbase, Pinterest & The Trade Desk",
    company: "Marathon",
    description: "Founding Partner at Marathon. Board member at Coinbase & Pinterest. Ex product exec at Google, Facebook, and Square.",
    linkedin: "https://www.linkedin.com/in/gokulrajaram1/",
    alt: "Gokul Rajaram speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/e042563d1_Gokul.png"
  },
  {
    name: "Nabin Banskota",
    title: "Founder & COO",
    subtitle: "",
    company: "Niural",
    description: "Founder & COO of Niural, building AI-native infrastructure for global payroll and workforce compliance.",
    linkedin: "https://www.linkedin.com/in/nabinbanskota/",
    alt: "Nabin Baral CTO Niural",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/nabinbaral.png"
  },
  // Row 2
  {
    name: "Sruthi Lanka",
    title: "CFO",
    subtitle: "Ex VP Strategic Finance, MoneyLion",
    company: "Public",
    description: "CFO at Public, the multi-asset investing platform. Ex VP of Strategic Finance at MoneyLion. Previously M&A at RBC and Goldman Sachs.",
    linkedin: "https://www.linkedin.com/in/sruthilanka/",
    alt: "Sruthi Lanka CFO at Public",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/6964c4b16_sruthi.png"
  },
  {
    name: "Ramnandan Krishnamurthy",
    title: "CEO",
    subtitle: "",
    company: "Maximore",
    description: "CEO of Maximore, an AI platform for corporate finance transforming how companies manage financial operations.",
    linkedin: "https://www.linkedin.com/in/ramnandan/",
    alt: "Ramnandan Krishnamurthy speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/ram.png"
  },
  {
    name: "Jason Bond",
    title: "CFO and SVP of Strategy",
    subtitle: "",
    company: "Sevaro",
    description: "CFO and SVP of Strategy at Sevaro. Previously Chief Corporate Development Officer at CareAbout Health and VP of Corporate Development at CityMD.",
    linkedin: "https://www.linkedin.com/in/jjbond/",
    alt: "Jason Bond speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/jason.png"
  },
  {
    name: "Peter Phelan",
    title: "Head of Insights",
    subtitle: "",
    company: "ValuesCulture",
    description: "Head of Insights at ValuesCulture, helping organizations build high-performing cultures through values-driven leadership.",
    linkedin: "https://www.linkedin.com/in/peterphelanhr/",
    alt: "Peter Phelan speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/peter.png"
  },
  // Row 3
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
    name: "Ciara O'Sullivan",
    title: "Chief People Officer",
    subtitle: "",
    company: "Bilt",
    description: "Chief People Officer at Bilt, leading people strategy at the rewards platform transforming how people pay rent.",
    linkedin: "https://www.linkedin.com/in/caosullivan/",
    alt: "Ciara O'Sullivan speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/ciara.png"
  },
  {
    name: "Matt Hoffman",
    title: "Partner & Head of Talent",
    subtitle: "Ex VP of People, DigitalOcean",
    company: "M13",
    description: "Partner & Head of Talent at M13. Ex VP of People at DigitalOcean. Coaches founders on hiring, culture, and people operations.",
    linkedin: "https://www.linkedin.com/in/mphoffman/",
    alt: "Matt Hoffman speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/855a06a22_Matthoffman.png"
  },
  {
    name: "Robert McDermott",
    title: "CEO",
    subtitle: "",
    company: "401GO",
    description: "CEO of 401GO, making retirement benefits accessible and simple for small businesses across America.",
    linkedin: "https://www.linkedin.com/in/rob-mcdermott/",
    alt: "Robert McDermott speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/robert.png"
  },
  // Row 4
  {
    name: "Chase Packard",
    title: "Co-Founder & CEO",
    subtitle: "",
    company: "Marathon",
    description: "Co-Founder & CEO of Marathon, building the next generation of financial infrastructure for ambitious founders.",
    linkedin: "https://www.linkedin.com/in/chasepackard/",
    alt: "Chase Packard speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/chase.png"
  },
  {
    name: "Alexa von Tobel",
    title: "Founder & Managing Partner",
    subtitle: "Ex CIO - Northwestern Mutual",
    company: "Inspired Capital",
    description: "Founder & Managing Partner at Inspired Capital. Founded LearnVest, acquired by Northwestern Mutual. Named to Fortune's 40 Under 40.",
    linkedin: "https://www.linkedin.com/in/alexavontobel/",
    alt: "Alexa von Tobel speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/959653110_alexas.png"
  },
  {
    name: "Parth Shah",
    title: "Chief of Staff",
    subtitle: "",
    company: "Polimorphic",
    description: "Chief of Staff at Polimorphic, driving strategy and operations at the cutting-edge AI product studio.",
    linkedin: "https://www.linkedin.com/in/parthhemalshah/",
    alt: "Parth Shah speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/parth.png"
  },
  {
    name: "Katrin Kaurov",
    title: "VP of People",
    subtitle: "",
    company: "Frich Money",
    description: "VP of People at Frich Money, building people-first culture at the social finance platform helping Gen Z manage money.",
    linkedin: "https://www.linkedin.com/in/katrin-kaurov-160972194/",
    alt: "Katrin Kaurov speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/katrin.png"
  },
  // Row 5
  {
    name: "Christine Choi",
    title: "Partner, Head of Brand & Comms",
    subtitle: "Ex Head of Communications, Virgin Galactic",
    company: "M13",
    description: "Partner & Head of Brand/Communications at M13. Ex Head of Communications at Virgin Galactic and Virgin Orbit.",
    linkedin: "https://www.linkedin.com/in/w-christine-choi-m13/",
    alt: "Christine Choi speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/01600afd1_Chrstine.png"
  },
  {
    name: "Dan Shipper",
    title: "Partner",
    subtitle: "",
    company: "Every",
    description: "Co-founder of Every, the media company at the frontier of AI and knowledge work, writing about how AI transforms how we think and create.",
    linkedin: "https://www.linkedin.com/in/danshipper/",
    alt: "Dan Shipper speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/dan.png"
  },
  {
    name: "Melia Russell",
    title: "Senior Reporter",
    subtitle: "",
    company: "Business Insider",
    description: "Senior Reporter at Business Insider covering startups, venture capital, and the future of work.",
    linkedin: "https://www.linkedin.com/in/meliarussell/",
    alt: "Melia Russell speaking at AI Conference NYC",
    image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/melia.png"
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

        <div className="flex flex-col items-center gap-8 mb-10">
          {/* Row 1: 4 speakers - Nami, Joshua, Gokul, Nabin */}
          <div className="grid grid-cols-4 gap-8">
            {SPEAKERS.slice(0, 4).map((speaker, i) => (
              <SpeakerCard key={i} speaker={speaker} index={i} />
            ))}
          </div>
          {/* Row 2: 4 speakers */}
          <div className="grid grid-cols-4 gap-8">
            {SPEAKERS.slice(4, 8).map((speaker, i) => (
              <SpeakerCard key={i + 4} speaker={speaker} index={i + 4} />
            ))}
          </div>
          {/* Row 3: 4 speakers */}
          <div className="grid grid-cols-4 gap-8">
            {SPEAKERS.slice(8, 12).map((speaker, i) => (
              <SpeakerCard key={i + 8} speaker={speaker} index={i + 8} />
            ))}
          </div>
          {/* Row 4: 4 speakers */}
          <div className="grid grid-cols-4 gap-8">
            {SPEAKERS.slice(12, 16).map((speaker, i) => (
              <SpeakerCard key={i + 12} speaker={speaker} index={i + 12} />
            ))}
          </div>
          {/* Row 5: remaining */}
          {SPEAKERS.slice(16).length > 0 && (
            <div className="grid grid-cols-4 gap-8">
              {SPEAKERS.slice(16).map((speaker, i) => (
                <SpeakerCard key={i + 16} speaker={speaker} index={i + 16} />
              ))}
            </div>
          )}
        </div>


      </div>
    </section>
  );
}