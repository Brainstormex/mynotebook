const express = require("express");
const mongoose = require("mongoose");
const connectToMongo = require("./db");
require("dotenv").config({ path: "./config.env" });
var cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

const startServer = () => {
  try {
    connectToMongo(process.env.MONGO_KEY);
    app.listen(PORT, () => {
      console.log(`myNotebook backend listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

// app.listen(PORT, () => {
//   console.log(`myNotebook backend listening on port ${PORT}`)
// })
