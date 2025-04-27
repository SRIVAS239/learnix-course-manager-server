import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./utils/database.js";
import courseRoutes from "./routers/courseRoutes.js";
import authRoutes from "./routers/authRoutes.js";

import bodyParser from "body-parser";
import passport from "passport";
//import passport-google-oauth20 from "passport-google-oauth20";
// import mongoose from "mongoose";
//import dotenv from "dotenv";

//const GoogleStrategy = require("passport-google-oauth20").Strategy;
dotenv.config();
const app=express();
const PORT = 5001;

//enable cors access for specific origin
app.use(cors({
    origin:process.env.BASEURL,
    optionsSuccessStatus: 200
}));

//connect to database
connectDB();

//use the passport strategy
//passport.use(new GoogleStrategy());
//console.log("success useage");
app.use(bodyParser.json());

app.use('/course', courseRoutes);
app.use('/auth', authRoutes);

app.listen(PORT,()=>{console.log("server running")});

