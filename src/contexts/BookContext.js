import React, { createContext, useReducer } from 'react';
import BookReducer from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(BookReducer, [
    { title: 'The wings of fire', author: 'Patrick Rofus', id: 1 },
    { title: 'The blades of fury', author: 'Melissa Adams', id: 2 },
    { title: 'The order of phoenix', author: 'J.K Rowling', id: 3 }
  ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
