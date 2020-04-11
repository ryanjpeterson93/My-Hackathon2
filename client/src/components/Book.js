import React, {  useState, useEffect, } from "react";
import { Link, } from "react-router-dom";
import { Card, Button, } from 'semantic-ui-react';
import axios from 'axios';
import BookForm from '../forms/BookForm';

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
      <Card.Footer>
        <Button color="blue" onClick={() => setEditing(!editing)}>Edit</Button>
        <Button color="red">Delete</Button>
        { editing && <BookForm toggleEdit={setEditing} editBook={props.editBook} {...props} />}
      </Card.Footer>
    </Card>
    <br />
    <br />
    </>
  )
};

export default Book;
