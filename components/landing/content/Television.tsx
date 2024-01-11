import React from "react";
import Image from "next/image";

const Television = () => {
  return (
    <div className="bg-black p-5">
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20">
        <div className="flex flex-col justify-center items-center mb-4 md:mb-0">
          <h2 className="text-white font-bold text-xl md:text-2xl lg:text-5xl text-center mb-5">
            Enjoy on your TV
          </h2>
          <p className="text-white text-sm md:text-lg lg:text-2xl text-center w-full  md:w-72  lg:w-96 font-medium">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div>
          <Image src="/tv.png" width={640} height={480} alt="tv" />
        </div>
      </div>
    </div>
  );
};

export default Television;
