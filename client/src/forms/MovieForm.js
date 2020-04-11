import React from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
import {AuthContext} from "../providers/AuthProvider";
import {useFormInput,} from "./useFormInput";

 const MovieForm =()=> {
  const {user} = useContext(AuthContext)
  const title = useFormInput("")
  const summary = useFormInput("")
  const genre = useFormInput("")
  const run_time = useFormInput("")
  const rating = useFormInput("")
  

  MovieHold = {title:title.value, summary:summary.value, genre:genre.value, run_time:run_time.value, rating:rating.value}

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.editing){
      axios.put(`/api/users/${user.id}/movies`, MovieHold)
    .then(res => {
      //push to main state
      (res=> props.history.goBack())
    })
    .catch(err => {
      console.log(err)
    })
  }else{

    axios.post(`/api/users/${user.id}/movies`, MovieHold)
    .then(res => {
      props.add() // add funtion 
      props.toggleForm()
    })
    .catch(err => {
      console.log(err)
    })

  }
}

    return (
      <>
        <Form onSubmit={handleSubmit()}>
          <Form.Input
            label="Title"
            placeholder={props.editing ? (props.title) : ("Title")}
            name="title"
            required
            {...title}
          />
          <Form.TextArea
            label="Summary"
            placeholder={props.editing ? (props.summary) : ("Summary")}
            name="summary"
            required
            {...summary}
          />
          <Form.Input
            label="Genre"
            placeholder={props.editing ? (props.genre) : ("Genre")}
            name="genre"
            required
            {...genre}
          />
          <Form.Input
            label="Run Time"
            placeholder={props.editing ? (props.run_time) : ("Run Time in Minutes")}
            name="run_time"
            required
            {...run_time}
          />
          <Form.Input
            label="Rating"
            placeholder={props.editing ? (props.rating) : ("Rating")}
            name="rating"
            required
            {...rating}
          />
          <Button type="submit">add</Button>
        </Form>
      </>
    );
 
}

export default MovieForm