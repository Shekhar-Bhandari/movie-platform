import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderMain from '../components/HeaderMain'
import Footer from '../components/Footer'
import axios from 'axios'
import imdb from '../images/logos/imdb.svg'
import rotten from '../images/logos/rotten.svg'
import letterbox from '../images/logos/letterboxd.svg'
import MovieCarousel from '../components/MovieCarousel'
import Greenfire from '../images/logos/Greenfire.webp'
import { useNavigate } from 'react-router-dom'

const CheckOut = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null)
  const { id } = useParams()
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/home/movie')
      .then(res => {
        setPopular(res.data.results);
        setTopRated(res.data.results);      // You can replace this with actual top-rated API
        setNewReleases(res.data.results);   // Replace with real new releases API
      })
      .catch(err => console.log('Error fetching movies:', err));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/home/movie/${id}`)
      .then(res => {
        console.log('API response:', res.data)
        setMovie(res.data)
      })
      .catch(err => console.error('Error fetching movie:', err))
  }, [id])

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <HeaderMain />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 pt-16 sm:pt-24 pb-8 sm:pb-12 px-4">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
          
          {/* Movie Poster */}
          <div className="flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-64 h-80 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg mx-auto"
            />
          </div>

          {/* Movie Details and Buttons */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:pl-8 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{movie.title}</h1>
            <p className="text-gray-400 text-sm sm:text-base">2024 • Movie • 120 mins</p>

            {/* Ratings */}
            <div className="flex gap-3 sm:gap-4 text-sm justify-center lg:justify-start">
              <span className="bg-gray-800 px-2 sm:px-3 py-1 sm:py-2 rounded flex items-center">
                <img className='h-8 w-8 sm:h-10 sm:w-10' src={imdb} alt="IMDB" />
              </span>
              <span className="bg-gray-800 px-2 sm:px-3 py-1 sm:py-2 rounded flex items-center">
                <img className='h-8 w-8 sm:h-10 sm:w-10' src={rotten} alt="Rotten Tomatoes" />
              </span>
              <span className="bg-gray-800 px-2 sm:px-3 py-1 sm:py-2 rounded flex items-center">
                <img className='h-8 w-8 sm:h-10 sm:w-10' src={letterbox} alt="Letterboxd" />
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-xs mx-auto lg:mx-0">
              <button 
                onClick={() => navigate(`/payment/${id}`)} 
                className="w-full bg-gradient-to-r from-green-800 to-green-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold text-sm sm:text-base hover:from-green-700 hover:to-green-300 transition-colors"
              >
                Buy Now – ₹120
              </button>
              <button 
                onClick={() => navigate(`/payment/${id}`)} 
                className="w-full bg-gradient-to-r from-yellow-700 to-yellow-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold text-sm sm:text-base hover:from-yellow-600 hover:to-yellow-300 transition-colors"
              >
                Rent It – ₹40
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Movie Carousels */}
      <div className='pt-8 sm:pt-12 lg:pt-16'>
        <MovieCarousel title="Popular" icon={Greenfire} movies={popular} />
      </div>
      <MovieCarousel title="Top Rated" movies={topRated} />
      <MovieCarousel title="New Releases" movies={newReleases} />
      
      {/* Footer */}
      <div className='pt-8 sm:pt-12 lg:pt-16'>
        <Footer />
      </div>
    </div>
  )
}

export default CheckOut