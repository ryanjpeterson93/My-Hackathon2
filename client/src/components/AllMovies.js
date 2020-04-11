import React, { useState, useEffect, useContext } from 'react';
import axios from "axios"
import Movie from './Movie';
import {Button} from 'semantic-ui-react';
import MovieForm from '../components/forms/MovieForm';


const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false)
  

  useEffect(() => {
    axios.get("/api/movies/all_movies")
      .then(res => {
        setMovies(res.data)
        console.log(res.data)
      })
  }, []);

  const addMovie = (movie) => {
    setMovies([movie, ...movies])
  };

  const deleteMovie = (id, user_id) => {
    axios.delete(`/api/users/${user_id}/movies/${id}`)
      .then( res => {
        setMovies(movies.filter( (movie) => movie.id !== id))
      })
  }

  const editMovie = (id, movie, user_id) => {
    axios.put(`api/users/${user_id}/movies/${id}`, movie)
      .then( res => {
        const updateMovie = movies.map( movie => {
          if(movie.id === id)
            return res.data
          return movie;
        })
        setMovies(updateMovie)
      })
  }
  const renderMovies = () => {
    return movies.map( movie => (
      <Movie key={movie.id} {...movie} editMovie={editMovie} deleteMovie={deleteMovie} />
    ))
  };

  const handleClick = (e) => {
    setShowForm(!showForm);
    console.log('click')
    console.log(showForm)
  }

  return (
    <div>
      <h1 align="center">All Movies</h1>
      <br />
      <Button color="blue" onClick={handleClick}>{showForm ? "Close Add Form" : "Show Add Form"}</Button>
      {showForm && <MovieForm addMovie={addMovie} toggleForm={setShowForm} />}
      <br />
      <br />
      {renderMovies()}
    </div>
  );
};

export default AllMovies;