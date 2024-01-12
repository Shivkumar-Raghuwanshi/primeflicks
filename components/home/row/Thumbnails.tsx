
"use client";
import { Movie } from "@/typings";
import React from "react";
import Image from "next/image";
import { movieState, modalState } from "@/atoms/modalAtoms";
import { useRecoilState } from "recoil";

interface ThumbnailsProps {
  movie: Movie;
}
const Thumbnails = ({ movie  }: ThumbnailsProps) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div>
      <div
        className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
        onClick={() => {
          setCurrentMovie(movie);
          setShowModal(true);
        }}
      >
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
