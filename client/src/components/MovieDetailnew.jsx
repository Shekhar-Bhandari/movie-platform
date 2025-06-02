import cart from "../images/icons/icon-cart.svg";
import add from "../images/icons/icon-add.svg";
import imdb from "../images/logos/imdb.svg";
import rotten from "../images/logos/rotten.svg";
import { Link, useNavigate } from "react-router-dom";
import leftArrow from "../images/icons/arrow-left.svg";

import avatar1 from "../images/icons/avatars/avatar1.png";
import avatar2 from "../images/icons/avatars/avatar2.png";
import avatar3 from "../images/icons/avatars/avatar3.png";
import avatar4 from "../images/icons/avatars/avatar4.png";
import avatar5 from "../images/icons/avatars/avatar5.png";
import avatar6 from "../images/icons/avatars/avatar6.png";

export default function MovieDetail(props) {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <div className="bg-black flex flex-col px-28 mt-16 pt-16 pb-12 w-full">
        <button
          className="w-11 h-11 bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center rounded-full"
          onClick={goBack}
        >
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </button>

        <section className="flex items-center ">
          <div className="left-section pt-10 w-3/6 ">
            <h2 className="text-5xl font-bold  text-stone-200 mb-2">
              {props.name}
            </h2>
            <p className="text-gray-500 text-base mb-2">
              {props.year} &bull; {props.type} &bull; {props.runTime} mins
            </p>
            <p className="my-6 text-base text-gray-200 w-3/4">{props.intro}</p>

            <div className="flex items-center justify-between space-x-4 my-8 w-3/4">
              <div className="flex items-center gap-5">
                <Link to="/checkout">
                  <button className="btn-primary">Buy/Rent</button>
                </Link>
                <h4 className="text-stone-200">
                  RS.{props.price.buy} / RS.{props.price.rent}
                </h4>
              </div>

              <div className="flex gap-6">
                <button className="w-10 h-10 hover:bg-stone-800 grid place-items-center rounded">
                  <img src={cart} className="w-6 h-6" />
                </button>
                <button className="w-10 h-10 hover:bg-stone-800 grid place-items-center rounded">
                  <img src={add} className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="text-gray-500 border-t-2 pt-4 border-solid border-stone-800 w-3/4">
              <p>{props.count.watchlistCount}k people have this on their watchlist</p>
              <p>{props.count.rentCount}k people have rented this movie</p>
            </div>

            <div className="flex items-center gap-10 my-8">
              <img src={imdb} alt="imdb" />
              <img src={rotten} alt="rotten tomatoes" />
            </div>
          </div>

          {/* Embedded YouTube Video */}
          <div className="w-1/2 ml-10">
            <iframe
              className="w-full h-96"
              src={`https://www.youtube.com/embed/${props.videoKey}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1`}
              title="trailer"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </section>
      </div>

      {/* Movie Detail Section: genre, cast, director, language */}
      <section className="details bg-slate-800">
        <div className="bg-slate-950 text-white px-24 py-12 mt-2 space-y-8">
          <div className="border-b-2 border-slate-800 pb-6 flex items-center gap-12">
            <h2 className="text-lg font-medium text-gray-400 mb-2 flex space-x-2">
              Genre
            </h2>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">Horror</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-sm">Fantasy</span>
            </div>
          </div>

          <div className="border-b-2 border-slate-800 pb-6">
            <h2 className="text-lg font-medium text-gray-400 mb-4">Cast</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[avatar1, avatar2, avatar3, avatar4, avatar5, avatar6].map((avatar, idx) => (
                <div className="text-center" key={idx}>
                  <img src={avatar} alt={`Actor ${idx + 1}`} className="w-16 h-16 rounded-full mx-auto" />
                  <p className="text-sm font-semibold mt-2">Actor Name {idx + 1}</p>
                  <p className="text-xs text-gray-400">as Character</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b-2 border-slate-800 pb-6 flex items-start gap-12">
            <h2 className="text-lg font-medium text-gray-400 mb-2">Director</h2>
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src={avatar4} alt="Director" className="w-16 h-16 rounded-full" />
              <p className="text-sm font-semibold">Robert Eggers</p>
            </div>
          </div>

          <div className="flex gap-12 items-center">
            <p className="text-lg font-medium mb-2 text-gray-400">Language available</p>
            <p className="text-sm">Hindi, English, French, German</p>
          </div>
        </div>
      </section>
    </>
  );
}
