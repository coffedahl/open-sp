const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send(JSON.stringify({ text: "Hello World!" }));
  console.log("Request sent")
});

app.listen(8080, () => {
  console.log("Listneing on port 8080");
});
