import mongoose from "mongoose";

const MONGO_URL = 'mongodb://localhost:27017/student';

async function connectionDB() {
    try {
        const res = await mongoose.connect(MONGO_URL);
        console.log("Connected");
    } catch (err) {
        console.log("db err", err);
    }
}

export default connectionDB;