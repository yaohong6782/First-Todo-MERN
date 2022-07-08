const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const todoRoutes = require("./routes/TodoRoute")
require('dotenv').config();

const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/todo', todoRoutes);




mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {
    app.listen(5000);
    console.log("LISTENING ON PORT 5000")
  })
  .catch((err) => {
    console.log(err);
  });
