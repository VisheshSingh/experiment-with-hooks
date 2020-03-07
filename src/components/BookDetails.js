import React from 'react';

const BookDetails = ({ book }) => {
  return (
    <ul>
      <li>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </li>
    </ul>
  );
};

export default BookDetails;
