"use strict";

const router = require("express").Router();

const {
  postBook,
  getBooks,
  deleteBooks,
  getSingleBook,
  putSingleBook,
  deleteSingleBook,
} = require("../controllers/book");

router.route("/book").post(postBook);
router.route("/book").get(getBooks);
router.route("/book").delete(deleteBooks);
router.route("/book/:id").get(getSingleBook);
router.route("/book/:id").put(putSingleBook);
router.route("/book/:id").delete(deleteSingleBook);

module.exports = router;
