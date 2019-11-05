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

app.get('/users', (req, res) => {
    User.findAll()
        .then((users) => {
            res.status(200).json(users)
        })
})

app.delete('/users/:userId', (req, res) => {
    console.log('REQ PARAMS:', req.params)
    User.destroy({ where: { id: req.params.userId }})
        .then((numberOfRecordsDeleted) => {
            if(numberOfRecordsDeleted === 0){
                res.status(404).send({ message: 'User not found' })
            } else {
                res.status(204).send({ message: 'User deleted'})
            }
        })
})

// TODO:

// X install dependencies
// X run docker with postgres
// X create server
// X Create models
// X sync with database
// X GET
// - DELETE
// - configure body parser
// - POST
// - PUT