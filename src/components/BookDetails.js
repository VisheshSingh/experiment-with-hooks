import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <ul>
      <li onClick={() => dispatch({ type: 'DELETE_BOOK', payload: book.id })}>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </li>
    </ul>
  );
};

export default BookDetails;
