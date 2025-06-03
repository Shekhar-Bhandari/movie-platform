import logo from '../images/logos/logo.svg'; 
import search from '../images/icons/search.svg'; 
import '../styles/header.css'; 
import { Link } from 'react-router-dom'; 
import avatar from '../images/icons/avatars/avatar2.png';
import { useState } from 'react';

export default function HeaderMain(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed bg-stone-950 w-full top-0 left-0 border-solid border-b-2 border-stone-900 z-50">
      <nav className="flex justify-between px-4 sm:px-8 lg:px-24 py-4 items-center">
        {/* Left section */}
        <div className="left-section flex items-center gap-4 sm:gap-8 lg:gap-12">
          <Link to='/home'>
            <img className="logo-icon h-8 w-auto sm:h-10" src={logo} alt="Logo"/>
          </Link>
          
          {/* Desktop navigation links */}
          <div className="links hidden lg:flex gap-6">
            <Link to='/'>
              <p className="text-lg text-white hover:text-gray-300 transition-colors">Movies</p>
            </Link>
            <Link to='/'>
              <p className="text-lg text-white hover:text-gray-300 transition-colors">Series</p>
            </Link>
          </div>
        </div>

        {/* Right section */}
        <div className="right-section flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Search bar - hidden on small screens, shown on medium+ */}
          <div className="search-bar hidden md:flex items-center relative">
            <input 
              className="text-sm sm:text-lg h-8 sm:h-10 pl-8 sm:pl-12 pr-4 w-32 sm:w-48 lg:w-64 bg-transparent border-solid border-stone-600 border-2 rounded text-gray-300 placeholder-gray-500 focus:border-stone-400 focus:outline-none transition-colors" 
              type="text" 
              placeholder="Search..."
            />
            <img className="h-4 w-4 sm:h-5 sm:w-5 absolute left-2 sm:left-4 top-1/2 -translate-y-1/2" src={search} alt="Search"/>
          </div>

          {/* Mobile search button - only visible on small screens */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-stone-800 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Search"
          >
            <img className="h-5 w-5" src={search} alt="Search"/>
          </button>

          {/* Avatar button */}
          <Link to="/login">
            <button className="btn-primary p-1 sm:p-2 rounded-full hover:bg-stone-800 transition-colors">
              <img className='h-6 w-6 sm:h-7 sm:w-7' src={avatar} alt="avatar-icon" />
            </button>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
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
      <div className={`lg:hidden bg-stone-950 border-t border-stone-800 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-4 space-y-4">
          {/* Mobile navigation links */}
          <Link to='/' onClick={() => setIsMobileMenuOpen(false)}>
            <p className="text-lg text-white hover:text-gray-300 transition-colors py-2">Movies</p>
          </Link>
          <Link to='/' onClick={() => setIsMobileMenuOpen(false)}>
            <p className="text-lg text-white hover:text-gray-300 transition-colors py-2">Series</p>
          </Link>
          
          {/* Mobile search bar */}
          <div className="search-bar flex items-center relative pt-2">
            <input 
              className="text-lg h-10 pl-12 pr-4 w-full bg-transparent border-solid border-stone-600 border-2 rounded text-gray-300 placeholder-gray-500 focus:border-stone-400 focus:outline-none transition-colors" 
              type="text" 
              placeholder="Search movies/series"
            />
            <img className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2" src={search} alt="Search"/>
          </div>
        </div>
      </div>
    </header>
  );
}