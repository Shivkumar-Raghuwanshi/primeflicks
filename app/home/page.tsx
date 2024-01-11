import Banner from "@/components/home/banner/Banner";

import { fetchActionMovies, fetchComedyMovies, fetchDocumentaries, fetchHorrorMovies, fetchNetflixOriginals, fetchRomanceMovies, fetchTopRated, fetchTrending } from "../api/getData/getData";
import Row from "@/components/home/row/Row";

const Home = async () => {
  const netflixOriginals = await fetchNetflixOriginals();
  const trendingNow = await fetchTrending();
  const topRated = await fetchTopRated();
  const actionMovies = await fetchActionMovies()
  const comedyMovie = await fetchComedyMovies();
  const horrorMovie = await fetchHorrorMovies();
  const romanceMovie = await fetchRomanceMovies();
  const documentaries = await fetchDocumentaries();
  // console.log(data);
  return (
    <>
      <div>
        <main>
          <Banner netflixOriginals={netflixOriginals} />
          <section>
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Top Rated" movies={topRated} />
            <Row title="Action Thrillers" movies={actionMovies}/>
            {/* My List Component */}
            <Row title="Comedies" movies={comedyMovie} />
            <Row title="Scary Movies" movies={horrorMovie} />
            <Row title="Romance Movies" movies={romanceMovie} />
            <Row title="Documentaries" movies={documentaries}/>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
