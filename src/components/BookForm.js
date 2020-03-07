import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='Book title'
        required
      />
      <input
        type='text'
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder='Book Author'
        required
      />
      <input type='submit' value='Add Book' />
    </form>
  );
};

export default BookForm;
