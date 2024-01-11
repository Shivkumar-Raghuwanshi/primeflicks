import React from "react";
import Image from "next/image";
const Kids = () => {
  return (
    <div className="bg-black ">
      <div className=" flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-20">
        <div>
          <Image src="/kids.png" width={640} height={480} alt="tv" />
        </div>
        <div className="flex flex-col justify-center items-center py-4">
          <h2 className="text-white font-bold text-xl md:text-2xl lg:text-5xl text-center mb-3">
            Create profiles for kids
          </h2>
          <p className="text-white text-sm md:text-lg  lg:text-2xl text-center md:w-72 lg:w-96 font-medium">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kids;
