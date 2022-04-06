const asynchandler = require("express-async-handler");
const userList = require("../Models/userModel");
const registeruser = asynchandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const { name, email, password } = req.body;
  const user = await userList.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  }
});

const fetchuser = asynchandler(async (req, res) => {
  const user = await userList.find();
  if (user) {
    res.json({
      message: "fetched succesfully",
      user,
    });
  }
});

const fetchuserbyid = asynchandler(async (req, res) => {
  const id = req.params.id;
  const user = await userList.find({ _id: id });
  if (user) {
    res.json({
      message: "fetched succesfully By id",
      user,
    });
  }
});

const deletuserbyid = asynchandler(async (req, res) => {
  const id = req.params.id;
  const user = await userList.findByIdAndDelete({ _id: id });
  if (user) {
    res.json({
      message: "deleted succesfully By id",
    });
  }
});

const updateuserbyid = asynchandler(async (req, res) => {
  const user = await userList.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (user) {
    res.json({
      message: "deleted succesfully By id",
    });
  }
});

module.exports = {
  registeruser,
  fetchuser,
  fetchuserbyid,
  deletuserbyid,
  updateuserbyid,
};
