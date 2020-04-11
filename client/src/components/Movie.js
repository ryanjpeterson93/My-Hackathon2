import React, {  useState, useEffect, } from "react";
import { Link, } from "react-router-dom";
import { Card, } from 'semantic-ui-react';
import axios from 'axios';

const Movie = (props) => {
  const { movies, setMovies } = useState([]);
  const { editing, setEditing } = useState(false);
 
  const book = {id: props.id, title: props.title, summary: props.summary, genre: props.genre, run_time: props.run_time, rating: props.rating, }

  return (
    <Card>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>{props.genre}</Card.Meta>
      <Card.Meta>{props.run_time} min</Card.Meta>
      <Card.Meta>Rated: {props.rating}</Card.Meta>
      <Card.Content>{props.summary}</Card.Content>
    </Card>
  )
}

export default Movie;