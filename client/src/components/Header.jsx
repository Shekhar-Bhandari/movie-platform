import logo from '../images/logos/logo.svg';
import search from '../images/icons/search.svg';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed bg-stone-950 w-full top-0 left-0 border-solid border-b-2 border-stone-900 z-50">
      <nav className="flex justify-between px-4 sm:px-8 lg:px-24 py-4 items-center">
        {/* Left section */}
        <div className="left-section flex items-center gap-4 sm:gap-8 lg:gap-12">
          <Link to='/'>
            <img className="logo-icon h-8 w-auto sm:h-10" src={logo} alt="Logo"/>
          </Link>
          
          {/* Desktop navigation links */}
          <div className="links hidden lg:flex gap-6">
            <p className="text-lg text-white hover:text-gray-300 transition-colors cursor-pointer">Movies</p>
            <p className="text-lg text-white hover:text-gray-300 transition-colors cursor-pointer">Series</p>
          </div>
        </div>

        {/* Right section */}
        <div className="right-section flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Search bar - hidden on small screens, shown on large screens */}
          <div className="search-bar hidden lg:flex items-center relative">
            <input 
              className="text-lg h-10 pl-12 pr-4 w-48 xl:w-64 bg-transparent border-solid border-stone-600 border-2 rounded text-gray-300 placeholder-gray-500 focus:border-stone-400 focus:outline-none transition-colors" 
              type="text" 
              placeholder="search movies/series"
            />
            <img className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2" src={search} alt="Search"/>
          </div>

          {/* Desktop buttons */}
          <div className="button hidden md:flex gap-2 lg:gap-4">
            <Link to="/login">
              <button className="btn-primary px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-base">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn-sec px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-base">Register</button>
            </Link>
          </div>

          {/* Mobile search button - visible on medium screens only */}
          <button 
            className="hidden md:flex lg:hidden p-2 rounded-full hover:bg-stone-800 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Search"
          >
            <img className="h-5 w-5" src={search} alt="Search"/>
          </button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div className={`md:hidden bg-stone-950 border-t border-stone-800 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-4 space-y-4">
          {/* Mobile navigation links */}
          <div className="space-y-3">
            <p className="text-lg text-white hover:text-gray-300 transition-colors py-2 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Movies</p>
            <p className="text-lg text-white hover:text-gray-300 transition-colors py-2 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Series</p>
          </div>
          
          {/* Mobile search bar */}
          <div className="search-bar flex items-center relative pt-2">
            <input 
              className="text-lg h-10 pl-12 pr-4 w-full bg-transparent border-solid border-stone-600 border-2 rounded text-gray-300 placeholder-gray-500 focus:border-stone-400 focus:outline-none transition-colors" 
              type="text" 
              placeholder="search movies/series"
            />
            <img className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2" src={search} alt="Search"/>
          </div>

          {/* Mobile buttons */}
          <div className="flex gap-3 pt-2">
            <Link to="/login" className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="btn-primary w-full py-3 text-base">Login</button>
            </Link>
            <Link to="/register" className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="btn-sec w-full py-3 text-base">Register</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tablet search dropdown - only for medium screens */}
      <div className={`hidden md:flex lg:hidden bg-stone-950 border-t border-stone-800 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 sm:px-8 py-4 w-full">
          <div className="search-bar flex items-center relative">
            <input 
              className="text-lg h-10 pl-12 pr-4 w-full bg-transparent border-solid border-stone-600 border-2 rounded text-gray-300 placeholder-gray-500 focus:border-stone-400 focus:outline-none transition-colors" 
              type="text" 
              placeholder="search movies/series"
            />
            <img className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2" src={search} alt="Search"/>
          </div>
        </div>
      </div>
    </header>
  );
}