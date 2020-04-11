import React, { useState, useEffect, useContext } from 'react';
import axios from "axios"
import Book from './Book';
import {Button} from 'semantic-ui-react';
import BookForm from '../components/forms/BookForm';


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

  const addBook = (book) => setBooks([book, ...books])

  const deleteBook = (id) => {
    axios.delete(`/api/books/${id}`)
      .then( res => {
        setBooks(books.filter( (book) => book.id !== id))
      })
  }


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
      <Book key={book.id} {...book} editBook={editBook} deleteBook={deleteBook} />
    ))
  };

  return (
    <div>
      <h1>All Books</h1>
      <br />
      <Button color="blue" onClick={() => setShowForm(!setShowForm)}>
        {showForm ? "Close Form" : "Show Form"}
      </Button>
      {showForm && <BookForm addBook={addBook} toggleForm={setShowForm} />}
      <br />
      <br />
      {renderBooks()}
    </div>
  );
};

export default AllBooks;
