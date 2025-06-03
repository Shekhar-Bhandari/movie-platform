import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import greenfire from '../images/logos/Greenfire.webp';
import MovieCarousel from '../components/MovieCarousel';
import '../index.css'
import HeaderMain from '../components/HeaderMain';

const Landing = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    axios.get('https://movie-platform-1.onrender.com/api/v1/home/movie')
      .then(res => {
        setPopular(res.data.results);
        setTopRated(res.data.results);      // You can replace this with actual top-rated API
        setNewReleases(res.data.results);   // Replace with real new releases API
      })
      .catch(err => console.log('Error fetching movies:', err));
  }, []);

  return (
    <div className='min-h-screen bg-black text-white'>
      <HeaderMain />
     

      {/*Movie Detail Video section */}
    <div className="w-full h-[80vh] overflow-hidden relative">
 {/* Background Video */}
  <iframe
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="https://www.youtube.com/embed/nulvWqYUM8k?autoplay=1&mute=1&loop=1&playlist=nulvWqYUM8k&controls=0&showinfo=0&modestbranding=1"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
</div>


      <div className='pt-30'>

      <MovieCarousel title="Popular" icon={greenfire} movies={popular} /></div>
      <MovieCarousel title="Top Rated" movies={topRated} />
      <MovieCarousel title="New Releases" movies={newReleases} />

      <Footer />
    </div>
  );
};

export default Landing;
