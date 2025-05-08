import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Film, ArrowLeft, Star, Calendar } from 'lucide-react';
import "../css/MoviePage.css";
import { fetchMoviesByMood } from '../api/api';
import { getMoodColor, getMoodIcon } from '../components/data';
const MoviePage = () => {
  const { mood } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Fetch movies based on the selected mood
    const fetchMovies = async () => {
      setLoading(true);
      
      await fetchMoviesByMood(mood)
        .then((data) => {
          setMovies(data);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch movies. Please try again later.");
          setLoading(false);
        });
    };

    fetchMovies();
  }, [mood]);

  // Modified to handle clicks for individual movies
  const handleMovieClick = (movie) => {
    // Toggle the selected movie
    setSelectedMovie(selectedMovie && selectedMovie.id === movie.id ? null : movie);
  };

  if (error) {
    return (
      <div className="min-h-screen text-white">
        <nav className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Film size={26} />
              <span className="text-xl font-bold">Mood2Movie</span>
            </Link>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium inline-flex items-center space-x-2 transition">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <Film size={26} />
            <span className="text-xl font-bold">Mood2Movie</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white transition flex items-center space-x-1">
            <ArrowLeft size={18} />
            <span>Back</span>
          </Link>
        </div>
      </nav>

      {/* Movie Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Mood Header */}
        <div className="flex items-center justify-center mb-8">
          <div className={`${getMoodColor(mood)} rounded-full p-4 mr-4`}>
            <span className="text-3xl">{getMoodIcon(mood)}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Perfect Movies for Your <span className="capitalize">{mood}</span> Mood
          </h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {movies.length === 0 ? (
              <div className="text-center py-16">
                <h2 className="text-2xl font-semibold mb-4">No movies found for this mood</h2>
                <p className="text-gray-300 mb-6">Try selecting a different mood</p>
                <Link to="/" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium inline-flex items-center space-x-2 transition">
                  <ArrowLeft size={18} />
                  <span>Back to Home</span>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map(movie => (
                  <div 
                    key={movie.id} 
                    className="bg-slate-800 rounded-xl overflow-hidden shadow-lg transition transform hover:translate-y-1 hover:shadow-xl"
                  >
                    {movie.poster_path ? (
                      <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className="w-full aspect-[2/3] object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-[2/3] bg-slate-700 flex items-center justify-center">
                        <Film size={48} className="text-slate-500" />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{movie.title}</h3>
                      <div className="flex items-center space-x-2 text-gray-300 text-sm mb-2">
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-400 mr-1" />
                          <span>{movie.vote_average.toFixed(1)}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          <span>{movie.release_date?.split('-')[0] || 'N/A'}</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          handleMovieClick(movie);
                        }}
                        className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium focus:outline-none"
                      >
                        {selectedMovie && selectedMovie.id === movie.id ? "Hide details" : "Show details"}
                      </button>
                      
                      {selectedMovie && selectedMovie.id === movie.id && (
                        <div className="mt-3 text-sm text-gray-300 overflow-y-auto max-h-60">
                          <p>{movie.overview || "No description available."}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MoviePage;