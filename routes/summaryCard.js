const express = require("express");
const router = express.Router();
const { INSERT_SUMMARY_CARD } = require("../controllers/summaryCard");

router.post("/summaryCard", INSERT_SUMMARY_CARD);
router.get("/summaryCard/:id", INSERT_SUMMARY_CARD);
router.put("/summaryCard/content/:id", INSERT_SUMMARY_CARD);
router.put("/summaryCard/title/:id", INSERT_SUMMARY_CARD);
router.delete("/summaryCard/:id", INSERT_SUMMARY_CARD);

module.exports = router;