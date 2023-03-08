const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send(JSON.stringify({ name: "Test" }))
})

app.listen(8080)