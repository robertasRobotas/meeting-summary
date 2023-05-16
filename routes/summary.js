const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
  INSERT_SUMMARY_CARD,
  GET_SUMMARY_CARD_BY_ID,
  GET_SUMMARIES_BY_GROUP_ID,
  UPDATE_SUMMARY_CONTENT,
  UPDATE_SUMMARY_TITLE,
  DELETE_SUMMARY_CARD,
} = require("../controllers/summary");

router.post("/summary", authMiddleware, INSERT_SUMMARY_CARD);
router.get("/summary/:id", authMiddleware, GET_SUMMARY_CARD_BY_ID);
router.get("/summaries/:groupId", authMiddleware, GET_SUMMARIES_BY_GROUP_ID);
router.put("/summary/title/:id", authMiddleware, UPDATE_SUMMARY_TITLE);
router.put("/summary/content/:id", authMiddleware, UPDATE_SUMMARY_CONTENT);
router.delete("/summary/:id", authMiddleware, DELETE_SUMMARY_CARD);

module.exports = router;
