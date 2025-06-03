// src/components/MovieCarousel.js
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovieCarousel = ({ title, icon, movies }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Dynamic scroll amount based on screen size
  const getScrollAmount = () => {
    if (window.innerWidth < 640) return 280; // Mobile: ~2 cards
    if (window.innerWidth < 1024) return 420; // Tablet: ~3 cards
    return 560; // Desktop: ~4 cards
  };

  const scrollLeft = () => {
    const scrollAmount = getScrollAmount();
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const scrollAmount = getScrollAmount();
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Update arrow visibility based on scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [movies]);

  return (
    <div className='relative px-2 sm:px-4 py-6 sm:py-10'>
      {/* Title Section */}
      <div className='flex items-center gap-2 pb-3 sm:pb-4 px-2 sm:px-4 lg:pl-10'>
        <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-white'>
          {title}
        </h2>
        {icon && <img className='h-5 w-5 sm:h-6 sm:w-6' src={icon} alt='icon' />}
      </div>

      {/* Left Arrow - Hidden on mobile for better touch experience */}
      {!isMobile && showLeftArrow && (
        <button
          onClick={scrollLeft}
          className='absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-60 hover:bg-opacity-80 p-2 sm:p-3 rounded-full transition-all duration-200 shadow-lg'
          aria-label='Scroll left'
        >
          <ChevronLeft size={isMobile ? 20 : 24} className='text-white' />
        </button>
      )}

      {/* Movie Cards Container */}
      <div
        ref={scrollRef}
        className='flex gap-2 sm:gap-3 lg:gap-4 overflow-x-auto scroll-smooth no-scrollbar px-2 sm:px-4 lg:px-10 pb-2'
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {movies.map((movie) => (
          <div 
            key={movie.id}
            className='flex-shrink-0 group cursor-pointer'
          >
            <Link to={`/movie/${movie.id}`} className='block'>
              <div className='relative overflow-hidden rounded-md sm:rounded-lg transition-transform duration-300 group-hover:scale-105'>
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title || 'Movie poster'}
                    className='object-cover w-[120px] h-[180px] sm:w-[140px] sm:h-[210px] lg:w-[160px] lg:h-[240px] xl:w-[180px] xl:h-[270px]'
                    loading='lazy'
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/500x750?text=No+Poster';
                    }}
                  />
                ) : (
                  <div className='w-[120px] h-[180px] sm:w-[140px] sm:h-[210px] lg:w-[160px] lg:h-[240px] xl:w-[180px] xl:h-[270px] bg-gray-800 flex items-center justify-center'>
                    <span className='text-white text-xs'>No Image Available</span>
                  </div>
                )}
                
                {/* Hover overlay for desktop */}
                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 hidden sm:block'></div>
              </div>
              
              {/* Movie Title */}
              <h3 className='mt-2 text-center text-xs sm:text-sm font-semibold text-white truncate px-1 group-hover:text-gray-300 transition-colors'>
                {movie.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      {/* Right Arrow - Hidden on mobile for better touch experience */}
      {!isMobile && showRightArrow && (
        <button
          onClick={scrollRight}
          className='absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-60 hover:bg-opacity-80 p-2 sm:p-3 rounded-full transition-all duration-200 shadow-lg'
          aria-label='Scroll right'
        >
          <ChevronRight size={isMobile ? 20 : 24} className='text-white' />
        </button>
      )}

      {/* Mobile scroll indicator dots */}
      {isMobile && movies.length > 3 && (
        <div className='flex justify-center mt-4 gap-1'>
          {Array.from({ length: Math.ceil(movies.length / 2) }).map((_, index) => (
            <div
              key={index}
              className='w-2 h-2 rounded-full bg-gray-600'
            ></div>
          ))}
        </div>
      )}

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default MovieCarousel;