const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//API routes
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });
});
