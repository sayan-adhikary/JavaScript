import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    role: {
        type: String,
    },
    email: {
        type: String,
    }
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;