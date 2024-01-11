"use client";

import LandingHero from "@/components/landing/hero/LendingHero";
import LandingNavbar from "@/components/landing/navbar/LandingNavbar";
import React from "react";

const HeroPage = () => {
  return (
    <div
      className="relative bg-no-repeat bg-center bg-fixed bg-cover w-full h-full sm:h-screen"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div >
        <LandingNavbar />
        <LandingHero />
      </div>
    </div>
  );
};

export default HeroPage;
