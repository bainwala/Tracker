require('./models/User')
const express = require('express');
const app = express();
const authRoutes = require('./Routes/authRoutes')
const bodyParser = require('body-parser')


const mongoose = require('mongoose')
const MongoURI = 'mongodb+srv://admin:admin_password@cluster0.vf4s5.mongodb.net/<dbname>?retryWrites=true&w=majority'

app.use(bodyParser.json())
app.use(authRoutes)

mongoose.connect(MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo')
})

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to Mongo', err)
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen('3000', () => {
    console.log('Listening on 3000....')
})

