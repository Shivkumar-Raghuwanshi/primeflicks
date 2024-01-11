"use client";

import Download from "@/components/landing/content/Download";
import FrequentQuestions from "@/components/landing/content/FrequentQuestions";
import Kids from "@/components/landing/content/Kids";
import Television from "@/components/landing/content/Television";
import Watch from "@/components/landing/content/Watch";
import HeroPage from "@/components/landing/hero/Hero";
import FooterPage from "@/components/landing/footer/FooterPage";

const LandingPage = () => {
  return (
    <>
      <HeroPage />
      <div className="bg-slate-800 h-3 "></div>
      <Television />
      <div className="bg-slate-800 h-3 "></div>
       <Download />
      <div className="bg-slate-800 h-3 "></div>
      <Watch />
      <div className="bg-slate-800 h-3 "></div>
     <Kids />
      <div className="bg-slate-800 h-3 "></div>
       <FrequentQuestions />
      <div className="bg-slate-800 h-3 "></div>
      <FooterPage />
    </>
  );
};

export default LandingPage;
