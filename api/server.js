const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const http = require("http").Server(app);

// Routes
const book = require("./v1/routes/book");

// Cors
app.use(
  cors({
    "Access-Control-Allow-Origin": "*",
  })
);

// Body parser
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

// Default route
app.get("/", (req, res) => {
  res.json({
    message: "Book API v1.0 running!",
  });
});

// Routes
app.use("/v1/", [book]);

const PORT = process.env.PORT || 1111;
http.listen(PORT, () => {
  console.log(`\nServer is running on port ${PORT}.`);
  console.log(" - http://localhost:1111");
});
