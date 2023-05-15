const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  INSERT_SUMMARY_CARD,
  GET_SUMMARY_CARD_BY_ID,
  UPDATE_SUMMARY_CONTENT,
  UPDATE_SUMMARY_TITLE,
} = require("../controllers/summary");

router.post("/summary", auth, INSERT_SUMMARY_CARD);
router.get("/summary/:id", GET_SUMMARY_CARD_BY_ID);
router.put("/summary/content/:id", UPDATE_SUMMARY_CONTENT);
router.put("/summary/title/:id", UPDATE_SUMMARY_TITLE);
router.delete("/summary/:id", INSERT_SUMMARY_CARD);

module.exports = router;
