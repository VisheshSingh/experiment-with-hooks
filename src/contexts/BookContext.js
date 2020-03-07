import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'The wings of fire', author: 'Patrick Rofus', id: 1 },
    { title: 'The blades of fury', author: 'Melissa Adams', id: 2 },
    { title: 'The order of phoenix', author: 'J.K Rowling', id: 3 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: Math.random() * 100000 }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
