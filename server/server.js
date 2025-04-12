import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes/auth-routes.js";
dotenv.config();

// create a database connection
mongoose
  .connect(process.env.mongodb)
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "cache-control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

//middleware
app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is runnin g on port ${PORT}`));
