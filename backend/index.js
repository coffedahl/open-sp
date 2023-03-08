// Import modules
const express = require('express')
const bodyParser = require('body-parser')
const handler = require('./dbhandler')

// Create express app 
const app = express()
// Use modules in express app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * Default route for GET tests
 */
app.get("/", (req, res) => {
    handler.getAll().then((response) => {
        res.send(JSON.stringify(response))
    })
})

/**
 * Default test for POST tests
 */
app.post("/api/test", (req, res) => {
    let data = req.body
    res.send("Data recived: " + JSON.stringify(data))
    console.log("Data recived: " + data)
})

app.post("/api/pricerun", (req, res) => {
    let data = req.body
    let item = handler.addRun(data.storenumber)
    res.send(JSON.stringify({ newItem: item }))
})

app.post("/api/delete", (req, res) => {
    let data = req.body;
    handler.delete()
    res.send(JSON.stringify({ message: "Data has been deleted" }))
})

/**
 * Start the application
 */
app.listen(8080, () => {
    console.log("Application listnening on port: 8080")
})
