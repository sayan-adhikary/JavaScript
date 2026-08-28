import express from 'express';
import connectDB from './configs/db.js';
import { authenticate } from './middlewares/verify.js';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();

// connect db
connectDB();

// global middleware
app.use(express.json()); // for parsing the body
// authenticate every route
// app.use(authenticate);

app.get('/', (req, res) => {
  console.log('get /');
  res.send('Hello World');
});

app.use('/employee', employeeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Running ...');
});
