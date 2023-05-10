const express = require("express");
const router = express.Router();
const { INSERT_SUMMARY_CARD } = require("../controllers/summary");

router.post("/summary", INSERT_SUMMARY_CARD);
router.get("/summary/:id", INSERT_SUMMARY_CARD);
router.put("/summary/content/:id", INSERT_SUMMARY_CARD);
router.put("/summary/title/:id", INSERT_SUMMARY_CARD);
router.delete("/summary/:id", INSERT_SUMMARY_CARD);

module.exports = router;
