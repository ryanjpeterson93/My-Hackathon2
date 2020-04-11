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
    <Card key ={id}>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{genre}</Card.Meta>
      <Card.Meta>{run_time} min</Card.Meta>
      <Card.Meta>Rated: {rating}</Card.Meta>
      <Card.Content>{summary}</Card.Content>
      <Card.Footer>
        <Button color="blue" onClick={() => setEditing(!editing)}>Edit</Button>
        <Button color="red">Delete</Button>
        { editing && <MovieForm toggleEdit={setEditing} editing={editMovie} {...props} add={addMovie} />}
      </Card.Footer>
    </Card>
  )
}

export default Movie;