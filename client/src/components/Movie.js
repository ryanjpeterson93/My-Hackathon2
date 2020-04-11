import React, {  useState, useEffect, } from "react";
import { Link, } from "react-router-dom";
import { Card, Button, } from 'semantic-ui-react';
import axios from 'axios';
import MovieForm from '../forms/MovieForm'

const Movie = (props) => {
  const { movies, setMovies } = useState([]);
  const { editing, setEditing } = useState(false);
  
  const toggle = () => {
    setEditing({ editing: !setEditing })
  }


  const {id,title,summary,genre,run_time,rating,addMovie,editMovie}=props
  return (
    <Card>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>{props.genre}</Card.Meta>
      <Card.Meta>{props.run_time} min</Card.Meta>
      <Card.Meta>Rated: {props.rating}</Card.Meta>
      <Card.Content>{props.summary}</Card.Content>
      <Button color="blue">Edit</Button>
      <Button color="red">Delete</Button>
    </Card>
  )
}

export default Movie;