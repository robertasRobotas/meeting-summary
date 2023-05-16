const SummaryModel = require("../models/summary");
const GroupModel = require("../models/group");

const uniqid = require("uniqid");

module.exports.INSERT_SUMMARY_CARD = async (req, res) => {
  const summary = new SummaryModel({
    id: uniqid(),
    creationDate: new Date(),
    lastUpdated: new Date(),
    title: req.body.title,
    contentText: req.body.contentText,
    creatorId: req.body.userId,
  });

  const savedSummary = await summary.save();

  GroupModel.updateOne(
    { id: req.body.groupId },
    { $push: { summaryCardIds: savedSummary.id } }
  ).exec();

  res.status(200).json({ response: savedSummary });
};

module.exports.GET_SUMMARY_CARD_BY_ID = async (req, res) => {
  const summary = await SummaryModel.find({ id: req.params.id });
  res.status(200).json({ response: summary });
};

module.exports.GET_SUMMARIES_BY_GROUP_ID = async (req, res) => {
  const aggregatedGroupData = await GroupModel.aggregate([
    {
      $lookup: {
        from: "summaries",
        localField: "summaryCardIds",
        foreignField: "id",
        as: "group_summaries",
      },
    },
    { $match: { id: req.params.groupId } },
  ]).exec();

  res.status(200).json({ response: aggregatedGroupData });
};

module.exports.GET_SUMMARY_CARD_BY_ID = async (req, res) => {
  const summary = await SummaryModel.find({ id: req.params.id });
  res.status(200).json({ response: summary });
};

module.exports.UPDATE_SUMMARY_CONTENT = async (req, res) => {
  await SummaryModel.updateOne(
    { id: req.params.id },
    { contentText: req.body.updatedContentText }
  );
  res.status(200).json({ response: "Content text was updated" });
};

module.exports.UPDATE_SUMMARY_TITLE = async (req, res) => {
  await SummaryModel.updateOne(
    { id: req.params.id },
    { title: req.body.updatedTitle }
  );
  res.status(200).json({ response: "Title was updated" });
};

module.exports.DELETE_SUMMARY_CARD = async (req, res) => {
  await SummaryModel.deleteOne({ id: req.params.id });
  res.status(200).json({ response: "Title was updated" });
};
