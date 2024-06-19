const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectToMongoDB } = require("./config/db");
const addEmployeeRoute = require("./routes/employeeRoute");
const getEmployeeRoute = require("./routes/employeeRoute");
const getEmployeeByQueryRoute = require("./routes/employeeRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use(process.env.APP_VERSION, addEmployeeRoute);
app.use(process.env.APP_VERSION, getEmployeeRoute);
app.use(process.env.APP_VERSION, getEmployeeByQueryRoute);

connectToMongoDB(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
