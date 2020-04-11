import React, {  useState, useEffect, } from "react";
import { Link, } from "react-router-dom";
import { Card, } from 'semantic-ui-react';
import axios from 'axios';

const Book = (props) => {
  const { books, setBooks } = useState([]);
 
  const book = {id: props.id, title: props.title, author: props.author, summary: props.summary, genre: props.genre,}

  return (
    <Card>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>{props.genre}</Card.Meta>
      <Card.Meta>{props.author}</Card.Meta>
      <Card.Content>{props.summary}</Card.Content>
    </Card>
  )
}

export default Book;