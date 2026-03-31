import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const SPEAKERS = [
{
  name: "Joshua Waldron",
  title: "VP of Strategic Partnerships",
  company: "Scale AI",
  description: "Leading strategic partnerships at Scale AI, the data infrastructure company powering AI development for leading enterprises and government agencies.",
  companyUrl: "https://scale.com/",
  linkedin: "",
  alt: "Joshua Waldron speaking at AI Conference NYC",
  image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/0234fdde9_JoshuaWaldron_21049.png"
},
{
  name: "Gokul Rajaram",
  title: "Founding Partner",
  company: "Marathon",
  description: "Founding Partner at Marathon. Board member at Coinbase & Pinterest. Former product exec at Google, Facebook, and Square.",
  companyUrl: "https://marathonmp.com/",
  linkedin: "https://www.linkedin.com/in/gokulrajaram1/",
  alt: "Gokul Rajaram speaking at AI Conference NYC",
  image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/e042563d1_Gokul.png"
},
{
  name: "Alexa von Tobel",
  title: "Founder & Managing Partner",
  company: "Inspired Capital",
  description: "Founder & Managing Partner at Inspired Capital. Founded LearnVest, acquired by Northwestern Mutual. Named to Fortune's 40 Under 40 and Forbes' Most Powerful Women.",
  companyUrl: "https://www.inspiredcapital.com/",
  linkedin: "https://www.linkedin.com/in/alexavontobel/",
  alt: "Alexa von Tobel speaking at AI Conference NYC",
  image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/959653110_alexas.png"
},
{
  name: "Christine Choi",
  title: "Partner",
  company: "M13",
  description: "Partner at M13, investing in consumer and enterprise technology. Previously at Goldman Sachs and co-founder of tech-enabled ventures.",
  companyUrl: "https://www.m13.co/",
  linkedin: "https://www.linkedin.com/in/w-christine-choi-m13/",
  alt: "Christine Choi speaking at AI Conference NYC",
  image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/01600afd1_Chrstine.png"
},
{
  name: "Morgan Blumberg",
  title: "Partner",
  company: "M13",
  description: "Partner at M13 focused on founder-market fit and go-to-market strategy. Operator-turned-investor with experience scaling high-growth startups.",
  companyUrl: "https://www.m13.co/",
  linkedin: "https://www.linkedin.com/in/morgan-blumberg-6a55937a/",
  alt: "Morgan Blumberg speaking at AI Conference NYC",
  image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/a61f9abfd_MorganBlumberg.png"
},
{
  name: "Matt Hoffman",
  title: "Partner",
  image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/855a06a22_Matthoffman.png"
},
{
  name: "Lowell Putnam",
  title: "Co-Founder & CEO",
  image: "https://media.base44.com/images/public/699dd0c3a7954b36d829e748/a5928cf85_Lowell.png"
}];


export default function Speakers() {
  return (
    <section id="speakers" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Featured Speakers
          </h2>
          <p className="text-gray-500 text-lg">
            Industry leaders sharing real implementation insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {SPEAKERS.map((speaker, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center group">
            

              <div className="w-36 h-36 mx-auto mb-5 rounded-2xl overflow-hidden bg-gradient-to-br from-[#5E3BD4]/10 to-[#E151FF]/10 shadow-xl">
                <img
                src={speaker.image}
                alt={speaker.alt}
                className={speaker.fitContain ? "w-full h-full object-contain" : "w-full h-full object-cover"}
                style={speaker.objectPosition ? { objectPosition: speaker.objectPosition } : {}}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-4xl font-bold text-[#5E3BD4]/30">${speaker.name.charAt(0)}</span></div>`;
                }} />

              </div>
              <h3 className="text-gray-900 mb-5 text-lg font-semibold">
                {speaker.name}
              </h3>
              <div className="my-1 flex flex-col items-center gap-3">
                <div className="text-center">
                  <p className="text-gray-700 font-medium text-sm">{speaker.title}</p>
                  <p className="text-gray-400 text-sm">{speaker.company}</p>
                  <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    {speaker.description && <p className="text-gray-400 text-xs mt-2 leading-relaxed max-w-[200px]">{speaker.description}</p>}
                  </div>
                </div>
                <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-400 hover:text-[#714DFF] hover:bg-[#714DFF]/5 transition-colors duration-200"
                aria-label={`${speaker.name} LinkedIn profile`}>
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </div>

        {/* Stay tuned card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-md mx-auto">
          <div className="bg-gradient-to-r from-[#714DFF] to-[#E151FF] p-8 rounded-[64px] border-0 backdrop-blur-sm">
            <p className="text-slate-50 text-xl font-semibold text-center uppercase tracking-wide">MORE SPEAKERS COMING SOON</p>
            <p className="text-slate-50 mt-1 text-sm font-light text-center">Stay tuned for additional speaker announcements</p>
          </div>
        </motion.div>
      </div>
    </section>);

}