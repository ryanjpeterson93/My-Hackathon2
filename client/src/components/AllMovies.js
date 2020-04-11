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


  const renderMovies = () => {
    return movies.map( movie => (
      <Movie key={movie.id} {...movie} />
    ))
  };

  return (
    <div>
      <h1 align="center">All Movies</h1>
      <hr />
      {renderMovies()}
    </div>
  );
};

export default AllMovies;