import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import userRoutes from "./routes/routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// Routes
app.use("/users", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
