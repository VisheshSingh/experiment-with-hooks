export default (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
          id: Math.random() * 100000
        }
      ];
    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};
