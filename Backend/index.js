import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import testRoutes from "./routes/testRoutes.js";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

dotenv.config();
// DB Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
// route

app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Food Server");
});

// middlewares

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Node Server Running");
  console.log(PORT);
});
