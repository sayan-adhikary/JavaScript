import Employee from '../models/employeeModel.js';

const authenticate = async (req, res, next) => {
  console.log('Inside Authenticate');
  try {
    const { empId, password } = req.body;

    // check this employee in DB
    const employee = await Employee.findOne({ empId });
    console.log('employee to verify', employee);

    if (!employee) {
      console.log('Employee does not exist');
      return res.status(404).json({
        message: 'Employee Not Found',
      });
    }

    // employee exists

    // incorrect password
    console.log(password == employee.password);
    console.log('password', password);
    // password
    console.log('employee pwd', employee['password']);
    console.log('employee name', employee['name']);
    if (password != employee.password) {
      console.log('Incorrect Pwd');
      return res.status(401).json({
        message: 'Incorrect Password',
      });
    }

    // employee is verified
    console.log('employee Verified');

    // adding extra data to request for further use
    req.employee = employee;

    // proceed for further task
    next();
  } catch (err) {
    return res.status(501).json({
      message: 'Server Error',
    });
  }
};

const authorisation = async (req, res, next) => {
  try {
    // Only OWNER, CTO, CEO
    // 1. extract empId
    const { empId } = req.body;

    // 2. find data in DB
    // const employee = await Employee.findOne({empId});

    // because req.employee data was added in authenticate
    const employee = req.employee;

    // 3. employee check role
    // 4. if role aligns => next()
    if (
      employee.role == 'OWNER' ||
      employee.role == 'CTO' ||
      employee.role == 'CEO'
    ) {
      next();
    } else {
      return res.status(401).json({
        message: 'Access Denied',
      });
    }
  } catch (err) {
    return res.status(501).json({
      message: 'Server Error',
    });
  }
};

export { authenticate, authorisation };
