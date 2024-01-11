"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../homenavbar/Navbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  return (
    <div className={`${isScrolled}`}>
      <Navbar />
    </div>
  );
};

export default Header;
