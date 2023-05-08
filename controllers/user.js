const UserModel = require("../models/user");

module.exports.INSERT_USER = (req, res) => {
  res.status(200).json({ response: "summaryCard" });
};
