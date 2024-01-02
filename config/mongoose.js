import mongoose from 'mongoose';

const URL = 'mongodb+srv://ernileshpatil098:rQHVVwUaZS7BPi1Y@cluster0.omo5kfv.mongodb.net/polling_system_api?retryWrites=true&w=majority'
const connectDB = async () => {
  try {
    await mongoose.connect(URL)

    console.log('MongoDB database connection established successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB database:', error);
  }
};

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
  // Handle reconnection strategies here if needed
});

export default connectDB;
