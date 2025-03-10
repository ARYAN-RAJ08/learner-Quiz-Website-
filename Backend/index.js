const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./Routes/userRoutes.js')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use(cors({
    origin: true,
    credentials: true
}))

app.use('/', userRoutes)

mongoose.connect('mongodb://localhost:27017/QuizApp')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log("Failed to connect to Database", err))

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})