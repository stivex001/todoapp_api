// Setting up mongoose
const mongoose = require('mongoose')
const connectionString = "mongodb://localhost:27017/todos"

module.exports = () => {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
      useUnifiedTopology: true,
    }, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Successfully connected to MongoDB")
    })
}