// Import modules
const express = require('express')
const bodyParser = require('body-parser')
// Create express app 
const app = express()
// Use modules in express app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * Default route for GET tests
 */
app.get("/", (req, res) => {
    res.send(JSON.stringify({ name: "Test" }))
    console.log("Request sent")
})

/**
 * Default test for POST tests
 */
app.post("/api/test", (req, res) => {
    let data = req.body
    res.send("Data recived: " + JSON.stringify(data))
    console.log("Data recived: " + data)
})

/**
 * Start the application
 */
app.listen(8080, () => {
    console.log("Application listnening on port: 8080")
})
