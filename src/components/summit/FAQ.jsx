import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const DEFAULT_FAQS = [
  {
    category: "GENERAL",
    question: "How do I attend the Niural AI Summit?",
    answer:
      "The Niural AI Summit takes place in person in Midtown Manhattan on Thursday, May 28, 2026. All registrations require approval to preserve a curated, executive-level experience.",
  },
  {
    category: "GENERAL",
    question: "Who should attend this AI conference in NYC?",
    answer: `The Niural AI Summit is designed for senior operators actively building and scaling modern companies.\n\nThis summit is ideal for:\n• Founders & Co-Founders (Series A+)\n• CFOs & Heads of Finance\n• COOs & Operations Leaders\n• Heads of HR & People Operations\n• Controllers & Finance Directors\n• Venture Investors & Infrastructure Leaders\n• Technology executives implementing AI across business systems\n\nIf you're responsible for how your company runs, from payroll and treasury to compliance, automation, and workforce infrastructure, this room is built for you.`,
  },
  {
    category: "GENERAL",
    question: "How much does it cost to attend?",
    answer:
      "Tickets are released in phases and increase as capacity fills:\n\n• Early Bird — $199\n• Priority Access — $299\n• General Admission — $399\n• VIP Access — $599\n• Executive Team Pass — Save 40% when registering 3+ executives from the same company\n\nAll registrations are subject to approval.",
  },
  {
    category: "GENERAL",
    question: "What topics will be covered at the summit?",
    answer:
      "Topics include modernizing the finance and people operating engine, redesigning payroll and compliance infrastructure, rethinking workforce strategy, and understanding how investors view next-generation companies. The summit centers on real implementation stories and the leadership decisions shaping the future of operations.",
  },
  {
    category: "GENERAL",
    question: "Is this event part of NYC Tech Week?",
    answer:
      "Niural AI Summit is an AI gathering that takes place just before NYC Tech Week, bringing leaders together ahead of the broader week of programming.",
  },
];

const HIDDEN_FAQS = [
  {
    category: "GENERAL",
    question: "Where can I find updates about the summit?",
    answer:
      'The full agenda, speaker announcements, and event details will be released in phases. Be the first to know, join our mailing list to receive updates.',
    link: { text: "Join mailing list", url: "https://share.hsforms.com/1GHpNjc5RTCikP6O4gElZFge3b02" },
  },
  {
    category: "GENERAL",
    question: "Will sessions be recorded?",
    answer: "Select sessions will be recorded. Additional details will be announced closer to the summit.",
  },
  {
    category: "GENERAL",
    question: "Why is registration approval required?",
    answer:
      "To preserve meaningful conversations and an operator-first environment, attendance is curated. We prioritize senior decision-makers actively implementing AI across finance and people operations.",
  },
  {
    category: "PRICING",
    question: "What's included with my ticket?",
    answer:
      "✓ Headline keynote\n✓ Executive-level panels\n✓ AI product showcases\n✓ Networking with 200+ senior leaders\n✓ Lunch, coffee, and closing happy hour\n\nVIP includes priority seating, parking, and a private dinner invitation.",
  },
  {
    category: "PRICING",
    question: "How does registration approval and payment work?",
    answer:
      "Niural AI Summit is a curated executive event. All registrations are reviewed to ensure a high-signal audience of founders, CFOs, HR, and operations leaders.\n\nYour card will be authorized at checkout, but payment will only be captured if your registration is approved. If your registration is not approved, the authorization hold will be automatically released by your bank. You will not be charged.\n\nApproved attendees will receive confirmation via email.",
  },
  {
    category: "PRICING",
    question: "Can I transfer my ticket?",
    answer: "Tickets are non-transferable to maintain a curated attendee list.",
  },
  {
    category: "PRICING",
    question: "Can I purchase multiple tickets?",
    answer:
      "Yes! Teams are encouraged to attend together. Executive Team Pass offers 40% savings for 3+ executives. Email events@niural.com for more information.",
  },
  {
    category: "PRICING",
    question: "I can no longer attend. Can I get a refund?",
    answer: "Tickets are non-refundable. Please review the Event Terms & Conditions.",
  },
  {
    category: "ATTENDANCE & LOGISTICS",
    question: "Where do I check in?",
    answer:
      "Registration and badge pickup will be located at the venue entrance. Details shared with approved attendees.",
  },
  {
    category: "ATTENDANCE & LOGISTICS",
    question: "When will venue details be shared?",
    answer: "Approved attendees receive full details prior to the summit.",
  },
  {
    category: "ATTENDANCE & LOGISTICS",
    question: "Is the venue accessible?",
    answer: "Yes. Accessible seating and restrooms are available.",
  },
  {
    category: "ATTENDANCE & LOGISTICS",
    question: "Is there a dress code?",
    answer: "Smart or business casual.",
  },
  {
    category: "EXPERIENCE",
    question: "Will meals be provided?",
    answer: "Yes! There will be lunch, coffee, and a closing happy hour.",
  },
  {
    category: "EXPERIENCE",
    question: "Will there be photography or media coverage?",
    answer: "Yes! And by attending, you consent to event photography and filming.",
  },
  {
    category: "EXPERIENCE",
    question: "Is there a waitlist if the event sells out?",
    answer: "Yes! You may join the waitlist if capacity is reached.",
  },
  {
    category: "TRAVEL & ACCOMMODATIONS",
    question: "I'm traveling to NYC for Tech Week. Do you offer hotel recommendations or a booking code?",
    answer:
      "Yes! If you are planning to travel to New York City for NYC Tech Week and the Niural AI Summit, we have secured preferred hotel partnerships and booking codes for our attendees.\n\nTo receive recommended hotels and access to our discounted booking code, please email events@niural.com. Our team will share curated accommodations located in Manhattan.\n\nAvailability is limited, and codes are provided on a first-come basis.",
  },
  {
    category: "SPONSORSHIPS",
    question: "I'm interested in sponsoring or partnering. Who should I contact?",
    answer:
      "For sponsorship inquiries, contact events@niural.com. Opportunities are limited and curated.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-gray-900 pr-4 group-hover:text-[#714DFF] transition-colors">
          {faq.question}
        </span>
        <span className="flex-shrink-0 mt-0.5">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#714DFF]" />
          ) : (
            <Plus className="w-5 h-5 text-gray-400 group-hover:text-[#714DFF] transition-colors" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-8">
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {faq.answer}
              </p>
              {faq.link && (
                <a
                  href={faq.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-medium text-[#714DFF] hover:underline"
                >
                  {faq.link.text} →
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const allFaqs = [...DEFAULT_FAQS, ...HIDDEN_FAQS];
  const visibleFaqs = showAll ? allFaqs : DEFAULT_FAQS;

  // Group by category
  const grouped = {};
  visibleFaqs.forEach((faq, idx) => {
    const globalIdx = allFaqs.findIndex(
      (f) => f.question === faq.question && f.category === faq.category
    );
    if (!grouped[faq.category]) grouped[faq.category] = [];
    grouped[faq.category].push({ ...faq, globalIdx });
  });

  return (
    <section id="faq" className="py-24 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            FAQs
          </h2>
        </motion.div>

        {/* SEO: Render ALL FAQs in DOM, hide with CSS */}
        <div className="sr-only" aria-hidden="false">
          {HIDDEN_FAQS.map((faq, i) => (
            <div key={i}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="space-y-10">
          {Object.entries(grouped).map(([category, faqs]) => (
            <div key={category}>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                {category}
              </p>
              <div>
                {faqs.map((faq) => (
                  <FAQItem
                    key={faq.globalIdx}
                    faq={faq}
                    isOpen={openIndex === faq.globalIdx}
                    onToggle={() =>
                      setOpenIndex(openIndex === faq.globalIdx ? null : faq.globalIdx)
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              setShowAll(!showAll);
              setOpenIndex(null);
            }}
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#714DFF] border border-[#714DFF]/20 rounded-full hover:border-[#714DFF]/40 hover:bg-[#714DFF]/5 transition-all duration-200"
          >
            {showAll ? "Show Fewer Questions" : "View All Questions"}
          </button>
        </div>
      </div>
    </section>
  );
}