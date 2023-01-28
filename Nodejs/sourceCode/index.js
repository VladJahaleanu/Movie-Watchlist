const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express()
const personRoute = require('./routes/person')
const authRoute = require('./routes/auth')
const movieRoute = require('./routes/movie')

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json())
app.use(personRoute)
app.use(authRoute)
app.use(movieRoute)


//Connect to DB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECT, () => console.log('Connected to DB!'))

//Print request to console
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})

//Handle 404
app.use((req, res, next) => {
    res.status(404).send('You are lost!')
})

const PORT = process.env.PORT || 44302
app.listen(PORT, () => console.info(`Server started on port ${PORT}!`))

