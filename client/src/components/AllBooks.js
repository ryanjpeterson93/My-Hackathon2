import React, { useState, useEffect, useContext } from 'react';
import axios from "axios"
import Book from './Book';
import {Button} from 'semantic-ui-react';
import BookForm from '../components/forms/BookForm';


const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false)
  

  useEffect(() => {
    axios.get("/api/books/all_books")
      .then(res => {
        setBooks(res.data)
        console.log(res.data)
        console.log(showForm)
      })
  }, []);

  const addBook = (book) => {
    setBooks([book, ...books])
  };

  const deleteBook = (id, user_id) => {
    axios.delete(`/api/users/${user_id}/books/${id}`)
      .then( res => {
        setBooks(books.filter( (book) => book.id !== id))
      })
  }


  const editBook = (id, book, user_id) => {
    axios.put(`api/users/${user_id}/books/${id}`, book)
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

  const handleClick = (e) => {
    setShowForm(!showForm);
    console.log('click')
    console.log(showForm)
  }

  return (
    <div>
      <h1>All Books</h1>
      <br />
      <Button color="blue" onClick={handleClick}>{showForm ? "Close Add Form" : "Show Add Form"}</Button>
      {showForm && <BookForm addBook={addBook} toggleForm={setShowForm} />}
      <br />
      <br />
      {renderBooks()}
    </div>
  );
};

export default AllBooks;
