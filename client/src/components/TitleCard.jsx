import React, { useEffect, useRef, useState } from 'react'
import '../styles/titleCard.css';
import { Link } from 'react-router-dom';

const Titlecard = ({title, category}) => {
const [apiData,setApiData]=useState([]);

const cardsRef=useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWJkYmIwMDRjYmNkY2Q2Nzk3ODE3NTg2YWJlZDg1NiIsIm5iZiI6MTc0MDE0NjQ1MC41MjEsInN1YiI6IjY3Yjg4NzEyNTUwMzI5Mjc1NjIyN2ZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0_O35Y7ciQbTC_O0C9FQV9Qfq2XYqxN7wE88GFbr3KE'
  }
};

const handleWheel= (event)=>{
event.preventDefault();
cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel)
},[])
  return (
    <div className='title-cards-container  px-20'>
      <h2 className='text-gray-100 text-2xl font-semibold'>{title}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} key={index}>
            <div className='card'>
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/original`+card.poster_path} alt="card_image" />

           
            </div>
            </Link>
          
        })}
      </div>
    </div>
  )
}

export default Titlecard
//api read access token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWJkYmIwMDRjYmNkY2Q2Nzk3ODE3NTg2YWJlZDg1NiIsIm5iZiI6MTc0MDE0NjQ1MC41MjEsInN1YiI6IjY3Yjg4NzEyNTUwMzI5Mjc1NjIyN2ZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0_O35Y7ciQbTC_O0C9FQV9Qfq2XYqxN7wE88GFbr3KE

// api key:9ebdbb004cbcdcd6797817586abed856
