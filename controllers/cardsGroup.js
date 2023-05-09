const uniqid = require("uniqid");
const CardGroupModel = require("../models/cardsGroup");

module.exports.INSERT_CARDS_GROUP = async (req, res) => {
  const cardGroup = new CardGroupModel({
    title: req.body.title,
    creationDate: new Date(),
    summaryCardIds: [],
    id: uniqid(),
  });

  await cardGroup.save();

  res.status(200).json({ response: "summaryCard" });
};

module.exports.GET_ALL_CARDS_GROUP = async (req, res) => {
  const cardGroup = await CardGroupModel.find();

  res.status(200).json({ cardGroup: cardGroup });
};
