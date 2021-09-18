import {
  CREATE_BOOK,
  FETCH_BOOKS,
  UPDATE_BOOK,
  DELETE_BOOK,
  DELETE_BOOKS,
} from "./types";

import BookDataService from "../services/book.service";

export const createBook =
  (name, description, published) => async (dispatch) => {
    try {
      const res = await BookDataService.create({
        name,
        description,
        published,
      });

      if (res.data.success) {
        dispatch({
          type: CREATE_BOOK,
          payload: res.data.data,
        });
      }

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const fetchBooks = () => async (dispatch) => {
  try {
    const res = await BookDataService.getAll();
    if (res.data.success) {
      dispatch({
        type: FETCH_BOOKS,
        payload: res.data.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateBook = (id, data) => async (dispatch) => {
  try {
    const res = await BookDataService.update(id, data);

    if (res.data.success) {
      dispatch({
        type: UPDATE_BOOK,
        payload: data,
      });
    }

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    const res = await BookDataService.delete(id);

    if (res.data.success) {
      dispatch({
        type: DELETE_BOOK,
        payload: { id },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteBooks = () => async (dispatch) => {
  try {
    const res = await BookDataService.deleteAll();

    if (res.data.success) {
      dispatch({
        type: DELETE_BOOKS,
        payload: res.data,
      });
    }

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const searchBooks = (name) => async (dispatch) => {
  try {
    const res = await BookDataService.search(name);

    if (res.data.success) {
      dispatch({
        type: FETCH_BOOKS,
        payload: res.data.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
