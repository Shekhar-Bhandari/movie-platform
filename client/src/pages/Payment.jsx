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

const Payment = () => {
  const [movie, setMovie] = useState(null)
  const { id } = useParams()

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
      <main className="flex flex-col items-center justify-center flex-1 pt-10 md:pt-24 pb-12 px-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 md:gap-10 items-center p-4 md:p-8 rounded-xl shadow-lg">
          
          {/* Movie Poster - Mobile first */}
          <div className="w-full md:w-auto flex justify-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-[250px] h-[350px] md:w-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Movie Details and Buttons */}
          <div className="flex flex-col gap-4 md:gap-6 md:pl-8 w-full md:w-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">{movie.title}</h1>
            <p className="text-gray-400 text-sm text-center md:text-left">2024 • Movie • 120 mins</p>

            {/* Ratings */}
            <div className="flex justify-center md:justify-start gap-4 text-sm">
              <span className="bg-gray-800 px-3 py-1 rounded"><img className='h-8 w-8 md:h-10 md:w-10' src={imdb} alt="IMDB"/> </span>
              <span className="bg-gray-800 px-3 py-1 rounded"><img className='h-8 w-8 md:h-10 md:w-10' src={rotten} alt="Rotten Tomatoes"/> </span>
              <span className="bg-gray-800 px-3 py-1 rounded"><img className='h-8 w-8 md:h-10 md:w-10' src={letterbox} alt="Letterboxd"/> </span>
            </div>

            {/* Payment Section */}
            <div className="flex flex-col gap-4 mt-4">
              <div>
                <p className="text-lg font-medium text-center md:text-left">Choose Payment</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"> 
                <button className="bg-gradient-to-r from-green-800 to-green-400 text-white px-4 py-2 md:px-6 md:py-2 rounded-2xl font-semibold text-sm md:text-base">
                  Esewa
                </button>
                <button className="bg-gradient-to-r from-yellow-700 to-yellow-400 text-white px-4 py-2 md:px-6 md:py-2 rounded-2xl font-semibold text-sm md:text-base">
                  Khalti
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="pt-10 md:pt-30">
        <Footer />
      </div>
    </div>
  )
}

export default Payment