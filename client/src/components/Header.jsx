import logo from '../images/logos/logo.svg';
import search from '../images/icons/search.svg';
import '../styles/header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed bg-stone-950 w-full top-0 left-0 border-b-2 border-stone-900 z-50">
      <nav className="flex flex-wrap justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-4 gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-8 flex-shrink-0">
          <Link to="/">
            <img className="logo-icon w-24 sm:w-28 md:w-32" src={logo} alt="Logo" />
          </Link>

          <div className="links hidden sm:flex gap-6">
            <p className="text-lg text-white cursor-pointer hover:text-green-500">Movies</p>
            <p className="text-lg text-white cursor-pointer hover:text-green-500">Series</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 flex-nowrap min-w-0 w-full sm:w-auto">
          {/* Search bar */}
          <div className="relative flex-grow min-w-0 max-w-full">
            <input
              type="text"
              placeholder="Search movies/series"
              className="w-full h-10 pl-12 pr-4 bg-transparent border-2 border-stone-600 rounded text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500 text-lg"
            />
            <img
              src={search}
              alt="Search Icon"
              className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>

          {/* Buttons (hidden on mobile) */}
          <div className="hidden sm:flex gap-3 flex-shrink-0">
            <Link to="/login">
              <button className="btn-primary px-4 py-2 text-sm sm:text-base whitespace-nowrap">
                Login
              </button>
            </Link>
            <Link to="/login">
              <button className="btn-sec px-4 py-2 text-sm sm:text-base whitespace-nowrap">
                Register
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
