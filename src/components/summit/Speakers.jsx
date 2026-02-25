import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const SPEAKERS = [
  {
    name: "Gokul Rajaram",
    company: "Marathon",
    linkedin: "https://www.linkedin.com/in/gokulrajaram1/",
    alt: "Gokul Rajaram speaking at AI Conference NYC",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFgT1s7XXvPSw/profile-displayphoto-shrink_800_800/B56ZXWI2iNGsAg-/0/1743054400521?e=1773878400&v=beta&t=juatA2lJa1bXl2vRYsxjDnIddoCyAdgWtzCQZIejtl0",
  },
  {
    name: "Alexa von Tobel",
    company: "Inspired Capital",
    linkedin: "https://www.linkedin.com/in/alexavontobel/",
    alt: "Alexa von Tobel speaking at AI Conference NYC",
    image: "https://cdn.prod.website-files.com/6550dbbd729040d7cd658fef/65de5562354cd0fcf1e39c29_team-alexa.avif",
  },
  {
    name: "Morgan Blumberg",
    company: "M13",
    linkedin: "https://www.linkedin.com/in/morgan-blumberg-6a55937a/",
    alt: "Morgan Blumberg speaking at AI Conference NYC",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQFzOvjccnv7VA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1541436680437?e=1773273600&v=beta&t=o74q2UlwmqHjbsbP_3W3S_gBDGtQXIWmNCSDoyFRAE4",
  },
  {
    name: "Christine Choi",
    company: "M13",
    linkedin: "https://www.linkedin.com/in/w-christine-choi-m13/",
    alt: "Christine Choi speaking at AI Conference NYC",
    image: "https://media.licdn.com/dms/image/v2/D5603AQF-Cq4KPjGGHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706709053396?e=1773273600&v=beta&t=pR-HmYuPCEhJ0GrONe_OuxcTMboDEi4fIzyXsdH4EI8",
  },
];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {SPEAKERS.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-36 h-36 mx-auto mb-5 rounded-2xl overflow-hidden bg-gradient-to-br from-[#5E3BD4]/10 to-[#E151FF]/10">
                <img
                  src={speaker.image}
                  alt={speaker.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-4xl font-bold text-[#5E3BD4]/30">${speaker.name.charAt(0)}</span></div>`;
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {speaker.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{speaker.company}</p>
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-400 hover:text-[#714DFF] hover:bg-[#714DFF]/5 transition-colors duration-200"
                aria-label={`${speaker.name} LinkedIn profile`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Stay tuned */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-400 text-sm font-medium tracking-wide uppercase"
        >
          Stay tuned for more speaker reveals
        </motion.p>
      </div>
    </section>
  );
}