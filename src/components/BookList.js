import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = props => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className='book-list'>
      {books.map(book => (
        <BookDetails key={book.id} book={book} />
      ))}
    </div>
  ) : (
    <div className='empty'>No more books to list, free time 😄</div>
  );
};

export default BookList;
