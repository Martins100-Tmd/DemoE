const express = require("express");
const app = express();
const { all } = require("./Obj");
require("dotenv").config();

app.get("/", (req, res) => {
  res.json(all);
});

app.listen(4000, () => {
  console.log("listening on PORT 4000");
});
