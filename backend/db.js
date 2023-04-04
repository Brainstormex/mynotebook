const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_KEY;

const connectToMongo = (mongoURI) => {
  return mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connection successfull"))
    .catch((err) => console.log("no connection"));
};
module.exports = connectToMongo;
