import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
import {AuthContext,} from "../../providers/AuthProvider";

const MovieForm = (props) => {
  const { user } = useContext(AuthContext)
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [genre, setGenre] = useState('')
  const [run_time, setRun_Time] = useState('')
  const [rating, setRating] = useState('')
  const [user_id, setUser_id] = useState('');


  const movie = { title: title, summary: summary, genre: genre, run_time: run_time, rating: rating }


  useEffect ( () => {
    if (props.id) {
      setTitle(props.title)
      setSummary(props.summary)
      setGenre(props.genre)
      setRun_Time(props.run_time)
      setRating(props.rating)
      setUser_id(user.id)
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.editMovie) {
      props.editMovie(props.id, movie, user.id)
      // toggle form after info is submitted
      props.toggleEdit()
    } else {
      axios.post(`/api/users/${user.id}/movies`, movie)
        .then( res => {
          props.addMovie(res.data)
          props.toggleForm();
        })
    }
  };

    return (
      <>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            label="Title"
            placeholder="Title"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.TextArea
            label="Summary"
            placeholder="Summary"
            name="summary"
            required
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          <Form.Input
            label="Genre"
            placeholder="Genre"
            name="genre"
            required
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <Form.Input
            label="Runtime between 65 and 185 minutes"
            placeholder="Runtime"
            name="run_time"
            required
            value={run_time}
            onChange={(e) => setRun_Time(e.target.value)}
          />
          <Form.Input
            label="Rating"
            placeholder="Rating"
            name="rating"
            required
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <Button color="green" type="submit">Submit</Button>
        </Form>
      </>
    );
};

export default MovieForm;
