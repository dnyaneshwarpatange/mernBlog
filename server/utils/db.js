const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;

const conn = async()=>{
    try {
        await mongoose.connect(URL);
        console.log("Connetd to database")

        
    } catch (error) {
        console.log("Database connection failed")
        
    }
}
module.exports = conn;