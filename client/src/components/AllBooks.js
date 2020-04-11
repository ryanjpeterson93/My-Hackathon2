import React, { useState, useEffect, } from 'react';
import axios from "axios"
import Book from './Book';



const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  

  useEffect(() => {
    axios.get("/api/books")
      .then(res => {
        setBooks(res.data)
        console.log(res.data)
      })
  }, []);


  const editBook = (id, book) => {
    axios.put(`api/books/${id}`, book)
      .then( res => {
        const updateBook = books.map( book => {
          if(book.id === id)
            return res.data
          return book;
        })
        setBooks(updateBook)
      })
  }

  const renderBooks = () => {
    return books.map( book => (
      <Book key={book.id} {...book} editBook={editBook}/>
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
