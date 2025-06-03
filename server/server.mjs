
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from  'morgan';
import router from './Routes/movieRoute.mjs';
import { connectDB } from './config/mongoDB.mjs';
import Router from './Routes/userRoute.mjs';

const app= express();

dotenv.config();
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1/home',router)
app.use('/api/v1/user',Router)


const PORT=process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`.bgMagenta);
})
