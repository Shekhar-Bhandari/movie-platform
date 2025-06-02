import cart from "../images/icons/icon-cart.svg";
import add from "../images/icons/icon-add.svg";
import imdb from "../images/logos/imdb.svg";
import rotten from "../images/logos/rotten.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import leftArrow from "../images/icons/arrow-left.svg";

import avatar1 from "../images/icons/avatars/avatar1.png";
import avatar2 from "../images/icons/avatars/avatar2.png";
import avatar3 from "../images/icons/avatars/avatar3.png";
import avatar4 from "../images/icons/avatars/avatar4.png";
import avatar5 from "../images/icons/avatars/avatar5.png";
import avatar6 from "../images/icons/avatars/avatar6.png";

export default function MovieDetail(props){
  const navigate = useNavigate();
  function goBack(){
    navigate(-1);
  }
  return (
    <>
    <div className="bg-black flex flex-col px-28 mt-16 pt-16 pb-12 w-full">
    <button className="w-11 h-11 bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center rounded-full" onClick={goBack}>
              <img src={leftArrow} alt="Back" className="w-6 h-6" />
            </button>

    <section className="flex items-center ">
      <div className="left-section pt-10 w-3/6 ">
        <h2 className="text-5xl font-bold  text-stone-200 mb-2">{props.name}</h2>
        <p className="text-gray-500 text-base mb-2">{props.year}  &bull;{props.type} &bull;{props.runTime} mins</p>
        <p className="my-6 text-base text-gray-200 w-3/4">
        {props.intro}
        </p>



        <div className="flex items-center justify-between space-x-4 my-8  w-3/4">
          <div className="flex items-center gap-5">

          <Link to="/checkout">
          <button className="btn-primary">Buy/Rent</button>
          </Link>
          <h4 className="text-stone-200" >RS.{props.price.buy} / RS.{props.price.rent}</h4> 
          </div>

          <div className="flex gap-6">
            <button  className="w-10 h-10 hover:bg-stone-800 gird place-items-center rounded">
            <img src={cart} className="w-6 h-6"/>
            </button>
            <button className="w-10 h-10 hover:bg-stone-800 gird place-items-center rounded">
            <img src={add} className="w-6 h-6"/>
            </button>
          </div>
        </div>

      <div className=" text-gray-500 border-t-2 pt-4 border-solid border-stone-800 w-3/4">
      <p>{props.count.watchlistCount}k people have this on their watchlist</p>
      <p>{props.count.rentCount}k people have rented this movie</p>
      </div>
      <div className="flex items-center gap-10 my-8">
      <img src= {imdb}alt="imdb" className="" />
      <img src={rotten} alt="rotten tomatoes" className=""/>
      </div>

      </div>
    {/*Embedded youtube video */}
    <div className="w-1">
    <iframe 
      className="w-full h-full" 
      src={`https://www.youtube.com/embed/${apiData.key}?autoplay=1&mute=1&constrols=0&showinfo=0&modestbranding=1`} 
      title="trailer" 
      frameBorder="0" 
      allowFullScreen  
      allow="autoplay; encrypted-media">
    </iframe>
    </div>

    </section>
    </div>
{/*Movie detail section like genre,cast,language */}
    <section className="details bg-slate-800">
    <div className="bg-slate-950 text-white px-24 py-12 mt-2 space-y-8">
        <div className="border-b-2 border-slate-800 pb-6 flex items-center gap-12"> 
          <h2 className="text-lg font-medium text-gray-400 mb-2 flex space-x-2">Genre</h2>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-gray-800 rounded text-sm">Horror</span>
            <span className="px-3 py-1 bg-gray-800 rounded text-sm">Fantasy</span>
          </div>
        </div>
        <div className="border-b-2 border-slate-800 pb-6">
          <h2 className="text-lg font-medium text-gray-400 mb-4">Cast</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <div className="text-center">
              <img
                src={avatar1}
                alt="Actor 1"
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="text-sm font-semibold mt-2">Lily-Rose Depp</p>
              <p className="text-xs text-gray-400">as 'Ellen Hunter'</p>
            </div>
            <div className="text-center">
              <img
                src= {avatar2}
                alt="Actor 2"
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="text-sm font-semibold mt-2">Willem Dafoe</p>
              <p className="text-xs text-gray-400">as 'Prof. Albin Eberhart'</p>
            </div>
            <div className="text-center">
              <img
                src = {avatar3}
                alt="Actor 3"
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="text-sm font-semibold mt-2">Nicholas Hoult</p>
              <p className="text-xs text-gray-400">as 'Thomas Hunter'</p>
            </div>
            <div className="text-center">
              <img
                src={avatar4}
                alt="Actor 4"
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="text-sm font-semibold mt-2">Aaron Taylor-Johnson</p>
              <p className="text-xs text-gray-400">as 'Friedrich Harding'</p>
            </div>
            <div className="text-center">
              <img
                src={avatar5}
                alt="Actor 5"
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="text-sm font-semibold mt-2">Emma Corrin</p>
              <p className="text-xs text-gray-400">as 'Anna Harding'</p>
            </div>
            <div className="text-center">
              <img
                src={avatar6}
                alt="Actor 6"
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="text-sm font-semibold mt-2">Bill Skarsgård</p>
              <p className="text-xs text-gray-400">as 'Count Orlok'</p>
            </div>
          </div>
        </div>
      
        <div className="border-b-2 border-slate-800 pb-6 flex items-start gap-12">
          <h2 className="text-lg font-medium text-gray-400 mb-2">Director</h2>
          <div className="flex flex-col gap-2  items-center justify-center space-x-4">
            <img
              src={avatar4}
              alt="Director"
              className="w-16 h-16 rounded-full"
            />
            <p className="text-sm font-semibold">Robert Eggers</p>
          </div>
        </div>
      
        <div className="flex gap-12 items-center">
          <p className="text-lg font-medium mb-2 text-gray-400 ">Language available</p>
          <p className="text-sm ">Hindi, English, French, German</p>
        </div>
      </div>

      <div className="bg-black text-white px-24 space-y-8">

        {/*reviews section*/}
        <div className="review-section py-12  w-3/4 ">

          <h2 className=" text-lg font-semibold mb-10">Reviews (159)</h2>
          <div className="flex items-center space-x-4 mb-10 ">
            <img
              src={avatar2}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <input
              type="text"
              placeholder="Add a review"
              className="flex-1 h-10 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm "
            />
            <button className="btn-sec ">Add</button>
          </div>
      
         
          <div className=" mt-6 space-y-10">
            <div className="flex items-start space-x-4">
              <img
                src={avatar6}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-sm font-semibold">elena</h3>
                  <div className="flex text-yellow-400">
                    ★★★★☆
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Robert Eggers, you've done it again... I would marry the lighting in this movie if I could. I loved everything, but the lighting I love the most.
                </p>
              </div>
            </div>
      
           
            <div className="flex items-start space-x-4">
              <img
                src={avatar3}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-sm font-semibold">Faith</h3>
                  <div className="flex text-yellow-400">
                    ★★★★☆
                  </div>
                </div>
                <p className="text-sm text-gray-400">TW: handlebar mustache</p>
              </div>
            </div>
      
            <div className="flex items-start space-x-4">
              <img
                src={avatar4}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-sm font-semibold">lucaslisbon</h3>
                  <div className="flex text-yellow-400">
                    ★★★★☆
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  I've been wanting to watch a Robert Eggers film, and so this is the first one. The cinematography is simply amazing, and the cast did a fantastic job. S/O William Dafoe; he was my favorite, especially when his character said, "If we are to tame darkness, we must first face that it exists." Peak Cinema.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    </>
  )
}