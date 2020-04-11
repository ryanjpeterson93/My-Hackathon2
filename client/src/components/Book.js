import React, {  useState, useEffect, } from "react";
import { Card, Button, } from 'semantic-ui-react';
import BookForm from '../components/forms/BookForm';

const Book = (props) => {
  const { books, setBooks } = useState([]);
  const [editing, setEditing] = useState(false);
 
  const book = {id: props.id, title: props.title, author: props.author, summary: props.summary, genre: props.genre,}

  return (
    <>
    <Card>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>{props.genre}</Card.Meta>
      <Card.Meta>{props.author}</Card.Meta>
      <Card.Content>{props.summary}</Card.Content>
        <Button color="blue">Edit</Button>
        <Button color="red">Delete</Button>
        { editing && <BookForm toggleEdit={setEditing} editBook={props.editBook} {...props} />}
    </Card>
    </>
  )
};

export default Book;
