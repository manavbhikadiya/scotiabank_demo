import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://manav:manav123@cluster0.b0mouiy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection successfull.");
  } catch (error) {
    console.error(
      "Error: In connecting database. Please check db.js file for the connection configs."
    );
  }
};

export default connectDB;
