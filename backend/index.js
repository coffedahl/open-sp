// Import modules
const express = require("express");
const bodyParser = require("body-parser");
const handler = require("./dbhandler");
const cors = require("cors");

// Create express app
const app = express();
// Use modules in express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/**
 * Default route for GET all runs
 */
app.get("/", (req, res) => {
  handler.getAll().then((response) => {
    res.send(JSON.stringify(response));
  });
});

/**
 * Default test for POST tests
 */
app.post("/api/test", (req, res) => {
  let data = req.body;
  res.send("Data recived: " + JSON.stringify(data));
  console.log("Data recived: " + data);
});

/**
 * Adding a new run to the db
 */
app.post("/api/addrun", (req, res) => {
  let data = req.body;
  handler.addRun(data.storenumber, data.runtype);
  res.send(JSON.stringify(data));
});

/**
 * Deleteing all runs from db
 */
app.post("/api/delete", (req, res) => {
  let data = req.body;
  if (data.passphrase == "kjellochco") {
    handler.delete();
    res.send(JSON.stringify({ message: "Data has been deleted" }));
  } else res.send(JSON.stringify({ message: "Invalid auth" }));
});

/**
 * Start the application
 */
app.listen(8080, () => {
  console.log("Application listnening on port: 8080");
});
