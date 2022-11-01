const express = require('express')
const app = express()
const db = require('./db/db')

// required routes
const todoRoutes = require("./routes/todoRoutes")


app.use(express.json())
app.use('/todos', todoRoutes)

// connecting the db
db()


const port = process.env.PORT || 5000

app.listen(port, (err) => {
    if(err) throw err;
    console.log(`Server is running successfully on ${port}`)
})