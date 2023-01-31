const express = require("express");
const app = express();
const { all } = require("./Obj");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("Index.js");
});

app.listen(3000, () => {
  console.log("listening on PORT 3000");
});
