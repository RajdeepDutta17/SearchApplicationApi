const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongoDB = async (callback) => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database is connected!!!");
    callback();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectToMongoDB };
