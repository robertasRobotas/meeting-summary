const express = require("express");
const router = express.Router();
const {
  INSERT_CARDS_GROUP,
  GET_ALL_CARDS_GROUP,
} = require("../controllers/cardsGroup");

router.post("/cardsGroup", INSERT_CARDS_GROUP);
router.get("/cardsGroups", GET_ALL_CARDS_GROUP);
router.get("/cardsGroup/:id", INSERT_CARDS_GROUP);
router.delete("/cardsGroup/:id", INSERT_CARDS_GROUP);

module.exports = router;
