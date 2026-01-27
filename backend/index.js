import express from "express";
import dotenv from "dotenv";
dotenv.config({});

import connectDB from "./config/database.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at port: ${PORT}`);
})