const express = require("express");
const router = express.Router();
const {
  INSERT_USER,
  GET_ALL_USERS,
  GET_USER_BY_ID,
  DELETE_USER_BY_ID,
  LOGIN,
} = require("../controllers/user");

router.post("/user", INSERT_USER);
router.post("/logIn", LOGIN);
router.get("/users", GET_ALL_USERS);
router.get("/user/:id", GET_USER_BY_ID);
router.delete("/user/:id", DELETE_USER_BY_ID);

module.exports = router;
