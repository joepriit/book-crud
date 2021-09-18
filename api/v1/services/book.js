"use strict";

const knex = require("../../db");
const moment = require("moment");

const createBook = (data) => {
  return new Promise(async (resolve) => {
    try {
      data.created_at = moment().format();

      const ids = await knex("books").insert(data);
      if (!ids || !ids.length) {
        return resolve({
          success: false,
          message: "Database error, failed to create book",
        });
      }

      return resolve({
        success: true,
        data: ids[0],
      });
    } catch (error) {
      console.log(error);
      return resolve({
        success: false,
        message: "Database error, failed to create book",
      });
    }
  });
};

const fetchBooks = ({ search }) => {
  return new Promise(async (resolve) => {
    try {
      const books = await knex("books").modify((queryBuilder) => {
        if (search) {
          queryBuilder.andWhere("name", "like", `%${search}%`);
        }
      });

      return resolve({
        success: true,
        data: books || [],
      });
    } catch (error) {
      console.log(error);
      return resolve({
        success: false,
        message: "Database error, failed to fetch books",
      });
    }
  });
};

const eraseBooks = () => {
  return new Promise(async (resolve) => {
    try {
      await knex("books").delete();

      return resolve({
        success: true,
      });
    } catch (error) {
      console.log(error);
      return resolve({
        success: false,
        message: "Database error, failed to delete books",
      });
    }
  });
};

const fetchBook = ({ id }) => {
  return new Promise(async (resolve) => {
    try {
      const book = await knex("books").where("id", id).first();

      if (!book || !book.id) {
        return resolve({
          success: false,
          message: "Database error, failed to fetch book by id",
        });
      }

      return resolve({
        success: true,
        data: book,
      });
    } catch (error) {
      console.log(error);
      return resolve({
        success: false,
        message: "Database error, failed to fetch book by id",
      });
    }
  });
};

const editBook = ({ id }, data) => {
  return new Promise(async (resolve) => {
    try {
      await knex("books").where("id", id).update(data);

      return resolve({
        success: true,
      });
    } catch (error) {
      console.log(error);
      return resolve({
        success: false,
        message: "Database error, failed to edit book",
      });
    }
  });
};

const eraseBook = ({ id }) => {
  return new Promise(async (resolve) => {
    try {
      await knex("books").where("id", id).delete();

      return resolve({
        success: true,
      });
    } catch (error) {
      console.log(error);
      return resolve({
        success: false,
        message: "Database error, failed to delete book",
      });
    }
  });
};

module.exports = {
  createBook,
  fetchBooks,
  eraseBooks,
  fetchBook,
  editBook,
  eraseBook,
};
