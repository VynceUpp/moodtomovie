import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../css/MoviePage.css';

const MoviePage = () => {
  const { mood } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies based on the selected mood
    const fetchMovies = async () => {
      try {
        const apiKey = '26bb62aba2acdc2f81b32cb1e712e959';
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${getGenreByMood(mood)}`);
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };  

    fetchMovies();
  }, [mood]);

  const getGenreByMood = (mood) => {
    // Define mappings between moods and TMDB genre ids
    const genreMap = {
      happy: 35, // Comedy
      sad: 18, // Drama
      romantic: 10749, // Romance
      adventurous: 12, // Adventure
      action: 28,
      animation: 16,
      crime: 80,
      extranerdy: 99,
      fantasy: 14,
      learned: 36,
      horror: 27,
      musical: 10402,
      mysterious: 9468,
      nerdy: 878,
      thrilled: 53,
      // Add more mood-genre mappings as needed
    };

    return genreMap[mood] || '';
  };

  return (
    <div className='moviepage'>
      <Navbar />
      <h2>When feeling {mood}, you should watch these:</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p><b>Release Date: </b>{movie.release_date}</p>
            <div className='movie-description'><p><b>Description: </b>{movie.overview}</p></div>
            <p><b>Rating: </b><i class="ri-star-line"></i> {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
