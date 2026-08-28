import express from 'express';
import Employee from '../models/employeeModel.js';
import { authenticate, authorisation } from '../middlewares/verify.js';

const router = express.Router();

// Create employee
router.post('/', async (req, res) => {
  try {
    const newEmployee = req.body;

    // create this emloyee in db
    const employeeDB = await Employee.create(newEmployee);
    console.log('employee created ', employeeDB);

    res.status(201).json({
      message: 'Employee created',
      employee: employeeDB,
    });
  } catch (err) {
    res.status(501).json({
      message: 'Server Error',
    });
  }
});

router.post('/many', async (req, res) => {
  try {
    // array of new employees
    const newEmployees = req.body;

    // create this emloyee in db
    // const employeeDB = await Employee.create(newEmployee);
    // console.log("employee created ", employeeDB);
    const response = await Employee.insertMany(newEmployees);
    console.log('respose done', response);

    res.status(201).json({
      message: 'Employee created',
      employees: response,
    });
  } catch (err) {
    res.status(501).json({
      message: 'Server Error',
    });
  }
});

// Get all employees
router.get('/', authenticate, authorisation, async (req, res) => {
  console.log('get emloyees');
  try {
    const employees = await Employee.find();
    console.log('employees', employees);
    res.status(201).json({
      message: 'Success',
      employees,
    });
  } catch (err) {
    res.status(501).json({
      message: 'Server Erro',
    });
  }
});

// authenticate => authorise

export default router;
