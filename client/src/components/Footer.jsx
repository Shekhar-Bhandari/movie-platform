import logo from "../images/logos/logo.svg";
import facebook from "../images/logos/facebook.svg"
import twitter from "../images/logos/twitter.svg"
import youtube from "../images/logos/youtube.svg"
import instagram from "../images/logos/instagram.svg"
import appStore from "../images/logos/App-store.svg"
import googlePlay from "../images/logos/google-play.svg"
import {Link} from 'react-router-dom'
import "../styles/footer.css"

export default function Footer(){
  return (
    <footer className="px-4 sm:px-8 lg:px-24 py-8 sm:py-10 flex flex-col w-full items-start gap-8 sm:gap-10 bg-neutral-950">
      
      {/* Main content section */}
      <div className="flex flex-col lg:flex-row lg:justify-between w-full gap-8 lg:gap-0">

        {/* Left section with logo */}
        <div className="flex flex-col gap-4 sm:gap-6 flex-shrink-0">
          <img src={logo} className="w-32 sm:w-40 flex-shrink-0" alt="Logo"/>
          <div className="flex flex-col gap-2 sm:gap-3">
            <p className="text-base sm:text-lg text-white hover:text-green-500 cursor-pointer transition-colors">Movies</p>
            <p className="text-base sm:text-lg text-white hover:text-green-500 cursor-pointer transition-colors">TV shows</p>
          </div>
        </div>

        {/* Right section with navigation links */}
        <nav className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-20 lg:px-20">
          <div className="flex flex-col gap-2 sm:gap-3">
            <p className="text-base sm:text-lg text-gray-400 font-semibold">Genre</p>
            <p className="text-sm sm:text-lg text-white hover:text-green-500 cursor-pointer transition-colors">Action</p>
            <p className="text-sm sm:text-lg text-white hover:text-green-500 cursor-pointer transition-colors">Drama</p>
            <p className="text-sm sm:text-lg text-white hover:text-green-500 cursor-pointer transition-colors">Comedy</p>
            <p className="text-sm sm:text-lg text-white hover:text-green-500 cursor-pointer transition-colors">Thriller</p>
            <p className="text-sm sm:text-lg text-white hover:text-green-500 cursor-pointer transition-colors">Sci-fi</p>
          </div>
          
          <div className="flex flex-col gap-2 sm:gap-3">
            <p className="text-base sm:text-lg text-gray-400 font-semibold">Recommendation</p>
            <p className="text-sm sm:text-lg text-white hover:text-green-500 cursor-pointer transition-colors">Trending</p>
            <p className="text-sm sm:text-lg text-white hover:text-green-500 cursor-pointer transition-colors">Upcoming</p>
            <p className="text-sm sm:text-lg text-white hover:text-green-500 cursor-pointer transition-colors">Newly added</p>
          </div>
        </nav>
      </div>
    
      {/* Social media and download section */}
      <div className="social-download w-full flex flex-col sm:flex-row justify-between gap-6 sm:gap-4">
        
        {/* Social media section */}
        <div className="flex flex-col gap-3">
          <p className="text-gray-400 text-sm sm:text-base">Follow us on</p>
          <div className="social-media-icon flex gap-4 sm:gap-5">
            <img 
              src={facebook} 
              className="w-6 sm:w-7 hover:opacity-80 cursor-pointer transition-opacity" 
              alt="Facebook"
            />
            <a href="https://x.com/ShekharBha99161" target="_blank" rel="noopener noreferrer">
              <img 
                src={twitter} 
                className="w-6 sm:w-7 cursor-pointer hover:opacity-80 transition-opacity" 
                alt="Twitter"
              />
            </a>
            <img 
              src={youtube} 
              className="w-6 sm:w-7 hover:opacity-80 cursor-pointer transition-opacity"
              alt="YouTube"
            />
            <a href="https://www.instagram.com/_shekhar_bhandari/" target="_blank" rel="noopener noreferrer">
              <img 
                src={instagram} 
                className="w-6 sm:w-7 hover:opacity-80 cursor-pointer transition-opacity"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
        
        {/* Download section */}
        <div className="download flex flex-col sm:flex-row gap-3 sm:gap-6">
          <img 
            src={appStore} 
            className="w-28 sm:w-32 hover:opacity-80 cursor-pointer transition-opacity"
            alt="Download on App Store"
          />
          <img 
            src={googlePlay} 
            className="w-28 sm:w-32 hover:opacity-80 cursor-pointer transition-opacity"
            alt="Get it on Google Play"
          />
        </div>
      </div>

      {/* Copyright section */}
      <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-4 border-solid border-t-2 border-neutral-800 w-full pt-6"> 
        <p className="text-center sm:text-left text-gray-400 text-xs sm:text-sm">
          © 2024 All rights reserved
        </p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-3 sm:gap-6">
          <p className="text-white text-sm sm:text-base underline hover:text-green-500 cursor-pointer transition-colors text-center sm:text-left">
            Terms of service
          </p>
          <p className="text-white text-sm sm:text-base underline hover:text-green-500 cursor-pointer transition-colors text-center sm:text-left">
            Privacy policy
          </p>
          <p className="text-white text-sm sm:text-base underline hover:text-green-500 cursor-pointer transition-colors text-center sm:text-left">
            Contact us
          </p>
        </div>
      </div>
    </footer>
  )
}