"use client";

import React, { useEffect, useState } from "react";
import Banner from "@/components/home/banner/Banner";
import {
  fetchActionMovies,
  fetchComedyMovies,
  fetchDocumentaries,
  fetchHorrorMovies,
  fetchNetflixOriginals,
  fetchRomanceMovies,
  fetchTopRated,
  fetchTrending,
} from "../api/getData/getData";
import Row from "@/components/home/row/Row";
import { useRecoilState } from "recoil";
import { modalState } from "@/atoms/modalAtoms";
import Modal from "@/components/Modal";
import { Movie } from "@/typings";

const Home = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [netflixOriginals, setNetflixOriginals] = useState<Movie[]>([]);
  const [trendingNow, setTrendingNow] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);
  const [comedyMovie, setComedyMovie] = useState<Movie[]>([]);
  const [horrorMovie, setHorrorMovie] = useState<Movie[]>([]);
  const [romanceMovie, setRomanceMovie] = useState<Movie[]>([]);
  const [documentaries, setDocumentaries] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setNetflixOriginals(await fetchNetflixOriginals());
      setTrendingNow(await fetchTrending());
      setTopRated(await fetchTopRated());
      setActionMovies(await fetchActionMovies());
      setComedyMovie(await fetchComedyMovies());
      setHorrorMovie(await fetchHorrorMovies());
      setRomanceMovie(await fetchRomanceMovies());
      setDocumentaries(await fetchDocumentaries());
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <main>
          <Banner netflixOriginals={netflixOriginals} />
          <section>
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Top Rated" movies={topRated} />
            <Row title="Action Thrillers" movies={actionMovies} />
            {/* My List Component */}
            <Row title="Comedies" movies={comedyMovie} />
            <Row title="Scary Movies" movies={horrorMovie} />
            <Row title="Romance Movies" movies={romanceMovie} />
            <Row title="Documentaries" movies={documentaries} />
          </section>
        </main>
        {showModal && <Modal />}
      </div>
    </>
  );
};

export default Home;
