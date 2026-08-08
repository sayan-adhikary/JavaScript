import express from "express";
import connectionDB from "./config/db.js";
import employeeRouts from "./route/employeeRouts.js";

const app = express();

app.use(express.json());

connectionDB();

app.use('/employees', employeeRouts);

app.get('/', (req, res) => {
    res.send('Employee API is running');
});

app.listen(3000, () => {
    console.log("connected to port 3000");
});