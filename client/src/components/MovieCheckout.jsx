import React from "react";
import cart from "../images/icons/icon-cart.svg";
import add from "../images/icons/icon-add.svg";
import play from "../images/icons/icon-play.svg";
import imdb from "../images/logos/imdb.svg";
import rotten from "../images/logos/rotten.svg";
import letterboxd from "../images/logos/letterboxd.svg";
import leftArrow from "../images/icons/arrow-left.svg";
import { Link } from "react-router-dom";
import { useNavigate,useParams } from "react-router-dom";

export default function MovieCheckoutCard(props){

  const {id} = useParams();
  const navigate = useNavigate();
  function goBack(){
    navigate(-1);
  }
  return (
    <div className="flex gap-10 mt-20 items-start justify-center bg-neutral-950 w-full px-96 pb-20 pt-28">
      {/* Poster */}
      <div className="flex flex-col gap-6">
        <img 
          src={props.img} 
          className="w-72"  
          style={{ flexShrink: 0 }} 
          alt="Nosferatu Poster"
        />
        <div className="flex w-full justify-between">
          <img src={imdb} className="w-10" alt="IMDb" />
          <img src={letterboxd} className="w-12" alt="Letterboxd" />
          <img src={rotten} className="w-16" alt="Rotten Tomatoes" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col w-full gap-6">
        <button className="w-11 h-11 bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center rounded-full" onClick={goBack}>
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </button>
        
        <div className="flex flex-col gap-0">
          <p className="text-3xl text-neutral-200 font-medium">{props.name}</p>
          <div className="flex gap-2 mt-1">
            <p className="text-neutral-400">{props.year.slice(0,4)}</p>
            <span className="text-neutral-400">&bull;</span>
            <p className="text-neutral-400">{props.type}</p>
            <span className="text-neutral-400">&bull;</span>
            <p className="text-neutral-400">{props.runtime} mins</p>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="px-3 py-2 rounded-md hover:bg-neutral-900 text-neutral-200 text-base border-2 border-neutral-800 flex items-center gap-2">
              <img src={play} alt="Play" className="w-5 h-5" />
              <p>Watch Trailer</p>
            </button>
            <button className="px-3 py-2 rounded-md hover:bg-neutral-900 text-neutral-200 text-base border-2 border-neutral-800 flex items-center gap-2">
              <img src={add} alt="Add to Watchlist" className="w-5 h-5" />
              <p>Watchlist</p>
            </button>
          </div>

          {/* Pricing Section */}
          <div className="bg-neutral-900 p-5 rounded-md flex flex-col gap-4 my-10">
            {/* Buy Section */}
            <div className=" border-b-2 border-stone-800 pb-4">
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <Link to={`/payment/${id}`}>
                  <button className="btn-primary">Buy Now</button>
                  </Link>
                  <p className="text-lg font-semibold text-neutral-200">Rs.{props.price.buy}</p>
                </div>
                <button className="w-11 h-11 flex items-center justify-center rounded-md hover:bg-neutral-800">
                  <img src={cart} alt="Cart" className="w-6 h-6" />
                </button>
              </div>
              <p className="text-base text-neutral-400 mt-2">Want to watch it multiple times? Buy it!</p>
            </div>


            {/* Rent Section */}
            <div>
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <Link to={`/payment/${id}`}>
                  <button className="btn-primary">Rent Now</button>
                  </Link>
                  <p className="text-lg font-semibold text-neutral-200">Rs.{props.price.rent}</p>
                </div>
                <button className="w-11 h-11 hover:bg-neutral-800 flex items-center justify-center rounded-md">
                  <img src={cart} alt="Cart" className="w-6 h-6" />
                </button>
              </div>
              <p className="text-base text-neutral-400 mt-2">Just here for the night? Rent it!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


