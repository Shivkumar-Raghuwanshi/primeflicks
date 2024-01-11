//@ts-nocheck

"use client";
import React, { useEffect, useState } from "react";
import { Movie } from "@/typings";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle, Info } from "lucide-react";

interface BannerProps {
  netflixOriginals: Movie[];
}

const baseUrl: string = "https://image.tmdb.org/t/p/original";

const Banner = ({ netflixOriginals = [] }: BannerProps) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <>
      <div>
        <div className="relative h-[95vh]">
          {movie && (
            <Image
              src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
              fill={true}
              priority={true}
              object-fit="cover"
              alt="banner"
            />
          )}
        </div>
        <div className="absolute flex flex-col gap-4 top-1/2 px-4 py-2 md:px-8 lg:px-12 text-white bg-slate-950/15">
          <h1 className="text-xl font-bold md:text-3xl lg:text-5xl">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <p className="max-w-xs text-xs md:max-w-lg md:text-lg">
            {movie?.overview}
          </p>
          <div className="flex gap-2">
            <Button variant={"outline"} className="flex justify-center items-center gap-1 hover:bg-slate-300 text-black text-xs md:text-sm lg:text-lg">
              <PlayCircle className="w-6 h-6" />
              Play{" "}
            </Button>
            <Button variant={"outline"} className="flex justify-center items-center gap-1 hover:bg-slate-300 text-black text-xs md:text-sm lg:text-lg">
              <Info className="w-6 h-6" />
              More info{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
