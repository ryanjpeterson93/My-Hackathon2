import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { Card } from "semantic-ui-react";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("/api/movies/all_movies").then((res) => {
      setMovies(res.data);
      console.log(res.data);
    });
  }, []);

  console.log(movies);

  const renderMovies = () => {
    return movies.map((movie) => (
      <>
        <Card>
          <Card.Header>{movie.title}</Card.Header>
          <Card.Meta>Summary: {movie.summary}</Card.Meta>
          <Card.Meta>Genre: {movie.genre}</Card.Meta>
          <Card.Content>Runtime: {movie.run_time}mins</Card.Content>
          <hr />
          <Card.Content>Rating {movie.rating}</Card.Content>
        </Card>
      </>
    ));
  };

  const deleteMovie = (id) => {
    axios.delete(`/api/movies/${id}`).then((res) => {
      setMovies(movies.filter((movie) => movie.id !== id));
    });
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
