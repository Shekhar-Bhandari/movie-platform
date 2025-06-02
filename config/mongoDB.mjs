import mongoose from 'mongoose';
import colors from 'colors'
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.bgGreen);
  } catch (error) {
    console.error(`Error: ${error.message}`.bgRed.white);
    process.exit(1);
  }
};

