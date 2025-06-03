import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeaderMain from '../components/HeaderMain';
import Footer from '../components/Footer';
import MovieCarousel from '../components/MovieCarousel';

import imdb from '../images/logos/imdb.svg';
import rotten from '../images/logos/rotten.svg';
import letterbox from '../images/logos/letterboxd.svg';
import Greenfire from '../images/logos/Greenfire.webp';

const CheckOut = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    axios
      .get('https://movie-platform-1.onrender.com/api/v1/home/movie')
      .then(res => {
        setPopular(res.data.results);
        setTopRated(res.data.results);      // TODO: Replace with real top-rated API call
        setNewReleases(res.data.results);   // TODO: Replace with real new releases API call
      })
      .catch(err => console.error('Error fetching movies:', err));
  }, []);

  useEffect(() => {
    axios
      .get(`https://movie-platform-1.onrender.com/api/v1/home/movie/${id}`)
      .then(res => setMovie(res.data))
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
        <div className="flex flex-col md:flex-row gap-10 items-center p-8 rounded-xl shadow-lg max-w-[900px]">
          {/* Movie Poster */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-[400px] h-[500px] object-cover rounded-lg shadow-lg"
          />

          {/* Movie Details and Buttons */}
          <div className="flex flex-col gap-6 md:pl-10 max-w-md">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-gray-400 text-sm">2024 • Movie • 120 mins</p>

            {/* Ratings */}
            <div className="flex gap-4 text-sm">
              <span className="bg-gray-800 px-3 py-1 rounded">
                <img className="h-10 w-10" src={imdb} alt="IMDB" />
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded">
                <img className="h-10 w-10" src={rotten} alt="Rotten Tomatoes" />
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded">
                <img className="h-10 w-10" src={letterbox} alt="Letterboxd" />
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <button
                onClick={() => navigate(`/payment/${id}`)}
                className="bg-gradient-to-r from-green-800 to-green-400 text-white px-6 py-2 rounded-2xl font-semibold w-full"
              >
                Buy Now – ₹120
              </button>
              <button
                onClick={() => navigate(`/payment/${id}`)}
                className="bg-gradient-to-r from-yellow-700 to-yellow-400 text-white px-6 py-2 rounded-2xl font-semibold w-full"
              >
                Rent It – ₹40
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="pt-10 max-w-7xl mx-auto w-full px-4">
        <MovieCarousel title="Popular" icon={Greenfire} movies={popular} />
        <MovieCarousel title="Top Rated" movies={topRated} />
        <MovieCarousel title="New Releases" movies={newReleases} />
      </div>

      <Footer />
    </div>
  );
};

export default CheckOut;
