import React, { useEffect } from "react";
import NavBar from "@/components/summit/NavBar";
import Hero from "@/components/summit/Hero";
import AboutSection from "@/components/summit/AboutSection";
import WhyAttend from "@/components/summit/WhyAttend";
import WhoShouldAttend from "@/components/summit/WhoShouldAttend";
import Speakers from "@/components/summit/Speakers";
import Agenda from "@/components/summit/Agenda";
import Tickets from "@/components/summit/Tickets";
import FAQ from "@/components/summit/FAQ";
import FinalCTA from "@/components/summit/FinalCTA";
import Footer from "@/components/summit/Footer";

export default function Home() {
  useEffect(() => {
    // Set meta tags for SEO
    document.title = "Niural AI Summit 2026 | Executive AI Conference NYC";

    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Join 200+ founders, CFOs, and HR leaders at Niural AI Summit in NYC. Tactical insights on AI in finance, payroll, compliance, and operations."
    );
    setMeta(
      "keywords",
      "AI Summit NYC, AI Conference NYC 2026, AI in Finance, AI in HR, AI in payroll, AI compliance automation, Executive AI event, NYC Tech Week Event, AI for CFOs"
    );

    // Open Graph
    setMeta("og:title", "Niural AI Summit 2026 | Executive AI Conference NYC", true);
    setMeta(
      "og:description",
      "Join 200+ founders, CFOs, and HR leaders at Niural AI Summit in NYC. Tactical insights on AI in finance, payroll, compliance, and operations.",
      true
    );
    setMeta("og:type", "website", true);
    setMeta("og:url", window.location.href, true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Niural AI Summit 2026 | Executive AI Conference NYC");
    setMeta(
      "twitter:description",
      "Join 200+ founders, CFOs, and HR leaders at Niural AI Summit in NYC. Tactical insights on AI in finance, payroll, compliance, and operations."
    );
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <NavBar />
      <Hero />
      <AboutSection />
      <WhyAttend />
      <WhoShouldAttend />
      <Speakers />
      <Agenda />
      <Tickets />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}