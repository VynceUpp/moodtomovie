import { getGenreByMood } from "../components/data";

const apiKey = "26bb62aba2acdc2f81b32cb1e712e959";
const baseUrl = "https://api.themoviedb.org/3";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmJiNjJhYmEyYWNkYzJmODFiMzJjYjFlNzEyZTk1OSIsIm5iZiI6MTcxMzg3NTQ5Ny4xNzUsInN1YiI6IjY2MjdhYTI5MTc2YTk0MDE2NjgxOTJhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y--rmXJP9tVS2B92FFXEhJ7rlyEZYsuKJrNJLvUFc1k";

export const fetchMoviesByMood = async (mood) => {
  try {
    const genreId = getGenreByMood(mood);
    const response = await fetch(
      `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}&sort_by=popularity.desc&page=1`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/popular?language=en-US&page=1`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};
