import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const SPEAKERS = [
{
  name: "Gokul Rajaram",
  company: "Marathon",
  linkedin: "https://www.linkedin.com/in/gokulrajaram1/",
  alt: "Gokul Rajaram speaking at AI Conference NYC",
  image: "https://media.licdn.com/dms/image/v2/D5603AQFgT1s7XXvPSw/profile-displayphoto-shrink_800_800/B56ZXWI2iNGsAg-/0/1743054400521?e=1773878400&v=beta&t=juatA2lJa1bXl2vRYsxjDnIddoCyAdgWtzCQZIejtl0"
},
{
  name: "Alexa von Tobel",
  company: "Inspired Capital",
  linkedin: "https://www.linkedin.com/in/alexavontobel/",
  alt: "Alexa von Tobel speaking at AI Conference NYC",
  image: "https://cdn.prod.website-files.com/6550dbbd729040d7cd658fef/65de5562354cd0fcf1e39c29_team-alexa.avif"
},
{
  name: "Morgan Blumberg",
  company: "M13",
  linkedin: "https://www.linkedin.com/in/morgan-blumberg-6a55937a/",
  alt: "Morgan Blumberg speaking at AI Conference NYC",
  image: "https://media.licdn.com/dms/image/v2/C4E03AQFzOvjccnv7VA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1541436680437?e=1773878400&v=beta&t=ibACTQRWLPsehRGy9ioWniwr4WgUMfZBo58qwaz-aBM"
},
{
  name: "Christine Choi",
  company: "M13",
  linkedin: "https://www.linkedin.com/in/w-christine-choi-m13/",
  alt: "Christine Choi speaking at AI Conference NYC",
  image: "https://cdn.prod.website-files.com/65d4f8a1a62c18a502877cfe/66e20d43a98407aa276c8fb5_Christine02%20(1).jpg"
}];


export default function Speakers() {
  useEffect(() => {
    const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const PARTICLES = document.querySelectorAll('.particle');
    PARTICLES.forEach(P => {
      P.setAttribute('style', `
        --x: ${RANDOM(20, 80)};
        --y: ${RANDOM(20, 80)};
        --duration: ${RANDOM(6, 20)};
        --delay: ${RANDOM(1, 10)};
        --alpha: ${RANDOM(40, 90) / 100};
        --origin-x: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --origin-y: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --size: ${RANDOM(40, 90) / 100};
      `);
    });
  }, []);

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
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center group">

              <div className="w-36 h-36 mx-auto mb-5 rounded-2xl overflow-hidden bg-gradient-to-br from-[#5E3BD4]/10 to-[#E151FF]/10 shadow-lg">
                <img
                src={speaker.image}
                alt={speaker.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-4xl font-bold text-[#5E3BD4]/30">${speaker.name.charAt(0)}</span></div>`;
                }} />

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
              aria-label={`${speaker.name} LinkedIn profile`}>

                <Linkedin className="w-4 h-4" />
              </a>
            </motion.div>
          )}
        </div>

        {/* Sparkle button for more speakers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-md mx-auto flex justify-center">
          <div className="sparkle-button">
            <button className="relative px-8 py-3 text-lg font-semibold rounded-full border-0 cursor-pointer flex items-center gap-2 whitespace-nowrap"
              style={{ '--active': 0, '--cut': '0.1em' }}>
              <span className="spark"></span>
              <span className="backdrop"></span>
              <svg className="sparkle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '1.25em', height: '1.25em' }}>
                <path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text">MORE SPEAKERS COMING</span>
            </button>
            <div className="bodydrop"></div>
            <span aria-hidden="true" className="particle-pen">
              {[...Array(20)].map((_, i) => (
                <svg key={i} className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ))}
            </span>
          </div>
        </motion.div>
      </div>
    </section>);

}