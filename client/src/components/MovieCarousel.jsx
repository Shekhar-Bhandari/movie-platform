import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovieCarousel = ({ title, icon, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative px-4 py-10">
      {/* Title and icon */}
      <div className="flex items-center gap-2 pl-10 pb-4 text-2xl font-bold text-white">
        <p>{title}</p>
        {icon && <img className="h-6 w-6" src={icon} alt="icon" />}
      </div>

      {/* Left scroll button */}
      <button
        aria-label="Scroll left"
        onClick={scrollLeft}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-60 hover:bg-opacity-90 p-2 rounded-full shadow-md"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>

      {/* Movies container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-10"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 w-[140px] rounded p-2 cursor-pointer transition-transform hover:scale-105"
          >
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-md object-cover h-[200px] w-full"
                loading="lazy"
              />
              <h3 className="mt-2 text-center text-sm font-semibold truncate text-white">
                {movie.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      {/* Right scroll button */}
      <button
        aria-label="Scroll right"
        onClick={scrollRight}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-60 hover:bg-opacity-90 p-2 rounded-full shadow-md"
      >
        <ChevronRight size={24} className="text-white" />
      </button>
    </div>
  );
};

export default MovieCarousel;
