import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "../config/database.js";
import User from "../model/user.js";
import router from "../routes/feedbackRoutes.js";

const app = express()

const PORT=3000;

app.use(express.json())

//mounting api routes
app.use("/api/v1",router )


dotenv.config();


dbConnect();


app.listen(PORT,()=>{

    console.log(`Server is running on port:${PORT}`);
})

