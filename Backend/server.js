import path from "path";
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDB.js";
import postRoutes from "./routes/postRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
connectDB();

app.use(express.json({ limit: "50mb" })); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());
// rouets
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
