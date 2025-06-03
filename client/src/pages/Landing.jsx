import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import greenfire from '../images/logos/Greenfire.webp';
import MovieCarousel from '../components/MovieCarousel';
import '../index.css';
import HeaderMain from '../components/HeaderMain';

const Landing = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

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

  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderMain />

      {/* Responsive Video Section */}
      <div className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          src="https://www.youtube.com/embed/nulvWqYUM8k?autoplay=1&mute=1&loop=1&playlist=nulvWqYUM8k&controls=0&showinfo=0&modestbranding=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background movie trailer"
        ></iframe>
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

      <Footer />
    </div>
  );
};

export default Landing;
