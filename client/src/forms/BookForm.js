import React, { useState, useEffect, } from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
import {AuthContext,} from "../providers/AuthProvider";
import {useFormInput,} from "./useFormInput";

const BookForm = (props) => {
  const { user } = useContext(AuthContext)
  // const title = useFormInput("")
  // const author = useFormInput("")
  // const summary = useFormInput("")
  // const genre = useFormInput("")
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [summary, setSummary] = useState('')
  const [genre, setGenre] = useState('')
  const [user_id, setUser_id] = useState(user.id);


  const book = { title: title, author: author, summary: summary, genre: genre }


  useEffect ( () => {
    if (props.id) {
      setTitle(props.title)
      setAuthor(props.author)
      setSummary(props.summary)
      setGenre(props.genre)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.editBook) {
      props.editBook(props.id, book)
      // toggle form after info is submitted
      props.toggleEdit()
    } else {
      axios.post("/api/books", book)
        .then( res => {
          props.addBook(res.data)
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
          <Form.Input
            label="Author"
            placeholder="Author"
            name="author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
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
          <Button color="green" type="submit">Submit</Button>
        </Form>
      </>
    );
};

export default BookForm;
