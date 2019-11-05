// import library
const express = require('express')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

const User = sequelize.define('user', { email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
}})

sequelize.sync()
    .then(() => User.truncate())
    .then(() => User.create({ email: 'rein@rein.com' }))
    .then(() => console.log('db synced'))

// app will be our server object
const app = express()
const port = 4000

app.listen(port, () => console.log("listening on port " + port))

app.get('/', (req, res) => res.send('hello there stranger'))
// TODO:

// X install dependencies
// X run docker with postgres
// X create server
// X Create models
// X sync with database
// - configure body parser
// - GET
// - POST
// - PUT
// - DELETE