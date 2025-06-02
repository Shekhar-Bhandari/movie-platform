import logo from '../images/logos/logo.svg';
import search from '../images/icons/search.svg';
import '../styles/header.css';
import { Link } from 'react-router-dom';

export default function HeaderMain1(){

return (

<header className="fixed bg-stone-950 w-full top-0 left-0  border-solid border-b-2 border-stone-900 z-50">
    <nav className="flex justify-between px-24 py-4 items-center ">
      <div className="left-section flex gap-12 ">
        <Link to='/'>
        <img  className="logo-icon" src={logo}/></Link>
      
        <div className="links flex gap-6">
          <p className="text-lg text-white">Movies</p>
          <p className="text-lg text-white">Series</p>
        </div>
      
       </div>
    
    

         <div className="right-section flex gap-6">
            <div className="search-bar flex items-center pr-35 relative ">

         
         
          <input  className="text-lg h-10 pl-12 bg-transparent border-solid  border-stone-600 border-2 rounded text-gray-300 " type="text"  placeholder="search movies/series"/>
          <img className="h-5 w-5 absolute  inset-y-1/2 -translate-y-2/4 left-4" src={search}/>
          
        </div>
        
        <div className="button flex gap-4">
          <Link to="/login">
          <button className="btn-primary">Login</button>
          </Link>
          <Link to="/login">
          <button className="btn-sec">Register</button>
          </Link>
        </div>
       
      </div>
    </nav>
  </header>
  )}