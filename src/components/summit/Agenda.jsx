import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TICKET_URL = "https://luma.com/mggz3md1";

function preserveUtms(baseUrl) {
  const currentParams = new URLSearchParams(window.location.search);
  const url = new URL(baseUrl);
  currentParams.forEach((value, key) => {
    url.searchParams.set(key, value);
  });
  return url.toString();
}

const TAG_STYLES = {
  "Private Event": "bg-[#5E3BD4]/10 text-[#5E3BD4]",
  Networking: "bg-emerald-50 text-emerald-700",
  Panel: "bg-blue-50 text-blue-700",
  Keynote: "bg-amber-50 text-amber-700",
  Demo: "bg-purple-50 text-purple-700",
  Break: "bg-gray-100 text-gray-500"
};

const WEDNESDAY = [
{
  time: "6:00 PM – 9:00 PM",
  title: "VIP Kickoff Dinner",
  description: "Invite-only executive dinner for speakers, sponsors, and select founders.",
  tag: "Private Event"
}];


const THURSDAY = [
{
  time: "11:00 AM",
  title: "Registration & Networking",
  description: null,
  tag: "Networking"
},
{
  time: "11:45 AM",
  title: "The AI Operating Engine",
  description:
  "Where finance, ops, and automation converge. CFOs and fintech leaders unpack how AI is transforming forecasting, controls, risk management, and execution inside high-growth companies.",
  tag: "Panel"
},
{
  time: "12:30 PM",
  title: "Lunch & Headline Keynote Fireside Chat",
  description:
  "An intimate conversation with one of today's most respected business leaders. From scaling teams and navigating market shifts to building culture under pressure, this session blends inspiration with real-world operating insight. Candid. Unfiltered. Keynote will be revealed soon.",
  tag: "Keynote"
},
{
  time: "1:30 PM",
  title: "HR & People Ops in the Age of Algorithms",
  description:
  "From hiring to compliance to workforce design, leaders share how AI is reshaping talent strategy while preserving culture and accountability.",
  tag: "Panel"
},
{
  time: "2:15 PM",
  title: "Innovation Showcase: Partner Demos",
  description:
  "Rapid-fire, high-impact demonstrations from Niural and select partners. No fluff, just practical solutions built for modern teams.",
  tag: "Demo"
},
{
  time: "3:15 PM",
  title: "Coffee Break & Networking",
  description: null,
  tag: "Break",
  sponsor: { name: "ShayCPA", link: "https://shaycpa.com/" }
},
{
  time: "3:30 PM",
  title: "Inside the AI Investment Playbook",
  description:
  "Investors and founders break down how AI infrastructure, data strategy, and deployment decisions are shaping company valuations and long-term defensibility.",
  tag: "Panel"
},
{
  time: "4:15 PM",
  title: "Networking Happy Hour Reception",
  description: null,
  tag: "Networking"
}];


function SessionRow({ session }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-6 border-b border-gray-100 last:border-b-0">
      <div className="sm:w-32 flex-shrink-0">
        <span className="text-sm font-semibold text-[#714DFF]">{session.time}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h3 className="text-base font-semibold text-gray-900">{session.title}</h3>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            TAG_STYLES[session.tag] || "bg-gray-100 text-gray-600"}`
            }>

            {session.tag}
          </span>
        </div>
        {session.description &&
        <p className="text-sm text-gray-500 leading-relaxed mt-1">{session.description}</p>
        }
        {session.sponsor &&
        <div className="flex items-center gap-2 mt-2">
            
            <a
            href={session.sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity">

              




            </a>
          </div>
        }
      </div>
    </div>);

}

export default function Agenda() {
  const [activeTab, setActiveTab] = useState("thursday");

  const tabs = [
  { id: "wednesday", label: "Wed, May 27" },
  { id: "thursday", label: "Thu, May 28" }];


  return (
    <section id="agenda" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Agenda
          </h2>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-xl p-1 border border-gray-200">
            {tabs.map((tab) =>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.id ?
              "text-white shadow-sm" :
              "text-gray-500 hover:text-gray-900"}`
              }
              style={activeTab === tab.id ? { background: "linear-gradient(135deg, #714DFF, #E151FF)" } : {}}>

                {tab.label}
              </button>
            )}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "wednesday" &&
          <motion.div
            key="wednesday"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">

              {WEDNESDAY.map((session, i) =>
            <SessionRow key={i} session={session} />
            )}
              <div className="mt-8 text-center">
                <a
                href={preserveUtms(TICKET_URL)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#714DFF] border-2 border-[#714DFF]/30 rounded-full hover:border-[#714DFF] hover:bg-[#714DFF]/5 transition-all duration-200">

                  Get VIP Tickets
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          }

          {activeTab === "thursday" &&
          <motion.div
            key="thursday"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">

              {THURSDAY.map((session, i) =>
            <SessionRow key={i} session={session} />
            )}
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </section>);

}