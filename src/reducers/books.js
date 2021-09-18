import {
  CREATE_BOOK,
  FETCH_BOOKS,
  UPDATE_BOOK,
  DELETE_BOOK,
  DELETE_BOOKS,
} from "../actions/types";

const initialState = [];

function bookReducer(books = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_BOOK:
      return [...books, payload];

    case FETCH_BOOKS:
      return payload;

    case UPDATE_BOOK:
      return books.map((book) => {
        if (book.id === payload.id) {
          return {
            ...book,
            ...payload,
          };
        } else {
          return book;
        }
      });

    case DELETE_BOOK:
      return books.filter(({ id }) => id !== payload.id);

    case DELETE_BOOKS:
      return [];

    default:
      return books;
  }
}

export default bookReducer;
