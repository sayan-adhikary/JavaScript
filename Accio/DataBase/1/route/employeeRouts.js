import express from "express";
import Employee from "../module/employeeModule.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await Employee.find({});
        res.status(200).json({
            message: "Success",
            employees: data
        });
    } catch (err) {
        res.status(500).json({
            message: "Error fetching employees",
            error: err.message
        });
    }
});

export default router;