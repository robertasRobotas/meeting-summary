const express = require("express");
const router = express.Router();
const { INSERT_SUMMARY_CARD } = require("../controllers/summaryCard");

router.post("/user", INSERT_SUMMARY_CARD);
router.post("/logIn", INSERT_SUMMARY_CARD);
router.get("/user/:id", INSERT_SUMMARY_CARD);
router.delete("/user/:id", INSERT_SUMMARY_CARD);

module.exports = router;