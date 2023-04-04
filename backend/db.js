const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" });
const mongoURI = process.env.NOTEKEY;

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Connected to mongo Successfully");
    })
    .catch((err) => console.log("no connection"));
};
module.exports = connectToMongo;
