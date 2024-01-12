"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "@/atoms/modalAtoms";
import { useEffect, useState } from "react";
import { Element, Genre } from "@/typings";
import ReactPlayer from "react-player/youtube";

import { Dialog, DialogContent } from "@/components/ui/dialog";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((response) => response.json())
        .catch((err) => console.log(err.message));

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [movie]);

  console.log(trailer);
  return (
    <div className="text-white">
      <Dialog open={showModal} onOpenChange={() => setShowModal(false)}>
        <DialogContent className="mx-auto w-full max-w-5xl h-[600px] p-8">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            // style={{ position: "absolute", top: "0", left: "0" }}
            playing
            controls
            muted={muted}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
