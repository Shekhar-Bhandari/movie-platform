// src/components/MovieCarousel.js
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovieCarousel = ({ title, icon, movies }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Reset slide position on mobile when screen size changes
      if (mobile && scrollRef.current) {
        scrollRef.current.scrollLeft = 0;
        setCurrentSlide(0);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Dynamic scroll amount based on screen size
  const getScrollAmount = () => {
    if (window.innerWidth < 640) return window.innerWidth * 0.8; // Mobile: ~1.5 cards
    if (window.innerWidth < 1024) return 420; // Tablet: ~3 cards
    return 560; // Desktop: ~4 cards
  };

  const scrollLeft = () => {
    const scrollAmount = getScrollAmount();
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    if (isMobile) {
      setCurrentSlide(prev => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    const scrollAmount = getScrollAmount();
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    if (isMobile) {
      setCurrentSlide(prev => Math.min(Math.ceil(movies.length / 2) - 1, prev + 1));
    }
  };

  // Update arrow visibility based on scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Update current slide for mobile
      if (isMobile) {
        const slideWidth = clientWidth / 2;
        const newSlide = Math.round(scrollLeft / slideWidth);
        setCurrentSlide(newSlide);
      }
    }
  };

  // Handle touch events for better mobile swipe experience
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      scrollRight();
    } else if (touchEnd - touchStart > 50) {
      // Swipe right
      scrollLeft();
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      scrollElement.addEventListener('touchstart', handleTouchStart);
      scrollElement.addEventListener('touchmove', handleTouchMove);
      scrollElement.addEventListener('touchend', handleTouchEnd);
      handleScroll(); // Initial check
      return () => {
        scrollElement.removeEventListener('scroll', handleScroll);
        scrollElement.removeEventListener('touchstart', handleTouchStart);
        scrollElement.removeEventListener('touchmove', handleTouchMove);
        scrollElement.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [movies, isMobile]);

  // Calculate how many cards to show per slide on mobile
  const mobileCardsPerSlide = 2;
  const totalMobileSlides = Math.ceil(movies.length / mobileCardsPerSlide);

  return (
    <div className='relative px-2 sm:px-4 py-4 sm:py-8'>
      {/* Title Section */}
      <div className='flex items-center gap-2 pb-2 sm:pb-4 px-2 sm:px-4 lg:pl-10'>
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
            className={`flex-shrink-0 group cursor-pointer ${isMobile ? 'w-[48%]' : ''}`}
          >
            <Link to={`/movie/${movie.id}`} className='block'>
              <div className='relative overflow-hidden rounded-md sm:rounded-lg transition-transform duration-300 group-hover:scale-105'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className={`object-cover ${isMobile ? 'w-full h-auto aspect-[2/3]' : 'w-[140px] h-[210px] lg:w-[160px] lg:h-[240px] xl:w-[180px] xl:h-[270px]'}`}
                  loading='lazy'
                />
                
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
      {isMobile && totalMobileSlides > 1 && (
        <div className='flex justify-center mt-3 gap-1.5'>
          {Array.from({ length: totalMobileSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const scrollElement = scrollRef.current;
                if (scrollElement) {
                  const slideWidth = scrollElement.clientWidth / mobileCardsPerSlide;
                  scrollElement.scrollTo({
                    left: index * slideWidth * mobileCardsPerSlide,
                    behavior: 'smooth'
                  });
                  setCurrentSlide(index);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-4' : 'bg-gray-600'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
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