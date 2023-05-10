const express = require("express");
const router = express.Router();
const {
  INSERT_GROUP,
  GET_ALL_GROUPS,
  GET_GROUP_BY_ID,
  DELETE_GROUP_BY_ID,
} = require("../controllers/group");

router.post("/group", INSERT_GROUP);
router.get("/groups", GET_ALL_GROUPS);
router.get("/group/:id", GET_GROUP_BY_ID);
router.delete("/group/:id", DELETE_GROUP_BY_ID);

module.exports = router;
