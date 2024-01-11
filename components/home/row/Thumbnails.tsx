import { Movie } from "@/typings";
import React from "react";
import Image from "next/image";
interface ThumbnailsProps {
  movie: Movie;
  // when using firbase
  // movie: Movie || DocumentData
}
const Thumbnails = ({ movie }: ThumbnailsProps) => {
  return (
    <div>
      <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
        {movie && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${
              movie?.backdrop_path || movie?.poster_path
            }`}
            fill={true}
            priority={true}
            object-fit="cover"
            alt="banner"
            className="rounded-sm md:rounded"
          />
        )}
      </div>
    </div>
  );
};

export default Thumbnails;
