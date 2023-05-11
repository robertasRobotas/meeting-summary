const uniqid = require("uniqid");
const CardGroupModel = require("../models/group");
const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports.INSERT_GROUP = async (req, res) => {
  try {
    const token = req.headers.authorization;

    console.log("token", token);

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ response: "Auth failed" });
      }

      const group = new CardGroupModel({
        title: req.body.title,
        creationDate: new Date(),
        summaryCardIds: [],
        id: uniqid(),
      });

      const createdGroup = await group.save();

      UserModel.updateOne(
        { id: req.body.userId },
        { $push: { cardsGroups: createdGroup.id } }
      ).exec();

      return res.status(200).json({ response: "Group was created" });
    });
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({ response: "ERROR" });
  }
};

module.exports.GET_ALL_GROUPS = async (req, res) => {
  const cardGroup = await CardGroupModel.find();

  res.status(200).json({ cardGroup: cardGroup });
};

module.exports.GET_GROUP_BY_ID = async (req, res) => {
  const group = await CardGroupModel.findOne({ id: req.params.id });

  res.status(200).json({ cardGroup: group });
};

module.exports.DELETE_GROUP_BY_ID = async (req, res) => {
  const group = await CardGroupModel.findOneAndDelete({ id: req.params.id });

  res
    .status(200)
    .json({ response: "Group was deleted successfully", group: group });
};
