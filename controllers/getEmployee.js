const employeeData = require("../models/employeeModel");

const getEmployeeData = async (req, res) => {
  try {
    const data = await employeeData.find();
    if (!data.length) {
      return res.status(200).json({
        status: 0,
        msg: "Could not fetch the required data!!",
      });
    }
    res.status(200).json({
      status: 1,
      msg: "Data fetched successfully!!!",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 0,
      msg: "Server Error!!",
    });
  }
};

const getEmployeeByQuery = async (req, res) => {
  try {
    const { searchQuery } = req.query;
    const regex = new RegExp(`^${searchQuery}`, "i");

    const result = await employeeData.find({
      $or: [
        { full_name: regex },
        { employee_id: regex },
        { department: regex },
        { gender: regex },
        { business_unit: regex },
        { job_title: regex },
      ],
    });
    if (!result.length) {
      return res.status(200).json({
        status: 0,
        msg: "No items found matching the query!!",
      });
    }
    res.status(200).json({
      status: 1,
      msg: "Data fetched based on the search query!!!",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 0,
      msg: "Server Error!!!",
    });
  }
};

module.exports = { getEmployeeByQuery, getEmployeeData };
