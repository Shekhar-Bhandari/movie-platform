import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderMain from '../components/HeaderMain';
import TrailerPlayer from '../components/TrailerPlayer';
import { useNavigate } from 'react-router-dom';
import ReviewSection from '../components/Review';
const MoviePage = () => {
  const navigate=useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);

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
    <div className="min-h-screen bg-black text-white relative">
      <HeaderMain />

      <div className="p-6 pt-25 flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-[300px] rounded-lg shadow-lg"
        />

        <div className="flex flex-col gap-6 max-w-2xl">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="text-gray-300">{movie.overview}</p>

          <div>
            <h2 className="font-semibold text-lg mb-1">Genres:</h2>
            <ul className="flex gap-2 flex-wrap">
              {movie.genres?.map(genre => (
                <li key={genre.id} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">Top Cast:</h2>
            <ul className="flex gap-4 overflow-x-auto">
              {cast.map(actor => (
                <li key={actor.id} className="text-center w-[100px]">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    className="rounded-full h-[80px] w-[80px] object-cover mx-auto border border-gray-700"
                  />
                  <p className="text-sm mt-1">{actor.name}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Trailer Button */}
          <button
            onClick={() => setShowTrailer(true)}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 w-fit"
          >
            ▶ Watch Trailer
          </button>

          {/* Buy Button */}
          
          <button
            onClick={() => navigate(`/checkout/${id}`)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 w-fit"
          >
            Buy Movie
          </button>
        </div>
      </div>
      <ReviewSection/>

      <Footer />

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl aspect-video">
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute top-2 right-4 text-white text-4xl font-bold z-50 hover:text-gray-300"
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
