require('./models/User')
require('./models/Track')
const express = require('express');
const app = express();
const authRoutes = require('./Routes/authRoutes')
const trackRoutes = require('./Routes/trackRoutes')
const bodyParser = require('body-parser')
const requireAuth = require('./middlewares/requireAuth')


const mongoose = require('mongoose')
const MongoURI = 'mongodb+srv://admin:admin_password@cluster0.vf4s5.mongodb.net/<dbname>?retryWrites=true&w=majority'

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

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

app.get('/', requireAuth ,(req, res) => {
    res.send(`Your email: ${req.user.email}`)
})

app.listen('3000', () => {
    console.log('Listening on 3000....')
})

