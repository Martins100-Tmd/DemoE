const express = require("express");
const app = express();
const { all } = require("./Obj");
require("dotenv").config();
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => {
  res.json(all);
});
app.get("/world", (req, res) => {
  res.status(200).json({ message: "Hello World", success: true });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Index.html"));
});
app.listen(4000, () => {
  console.log("listening on PORT 4000");
});
