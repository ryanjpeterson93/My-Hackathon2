import React, { useState, useEffect, } from 'react';
import axios from "axios"
import Movie from './Movie';



const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    axios.get("/api/movies/all_movies")
      .then(res => {
        setMovies(res.data)
        console.log(res.data)
      })
  }, []);

console.log(movies)

const renderMovies = () =>{
  return movies.map(movie =>(
    <>
    <div>
    {movie.title}
    {movie.summary}
    {movie.genre}
    {movie.run_time}
    {movie.rating}
    </div>
    </>
  ))
}
  // const renderMovies = () => {
  //   return movies.map( movie => (
      // <div key = {`movie-${movie.id}`}>
      //  <Movie movie={movie} />
    //   <div>
  //   ))
  // };

  const deleteMovie = (id) => {
    axios.delete(`/api/movies/${id}`)
      .then( res => {
        setMovies(movies.filter( (movie) => movie.id !== id))
      })
  }

  return (
    <div>
      <h1 align="center">All Movies</h1>
      <hr />
      {renderMovies()}
    </div>
  );
};

export default AllMovies;