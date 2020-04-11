import React, { useState, useEffect, } from 'react';
import axios from "axios"
import Book from './Book';



const AllBooks = () => {
  const [books, setBooks] = useState([]);
  

  useEffect(() => {
    axios.get("/api/books/all_books")
      .then(res => {
        setBooks(res.data)
        console.log(res.data)
      })
  }, []);


  const renderBooks = () => {
    return books.map( book => (
      <Book key={book.id} {...book} />
    ))
  };

  return (
    <div>
      <h1 align="center">All Books</h1>
      <hr />
      {renderBooks()}
    </div>
  );
};

export default AllBooks;