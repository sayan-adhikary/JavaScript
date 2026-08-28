import mongoose from 'mongoose';

const DB_URL = 'mongodb://localhost:27017/company';

const connectDB = async () => {
  try {
    const res = await mongoose.connect(DB_URL);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
