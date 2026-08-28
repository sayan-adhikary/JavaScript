import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
  {
    empId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    salary: {
      type: Number,
      required: true,
      min: 0,
    },

    dept: {
      type: String,
      required: true,
      enum: ['HR', 'Finance', 'IT', 'Sales', 'Marketing', 'Operations'],
    },

    role: {
      type: String,
      required: true,
      enum: ['OWNER', 'CEO', 'CTO', 'employee'],
      default: 'employee',
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
