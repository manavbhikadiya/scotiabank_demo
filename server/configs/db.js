import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection successfull.");
  } catch (error) {
    console.error(
      "Error: In connecting database. Please check db.js file for the connection configs.", error
    );
  }
};

export default connectDB;
