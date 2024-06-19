const express = require("express");
const { createEmployee } = require("../controllers/addEmployee");
const { getEmployeeByQuery } = require("../controllers/getEmployee");

const route = express.Router();

// route.get("/getEmployee", getEmployeeData);
route.get("/getEmployeeByQuery", getEmployeeByQuery);
route.post("/createEmployee", createEmployee);

module.exports = route;
