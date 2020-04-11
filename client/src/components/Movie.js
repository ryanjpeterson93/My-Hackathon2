import React, {  useState, useEffect, useContext, } from "react";
import { Card, Button, } from 'semantic-ui-react';
import MovieForm from '../forms/MovieForm';
import {AuthContext} from '../providers/AuthProvider';

const Movie = (props) => {
  const { movies, setMovies } = useState([]);
  const { user } = useContext(AuthContext);
  const { editing, setEditing } = useState(false);
  
  const movie = { title: props.title, summary: props.summary, genre: props.genre, run_time: props.run_time, rating: props.rating}

  return (
    <Card>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>{props.genre}</Card.Meta>
      <Card.Meta>{props.run_time} min</Card.Meta>
      <Card.Meta>Rated: {props.rating}</Card.Meta>
      <Card.Content>{props.summary}</Card.Content>
      <Button color="blue" onClick={() => setEditing(!editing)}>Edit</Button>
      <Button color="red" onClick={() => props.deleteMovie(props.id, user.id)}>Delete</Button>
      { editing && <MovieForm toggleEdit={setEditing} editMovie={props.editMovie} {...props} />}
    </Card>
  )
}

export default Movie;