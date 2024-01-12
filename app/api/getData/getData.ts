const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

import Bottleneck from 'bottleneck';
import fetch from 'node-fetch';

const limiter = new Bottleneck({
  minTime: 1000, // Minimum time between two tasks in milliseconds
});

export async function fetchTrending() {
  const url = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`;
  return await fetchData(url);
}

export async function fetchNetflixOriginals() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`;
  return await fetchData(url);
}

export async function fetchTopRated() {
  const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;
  return await fetchData(url);
}

export async function fetchActionMovies() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`;
  return await fetchData(url);
}

export async function fetchComedyMovies() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`;
  return await fetchData(url);
}

export async function fetchHorrorMovies() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`;
  return await fetchData(url);
}

export async function fetchRomanceMovies() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`;
  return await fetchData(url);
}

export async function fetchDocumentaries() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`;
  return await fetchData(url);
}

async function fetchData(url:string) {
  const res = await limiter.schedule(() => fetch(url));
  if (!res.ok) {
    console.error(`Failed to fetch data from ${url}. Status: ${res.status}`);
    throw new Error("Failed to fetch data");
  }
  const json = await res.json();
  const data = json.results;
  return data
}
