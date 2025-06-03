import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://movie-platform-1.onrender.com/api/v1/home/movie')
      .then((res) => {
        const fetchedMovies = res.data.results;
        setMovies(fetchedMovies);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error fetching movies:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Add some basic animation for the scrolling
  const scrollStyle = {
    animation: 'scroll 30s linear infinite',
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col gap-2 justify-center items-center h-[80vh] text-center">
        <p className="text-5xl font-bold">Buy or Rent Movies</p>
        <p className="text-5xl font-bold">No Subscriptions!</p>

        <div className="relative inline-block pb-7">
          <p className="pt-5 text-2xl">Just Pay for What you Watch</p>
          <p className="text-2xl font-light">For a fraction of a cost</p>

          {/* Cross-out lines */}
          <span className="absolute left-0 top-1/2 w-full h-[4px] bg-red-500 rotate-[10deg]"></span>
          <span className="absolute left-0 top-1/2 w-full h-[4px] bg-red-500 -rotate-[10deg]"></span>
        </div>
        <Link to='/login'>
          <div className="pt-10">
            <button className="text-center border-0 rounded-[12px] h-[50px] w-[160px] bg-green-400">
              Get Started
            </button>
          </div>
        </Link>
      </div>

      {/* Movie Scroll Section */}
      <div className="relative bg-black py-10">
        {loading ? (
          <div className="text-center py-10">Loading movies...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">Error: {error}</div>
        ) : (
          <>
            {/* First Scrolling Row */}
            <div className="overflow-hidden whitespace-nowrap py-4">
              <div 
                className="inline-block whitespace-nowrap animate-scroll"
                style={scrollStyle}
              >
                {[...movies, ...movies].map((movie, idx) => (
                  <div
                    key={`first-${idx}`}
                    className="inline-block w-40 mx-2 overflow-hidden rounded-lg"
                  >
                    {movie.poster_path ? (
                      <img
                        className="w-full h-60 object-cover rounded-md"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title || 'Movie poster'}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/500x750?text=No+Poster';
                        }}
                      />
                    ) : (
                      <div className="w-full h-60 bg-gray-800 flex items-center justify-center rounded-md">
                        <span>No Poster</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Second Scrolling Row (reverse direction) */}
            <div className="overflow-hidden whitespace-nowrap py-4">
              <div 
                className="inline-block whitespace-nowrap animate-scroll-reverse"
                style={scrollStyle}
              >
                {[...movies, ...movies].map((movie, idx) => (
                  <div
                    key={`second-${idx}`}
                    className="inline-block w-40 mx-2 overflow-hidden rounded-lg"
                  >
                    {movie.poster_path ? (
                      <img
                        className="w-full h-60 object-cover rounded-md"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title || 'Movie poster'}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/500x750?text=No+Poster';
                        }}
                      />
                    ) : (
                      <div className="w-full h-60 bg-gray-800 flex items-center justify-center rounded-md">
                        <span>No Poster</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#003d1e] to-green-600 pointer-events-none z-10"></div>
      </div>

      {/* Add CSS for animation in your index.css or a style tag */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
        }
      `}</style>

      {/* CTA Section */}
      <div className="flex flex-col justify-center items-center gap-5 py-24 bg-green-600 text-white text-center">
        <p className="text-5xl font-bold">Still Paying Monthly</p>
        <p className="text-5xl font-bold">Subscription for the Movies</p>
        <p className="text-5xl font-bold pb-7">you don't watch?</p>
        <p className="font-script text-3xl">Now you don't have to.</p>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;