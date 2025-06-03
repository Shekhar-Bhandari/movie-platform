import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderMain from '../components/HeaderMain';
import Footer from '../components/Footer';
import axios from 'axios';
import imdb from '../images/logos/imdb.svg';
import rotten from '../images/logos/rotten.svg';
import letterbox from '../images/logos/letterboxd.svg';

const Payment = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://movie-platform-1.onrender.com/api/v1/home/movie/${id}`)
      .then(res => {
        setMovie(res.data);
      })
      .catch(err => console.error('Error fetching movie:', err));
  }, [id]);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <HeaderMain />

      <main className="flex flex-col items-center justify-center flex-1 pt-24 pb-12 px-4">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 items-center p-6 md:p-8 rounded-xl shadow-lg bg-gray-900">
          {/* Movie Poster */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full max-w-xs md:max-w-[400px] h-auto md:h-[500px] object-cover rounded-lg shadow-lg"
          />

          {/* Movie Details and Buttons */}
          <div className="flex flex-col gap-6 px-0 md:px-6 w-full max-w-lg">
            <h1 className="text-3xl font-bold text-center md:text-left">{movie.title}</h1>
            <p className="text-gray-400 text-sm text-center md:text-left">2024 • Movie • 120 mins</p>

            {/* Ratings */}
            <div className="flex justify-center md:justify-start gap-4 text-sm">
              <span className="bg-gray-800 px-3 py-1 rounded flex items-center justify-center">
                <img className="h-10 w-10" src={imdb} alt="IMDB" />
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded flex items-center justify-center">
                <img className="h-10 w-10" src={rotten} alt="Rotten Tomatoes" />
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded flex items-center justify-center">
                <img className="h-10 w-10" src={letterbox} alt="Letterboxd" />
              </span>
            </div>

            {/* Payment Options */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <p className="text-lg font-semibold">Choose Payment</p>
              <div className="flex justify-center md:justify-start gap-6 flex-wrap">
                <button className="w-32 bg-gradient-to-r from-green-800 to-green-400 text-white px-6 py-2 rounded-2xl font-semibold hover:from-green-700 hover:to-green-300 transition">
                  Esewa
                </button>
                <button className="w-32 bg-gradient-to-r from-yellow-700 to-yellow-400 text-white px-6 py-2 rounded-2xl font-semibold hover:from-yellow-600 hover:to-yellow-300 transition">
                  Khalti
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
