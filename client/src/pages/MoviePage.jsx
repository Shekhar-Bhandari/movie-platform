import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderMain from '../components/HeaderMain';
import TrailerPlayer from '../components/TrailerPlayer';
import ReviewSection from '../components/Review';
import '../index.css'
import axios from 'axios'
import greenfire from '../images/logos/Greenfire.webp';
const MoviePage = () => {

  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    axios.get('https://movie-platform-1.onrender.com/api/v1/home/movie')
      .then(res => {
        const movies = res.data.results;
        setPopular(movies);
        setTopRated(movies);
        setNewReleases(movies);
      })
      .catch(err => console.error('Error fetching movies:', err));
  }, []);

  useEffect(() => {
    fetch(`https://movie-platform-1.onrender.com/api/v1/home/movie/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error('Error fetching movie:', err));

    fetch(`https://movie-platform-1.onrender.com/api/v1/home/movie/${id}/credits`)
      .then(res => res.json())
      .then(data => setCast(data.cast.slice(0, 5)))
      .catch(err => console.error('Error fetching cast:', err));
  }, [id]);

  if (!movie) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <HeaderMain />

      <div className="p-6 pt-24 flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Movie Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full max-w-xs md:w-[300px] rounded-lg shadow-lg mx-auto md:mx-0 flex-shrink-0"
        />

        {/* Movie Details */}
        <div className="flex flex-col gap-6 max-w-2xl mx-auto md:mx-0 min-w-0">
          <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">{movie.title}</h1>
          <p className="text-gray-300 text-sm md:text-base break-words min-w-0">{movie.overview}</p>

          {/* Genres */}
          <div>
            <h2 className="font-semibold text-lg mb-1">Genres:</h2>
            <ul className="flex gap-2 flex-wrap justify-center md:justify-start">
              {movie.genres?.map(genre => (
                <li
                  key={genre.id}
                  className="bg-gray-700 px-3 py-1 rounded-full text-sm whitespace-nowrap"
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Cast */}
          <div>
            <h2 className="font-semibold text-lg mb-2">Top Cast:</h2>
            <ul className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 max-w-full">
              {cast.map(actor => (
                <li
                  key={actor.id}
                  className="text-center w-[100px] flex-shrink-0"
                  style={{ minWidth: '100px' }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    className="rounded-full h-[80px] w-[80px] object-cover mx-auto border border-gray-700"
                  />
                  <p className="text-sm mt-1 truncate">{actor.name}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowTrailer(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 w-full sm:w-auto"
            >
              ▶ Watch Trailer
            </button>
            <button
              onClick={() => navigate(`/checkout/${id}`)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 w-full sm:w-auto"
            >
              Buy Movie
            </button>
          </div>
        </div>
      </div>
      {/* Movie Carousels */}
      <div className="pt-8 px-4 md:px-10">
        <MovieCarousel title="Popular" icon={greenfire} movies={popular} />
      </div>
      <div className="pt-8 px-4 md:px-10">
        <MovieCarousel title="Top Rated" movies={topRated} />
      </div>
      <div className="pt-8 px-4 md:px-10">
        <MovieCarousel title="New Releases" movies={newReleases} />
      </div>


      <ReviewSection />
      <Footer />

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-hidden">
          <div className="relative w-full max-w-5xl aspect-video">
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute top-2 right-4 text-white text-4xl font-bold z-50 hover:text-gray-300"
              aria-label="Close trailer"
            >
              &times;
            </button>
            <TrailerPlayer movieId={id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
