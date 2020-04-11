import React from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
import {AuthContext} from "../providers/AuthProvider";
import {useFormInput,} from "./useFormInput";

const BookForm = () => {
  const {user} = useContext(AuthContext)
  const title = useFormInput("")
  const author = useFormInput("")
  const summary = useFormInput("")
  const genre = useFormInput("")
}
  // t.string "title"
  // t.string "author"
  // t.text "summary"
  // t.string "genre"

  BookHold = { title, author, summary, genre, }
  

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
    const { title, author, summary, genre } = this.state;
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
          <Form.Input
            label="Albums"
            placeholder="Albums"
            name="album"
            required
            value={albums}
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
          <Button type="submit">add</Button>
        </Form>
      </>
    );
  }
}
export default BookForm;
