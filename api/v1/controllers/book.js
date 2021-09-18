"use strict";

const {
  createBook,
  fetchBooks,
  eraseBooks,
  fetchBook,
  editBook,
  eraseBook,
} = require("../services/book");

const postBook = async (req, res) => {
  const response = await createBook(req.body);
  res.json(response);
};

const getBooks = async (req, res) => {
  const response = await fetchBooks(req.query);
  res.json(response);
};

const deleteBooks = async (req, res) => {
  const response = await eraseBooks();
  res.json(response);
};

const getSingleBook = async (req, res) => {
  const response = await fetchBook(req.params);
  res.json(response);
};

const putSingleBook = async (req, res) => {
  const response = await editBook(req.params, req.body);
  res.json(response);
};

const deleteSingleBook = async (req, res) => {
  const response = await eraseBook(req.params);
  res.json(response);
};

module.exports = {
  postBook,
  getBooks,
  deleteBooks,
  getSingleBook,
  putSingleBook,
  deleteSingleBook,
};
