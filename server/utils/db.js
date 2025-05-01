const mongoose = require('mongoose');
// const URI = "mongodb://127.0.0.1:27017/admin_panel";

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database connected successfully");
    }
    catch (error) {
        console.error("connection failed woth error:", error);
        process.exit(0);
    }
}

module.exports = connectDB;
