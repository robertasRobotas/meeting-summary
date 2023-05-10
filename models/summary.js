const mongoose = require("mongoose");

const summarySchema = mongoose.Schema({
  creationDate: { type: Date, required: true },
  lastUpdated: { type: Date, required: true },
  title: { type: String, required: true },
  contentText: { type: String, required: true },
  id: { type: String, required: true, min: 7 },
  creatorId: { type: String, required: true, min: 7 },
});

module.exports = mongoose.model("Summary", summarySchema);
