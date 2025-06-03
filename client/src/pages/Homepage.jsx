import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../index.css';
import {Link} from 'react-router-dom'

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://movie-platform-1.onrender.com/api/v1/home/movie')
      .then((res) => {
        const fetchedMovies = res.data.results;
        setMovies(fetchedMovies);
      })
      .catch((err) => console.log('Error fetching movies:', err));
  }, []);

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
        
        </div>  </Link>
      </div>

      {/* Movie Scroll Section with Gradient Overlay */}
      <div className="relative bg-black">
        <div className="overflow-hidden w-full py-4">
          <div className="auto-scroll flex gap-4 px-4">
            {[...movies, ...movies].map((movie, idx) => (
              <div
                key={idx}
                className="min-w-[160px] flex-shrink-0 overflow-hidden rounded-lg p-2"
              >
                <img
                  className="w-full h-[240px] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="movie"
                />
              </div>
            ))}
          </div>


          <div className="auto-scroll flex gap-4 px-4">
            {[...movies, ...movies].map((movie, idx) => (
              <div
                key={idx}
                className="min-w-[160px] flex-shrink-0 overflow-hidden rounded-lg p-2"
              >
                <img
                  className="w-full h-[240px] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="movie"
                />
              </div>
            ))}
          </div>
          
          
          
        </div>
        

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#003d1e] to-green-600 pointer-events-none z-10"></div>

      </div>

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
