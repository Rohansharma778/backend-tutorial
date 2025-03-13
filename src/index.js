import dotenv from 'dotenv'
import { app } from './app.js';
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';   // Correct path
import connectDB from './db/index.js';      // Correct path with `.js` extension


dotenv.config({
    path: './.env'  
})

connectDB() 
.then(()=>{
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`Server is running at:${process.env.PORT}`);
        
    }
    )
})

.catch((err)=>{
console.log("Mongo DB connection failed!",err);
})