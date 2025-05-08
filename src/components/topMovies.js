import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api/api";
import Slider from "react-slick";
import { Star, Calendar, Clock, Loader } from "lucide-react";

// Slick Carousel settings with optimized responsive breakpoints
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "60px",
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  swipeToSlide: true,
  lazyLoad: "progressive",
  responsive: [
    {
      breakpoint: 1536, // 2xl breakpoint
      settings: {
        slidesToShow: 5,
        centerPadding: "50px",
      },
    },
    {
      breakpoint: 1280, // xl breakpoint
      settings: {
        slidesToShow: 4,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 1024, // lg breakpoint
      settings: {
        slidesToShow: 3,
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 768, // md breakpoint
      settings: {
        slidesToShow: 2,
        centerPadding: "20px",
        autoplay: false,
      },
    },
    {
      breakpoint: 640, // sm breakpoint
      settings: {
        slidesToShow: 1,
        centerPadding: "40px",
        autoplay: false,
      },
    },
  ],
};

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const popular = await fetchPopularMovies();
        setMovies(popular);
      } catch (err) {
        console.error("Error loading featured movies:", err);
        setError("Unable to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    loadMovies();
  }, []);

  // Format date to be more readable
  const formatDate = (dateString) => {
    if (!dateString) return "Coming soon";
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Calculate movie runtime in hours and minutes
  const formatRuntime = (minutes) => {
    if (!minutes) return "";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  if (loading) {
    return (
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Top Picks This Week</h2>
        <div className="flex items-center justify-center h-64">
          <div className="flex flex-col items-center">
            <Loader className="w-12 h-12 text-indigo-500 animate-spin" />
            <p className="mt-4 text-gray-400">Loading trending movies...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Top Picks This Week</h2>
        <div className="bg-red-900 bg-opacity-20 border border-red-800 rounded-lg p-4 text-center">
          <p className="text-red-400">{error}</p>
          <button 
            className="mt-3 px-4 py-2 bg-red-700 hover:bg-red-600 rounded-md text-sm font-medium"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Top Picks This Week</h2>
      </div>
      
      {/* Movie Carousel */}
      <div className="relative">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="px-2">
              <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                {/* Movie Poster with gradient overlay */}
                <div className="relative aspect-[2/3] bg-slate-700">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/api/placeholder/400/600";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
                  
                  {/* Rating badge */}
                  <div className="absolute top-2 right-2 bg-black bg-opacity-70 rounded-full px-2 py-1 flex items-center">
                    <Star className="w-3 h-3 text-yellow-400 mr-1 fill-yellow-400" />
                    <span className="text-white text-xs font-bold">
                      {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                    </span>
                  </div>
                </div>
                
                {/* Movie Info */}
                <div className="p-4">
                  <h3 className="text-white text-base font-bold truncate mb-1" title={movie.title}>
                    {movie.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-400 text-xs mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{formatDate(movie.release_date)}</span>
                    
                    {movie.runtime && (
                      <>
                        <span className="mx-2">•</span>
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{formatRuntime(movie.runtime)}</span>
                      </>
                    )}
                  </div>
                  
                  {/* Genre tags */}
                  {movie.genre_ids && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {movie.genre_ids.slice(0, 2).map((genreId, index) => (
                        <span 
                          key={`${movie.id}-${genreId || index}`}
                          className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded"
                        >
                          {genreId}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Hover Overview Overlay with improved readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black bg-opacity-90 text-white p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
                  <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-6">
                    {movie.overview || "No description available."}
                  </p>
                  <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-md text-sm font-medium transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedMovies;