import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();
// Middleware
app.use(cors());
app.use(express.json());
// route
app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Food Server");
});

// middlewares

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Node Server Running");
  console.log(PORT);
});
