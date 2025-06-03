import logo from '../images/logos/logo.svg';
import search from '../images/icons/search.svg';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import avatar from '../images/icons/avatars/avatar2.png';

export default function HeaderMain() {
  return (
    <header className="fixed bg-stone-950 w-full top-0 left-0 border-b-2 border-stone-900 z-50">
      <nav className="flex flex-wrap justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-4 gap-4">
        
        {/* Left Section */}
        <div className="flex items-center gap-8 flex-shrink-0">
          <Link to="/home">
            <img className="logo-icon w-24 sm:w-28 md:w-32" src={logo} alt="Logo" />
          </Link>

          <div className="hidden sm:flex gap-6">
            <Link to="/">
              <p className="text-lg text-white cursor-pointer hover:text-green-500">Movies</p>
            </Link>
            <Link to="/">
              <p className="text-lg text-white cursor-pointer hover:text-green-500">Series</p>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 flex-grow min-w-0">
          {/* 
            flex-grow: allows it to take available space on mobile
            min-w-0: critical to prevent overflow issues in flex containers (makes children allowed to shrink below their content width)
          */}
          <div className="relative flex-grow max-w-full sm:max-w-xs">
            {/* 
              flex-grow here makes input container expand in mobile, limited max width on sm and above
            */}
            <input
              className="w-full h-10 pl-12 pr-4 bg-transparent border-2 border-stone-600 rounded text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500 text-lg"
              type="text"
              placeholder="Search movies/series"
            />
            <img
              className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              src={search}
              alt="Search Icon"
            />
          </div>
          <div className='pl-100'>

          <Link to="/login" className="flex-shrink-0">
            <button className=" btn-primary p-1 rounded hover:bg-stone-800 transition">
              <img className="h-7 w-7 rounded-full" src={avatar} alt="avatar-icon" />
            </button>
          </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
