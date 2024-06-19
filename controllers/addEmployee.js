const employeeData = require("../models/employeeModel");

const createEmployee = async (req, res) => {
  try {
    const { employeeId, fullName, jobTitle, department, businessUnit, age } =
      req.body;

    if (
      !employeeId ||
      !fullName ||
      !jobTitle ||
      !department ||
      !businessUnit ||
      !age
    ) {
      return res.status(200).json({
        status: 0,
        msg: "Please fill in all the fields in order to proceed!!!",
      });
    }

    const saveData = await employeeData.create({
      employee_id: employeeId,
      full_name: fullName,
      job_title: jobTitle,
      department: department,
      business_unit: businessUnit,
      age: age,
    });

    if (!saveData) {
      return res.status(200).json({
        status: 0,
        msg: "Could not save the data!!",
      });
    }
    return res.status(201).json({
      status: 1,
      msg: "Data saved successfully!!!",
      data: saveData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 0,
      msg: "Server Error!!!",
    });
  }
};

module.exports = { createEmployee };
