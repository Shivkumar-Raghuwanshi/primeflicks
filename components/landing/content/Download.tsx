import React from "react";
import Image from "next/image";
import { ArrowDownFromLine, Circle } from "lucide-react";

const Download = () => {
  return (
    <div className="relative bg-black flex flex-col-reverse  md:flex-row items-center justify-center px-5 md:px-20">
      <div className="flex flex-col justify-center items-center">
        <Image src="/download.jpg" width={640} height={480} alt="download" />
        <div className="flex items-center justify-center border-2 w-full md:w-72 lg:w-96 h-28 p-4 rounded-2xl mb-8">
          <div className="m-2 p-2">
            <Image src="/box.png" width={50} height={70} alt="box" />
          </div>
          <div className=" p-1">
            <p className="text-white text-sm">Stranger Things</p>
            <p className="text-blue-700 text-sm">Downloading ...</p>
          </div>
          <div className="m-2 p-2">
            <ArrowDownFromLine className="text-white h-8 w-8 animate-bounce" />
          </div>
        </div>
      </div>
      <div className="grid justify-items-center pt-4">
          <h2 className="text-white font-bold text-xl md:text-2xl lg:text-5xl text-center mb-5 w-full md:w-72 lg:w-96">
            Download your shows to watch offline
          </h2>
          <p className="text-white text-sm md:text-lg lg:text-2xl text-center font-medium">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
    </div>
  );
};

export default Download;
