import express from "express";
import dotenv from "dotenv";
dotenv.config({});

import cookieParser from "cookie-parser";

import connectDB from "./config/database.js";

connectDB();

import userRoute from "./routes/userRoute.js"

const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.get("/", (req, res) => {
  res.send("🚀 Backend is running - Chat Application.");
});

app.use("/api/v1/user", userRoute)

app.listen(PORT, ()=>{
    console.log(`Server listen at port: ${PORT}`);
})