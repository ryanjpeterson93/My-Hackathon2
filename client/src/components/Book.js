import React, {  useState, useEffect, useContext } from "react";
import { Card, Button, } from 'semantic-ui-react';
import BookForm from '../components/forms/BookForm';
import {AuthContext,} from "../providers/AuthProvider";

const Book = (props) => {
  const { books, setBooks } = useState([]);
  const { user } = useContext(AuthContext)
  const [editing, setEditing] = useState(false);
 
  const book = {id: props.id, title: props.title, author: props.author, summary: props.summary, genre: props.genre,}

  return (
    <>
    <Card>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>{props.genre}</Card.Meta>
      <Card.Meta>{props.author}</Card.Meta>
      <Card.Content>{props.summary}</Card.Content>
        <Button color="blue" onClick={() => setEditing(!editing)}>Edit</Button>
        <Button color="red" onClick={() => props.deleteBook(props.id, user.id)}>Delete</Button>
        { editing && <BookForm toggleEdit={setEditing} editBook={props.editBook} {...props} />}
    </Card>
    </>
  )
};

export default Book;
