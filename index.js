// import library
const express = require('express')

// app will be our server object
const app = express()
const port = 4000

app.listen(port, () => console.log("listening on port " + port))

app.get('/', (req, res) => res.send('hello there stranger'))
// TODO:

// X install dependencies
// X run docker with postgres
// X create server
// - Create models
// - sync with database
// - configure body parser
// - GET
// - POST
// - PUT
// - DELETE