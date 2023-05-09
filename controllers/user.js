const uniqid = require("uniqid");
const UserModel = require("../models/user");

module.exports.LOGIN = async (req, res) => {
  try {
    res.status(200).json({ user: "LOGIN" });
  } catch (err) {
    console.log("ERR", err);
    res.status(500).json({ response: "ERROR, please try later" });
  }
};

module.exports.INSERT_USER = async (req, res) => {
  try {
    const user = new UserModel({
      name: req.body.name,
      surname: req.body.surname,
      password: req.body.password,
      email: req.body.email,
      id: uniqid(),
      cardsGroups: [],
    });

    await user.save();

    res.status(200).json({ response: "User was saved successfully" });
  } catch (err) {
    res.status(500).json({ response: "User was not saved, please try later" });
  }
};

module.exports.GET_ALL_USERS = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ users: users });
  } catch (err) {
    console.log("ERR", err);
    res.status(500).json({ response: "ERROR, please try later" });
  }
};

module.exports.GET_USER_BY_ID = async (req, res) => {
  try {
    const user = await UserModel.findOne({ id: req.params.id });
    res.status(200).json({ user: user });
  } catch (err) {
    console.log("ERR", err);
    res.status(500).json({ response: "ERROR, please try later" });
  }
};

module.exports.DELETE_USER_BY_ID = async (req, res) => {
  try {
    const user = await UserModel.deleteOne({ id: req.params.id });
    res.status(200).json({ user: user });
  } catch (err) {
    console.log("ERR", err);
    res.status(500).json({ response: "ERROR, please try later" });
  }
};
