import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';  // Corrected path with `.js` extension



const connectDB = async()=>{
    try {
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`);  
    } catch (error) {
        console.log("MONGODB connection FAILED!",error);
        process.exit(1)
    }
}   
export default connectDB 


/*
import express from 'express';
const app = express()

( async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERRR:",error);
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on part${PerformanceObserverEntryList.env.PORT}`);
        
       })
    } catch (error) {
        console.log("ERROR:",error)
        throw error    
    }
})()*/