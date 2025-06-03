import React from 'react';
import { Link } from 'react-router-dom';

const MovieCarousel = ({ title, movies, icon }) => {
  return (
    <div className="mb-12 px-4">
      <div className="flex items-center mb-4">
        {icon && <img src={icon} alt="" className="w-8 h-8 mr-2" />}
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      
      <div className="relative">
        <div className="flex overflow-x-auto pb-4 hide-scrollbar">
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 mr-4 w-48">
              <Link to={`/movie/${movie.id}`}>
                <div className="relative group">
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/500x750?text=No+Poster';
                      }}
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-white">No poster available</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 rounded-b-lg">
                    <h3 className="text-white font-semibold truncate">{movie.title}</h3>
                    <p className="text-yellow-400 text-sm">⭐ {movie.vote_average?.toFixed(1)}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;