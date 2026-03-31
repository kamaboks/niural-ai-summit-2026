import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const TICKET_URL = "https://luma.com/mggz3md1?hide_badge=true";

function preserveUtms(baseUrl) {
  const currentParams = new URLSearchParams(window.location.search);
  const url = new URL(baseUrl);
  currentParams.forEach((value, key) => {
    url.searchParams.set(key, value);
  });
  return url.toString();
}

const TIERS = [
{
  name: "Early Bird",
  price: "$199",
  badge: "Limited Release",
  cta: "Get Early Bird Ticket",
  active: true,
  features: null
},
{
  name: "Priority Access",
  price: "$299",
  badge: null,
  cta: "Get Priority Access",
  active: false,
  features: null
},
{
  name: "General Admission",
  price: "$399",
  badge: null,
  cta: "General Admission",
  active: true,
  features: null
},
{
  name: "VIP Access",
  price: "$599",
  badge: null,
  cta: "Get VIP Access",
  active: true,
  features: [
  "VIP Reserved Seating",
  "A seat at the VIP Kickoff Dinner on Wednesday, May 27",
  "Parking on-site access"]

},
{
  name: "Executive Team Pass",
  price: "Save 40%",
  badge: null,
  cta: "Contact Us",
  active: true,
  features: null,
  isTeam: true,
  description:
  "Save 40% when registering 3+ executives from the same company.",
  subtext:
  "Designed for leadership teams implementing AI across business systems. For more information, email events@niural.com."
}];


export default function Tickets() {
  return (
    <section id="tickets" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Tickets for Niural AI Summit 2026
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Tickets are released in phases and increase as capacity fills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mb-12">

          <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">All registrations are subject to approval to maintain a curated audience. Your card will be authorized at checkout, but payment will only be taken if your registration is approved. If not approved, the hold will be released. Approved attendees will get a confirmation email.

          </p>
        </motion.div>

        {/* Scarcity */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#714DFF]/5 text-[#714DFF] text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Capacity is limited to 200 executives
          </span>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-5xl mx-auto lg:max-w-none">
          {TIERS.map((tier, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`relative rounded-2xl p-6 border transition-all duration-300 flex flex-col ${
            tier.name === "VIP Access" ?
            "border-[#714DFF]/30 bg-[#714DFF]/[0.02] ring-1 ring-[#714DFF]/10" :
            "border-gray-200 bg-white hover:border-gray-300"}`
            }>

              <div className="mb-4 pt-1">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {tier.name}
                </h3>
                <p className="text-3xl font-bold text-gray-900">{tier.price}</p>
                {tier.badge &&
              <span className="inline-flex items-center mt-2 px-3 py-1 rounded-full text-white text-xs font-semibold" style={{ background: "#714DFF" }}>
                    {tier.badge}
                  </span>
              }
              </div>

              {tier.description &&
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {tier.description}
                </p>
            }

              {tier.features &&
            <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((f, j) =>
              <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-[#714DFF] mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
              )}
                </ul>
            }

              {!tier.features && !tier.description && <div className="flex-1" />}

              {tier.subtext &&
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                  {tier.subtext}
                </p>
            }

              {tier.isTeam ?
            <a
              href="mailto:events@niural.com"
              className="mt-auto block w-full text-center px-4 py-3 text-sm font-semibold text-[#714DFF] border border-[#714DFF]/30 rounded-full hover:border-[#714DFF] hover:bg-[#714DFF]/5 transition-all duration-200">

                  {tier.cta}
                </a> :

            <a
              href={preserveUtms(TICKET_URL)}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto block w-full text-center px-4 py-3 text-sm font-semibold rounded-full transition-all duration-200 ${
              tier.active ?
              "text-white shadow-sm hover:opacity-90" :
              "text-gray-400 bg-gray-100 cursor-default"}`
              }
              style={tier.active ? { background: "linear-gradient(135deg, #714DFF, #E151FF)" } : {}}>

                  {tier.cta}
                </a>
            }
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}