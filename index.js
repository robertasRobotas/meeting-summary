const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const summaryCardRouter = require("./routes/summaryCard");
const cardGroupRouter = require("./routes/cardsGroup");
const user = require("./routes/user");

const mongoose = require("mongoose");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(summaryCardRouter);
app.use(cardGroupRouter);
app.use(user);

mongoose
  .connect(
    "mongodb+srv://robertas1:robertas1@cluster0.y8jgwtj.mongodb.net/test"
  )
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.listen(8081, () => {
  console.log("Your app is alive!!!!!");
});
