import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/home/movie')
      .then(res => setMovies(res.data.results))
      .catch(err => console.error('Error fetching movies:', err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col gap-2 justify-center items-center h-[80vh] text-center px-4">
        <p className="text-5xl font-bold">Buy or Rent Movies</p>
        <p className="text-5xl font-bold">No Subscriptions!</p>

        <div className="relative inline-block pb-7">
          <p className="pt-5 text-2xl">Just Pay for What you Watch</p>
          <p className="text-2xl font-light">For a fraction of a cost</p>

          {/* Cross-out red lines */}
          <span className="absolute left-0 top-1/2 w-full h-[4px] bg-red-500 rotate-[10deg]"></span>
          <span className="absolute left-0 top-1/2 w-full h-[4px] bg-red-500 -rotate-[10deg]"></span>
        </div>

        <Link to="/login">
          <button className="mt-10 rounded-[12px] h-[50px] w-[160px] bg-green-400 text-black font-semibold hover:bg-green-500 transition">
            Get Started
          </button>
        </Link>
      </section>

      {/* Movie Scroll Section with Gradient Overlay */}
      <section className="relative bg-black overflow-hidden py-4">
        <div className="auto-scroll flex gap-4 px-4">
          {[...movies, ...movies].map((movie, idx) => (
            <div
              key={`scroll1-${idx}`}
              className="min-w-[160px] flex-shrink-0 overflow-hidden rounded-lg p-2"
            >
              <img
                className="w-full h-[240px] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || 'movie poster'}
              />
            </div>
          ))}
        </div>

        <div className="auto-scroll flex gap-4 px-4">
          {[...movies, ...movies].map((movie, idx) => (
            <div
              key={`scroll2-${idx}`}
              className="min-w-[160px] flex-shrink-0 overflow-hidden rounded-lg p-2"
            >
              <img
                className="w-full h-[240px] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || 'movie poster'}
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#003d1e] to-green-600 z-10"></div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col justify-center items-center gap-5 py-24 bg-green-600 text-white text-center px-4">
        <p className="text-5xl font-bold">Still Paying Monthly</p>
        <p className="text-5xl font-bold">Subscription for the Movies</p>
        <p className="text-5xl font-bold pb-7">you don't watch?</p>
        <p className="font-script text-3xl">Now you don't have to.</p>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
