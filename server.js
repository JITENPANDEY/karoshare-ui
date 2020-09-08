const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.listen(PORT, () => {
    console.log("listening on PORT: ", PORT)
})