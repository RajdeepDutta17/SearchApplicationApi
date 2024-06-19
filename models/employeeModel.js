const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    employee_id: {
      type: String,
      required: [true, "employee id is required!!!"],
    },
    full_name: {
      type: String,
      required: [true, "fullname is required!!!"],
    },
    job_title: {
      type: String,
      required: [true, "job title is required!!!"],
    },
    department: {
      type: String,
      required: [true, "department is required!!!"],
    },
    business_unit: {
      type: String,
      required: [true, "business unit is required!!!"],
    },
    gender: {
      type: String,
      required: [true, "gender is required!!!"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const employeeData = mongoose.model("employeeData", employeeSchema);

module.exports = employeeData;
