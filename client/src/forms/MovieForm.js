import React from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
import {AuthContext} from "../providers/AuthProvider";
import {useFormInput,} from "./useFormInput";

 AddMovieForm =()=> {
  const {user} = useContext(AuthContext)
  const title = useFormInput("")
  const summary = ueseFormInput("")
  const genre = useFormInput("")
  const run_time = useFormInput("")
  const rating = useFormInput("")
  

  MovieHold = {title:title.value, summary:summary, genre:genre, run_time:run_time, rating:rating}

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/api/users/${user}/movies`, MovieHold)
    .then(res => {
      
      this.setState(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }



  render() {
    const { title, summary, genre, run_time, rating } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Title"
            placeholder="Title"
            name="title"
            required
            value={title}
            onChange={this.handleChange}
          />
          <Form.TextArea
            label="Summary"
            placeholder="Summary"
            name="summary"
            required
            value={summary}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Genre"
            placeholder="Genre"
            name="genre"
            required
            value={genre}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Run Time"
            placeholder="Run Time in Minutes"
            name="run_time"
            required
            value={run_time}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Rating"
            placeholder="Rating"
            name="rating"
            required
            value={rating}
            onChange={this.handleChange}
          />
          <Button type="submit">add</Button>
        </Form>
      </>
    );
  }
}

export default class ConnectedAddMovieForm extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <AddMovieForm {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}