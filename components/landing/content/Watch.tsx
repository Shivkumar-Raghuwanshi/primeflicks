import React from "react";
import Image from "next/image";

const Watch = () => {
  return (
    <div className="bg-black flex items-center justify-center px-5 md:px-20">
      <div className="flex flex-col justify-center items-center md:flex-row py-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white font-bold text-xl md:text-2xl lg:text-5xl text-center mb-5">
            Watch everywhere
          </h2>
          <p className="text-white text-sm md:text-lg lg:text-2xl text-center w-full md:w-72 lg:w-96 font-medium">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div>
          <Image src="/watch.png" width={640} height={480} alt="tv" />
        </div>
      </div>
    </div>
  );
};

export default Watch;
