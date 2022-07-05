const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://ankit1729:Abcd123@cluster0.32v9388.mongodb.net/iNotebook?retryWrites=true&w=majority";
const connectToMongo = () => {
      mongoose.connect(mongoURL, () => {
            console.log("Connectd to db")
      })
}
module.exports = connectToMongo;