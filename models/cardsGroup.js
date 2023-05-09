const mongoose = require("mongoose");

const cardsGroupSchema = mongoose.Schema({
  title: { type: String, required: true, min: 3 },
  creationDate: { type: Date, required: true },
  summaryCardIds: { type: Array, required: true },
  id: { type: String, required: true, min: 7 },
});

module.exports = mongoose.model("CardsGroup", cardsGroupSchema);
