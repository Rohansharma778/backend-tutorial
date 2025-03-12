import dotenv from 'dotenv'

import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';   // Correct path
import connectDB from './db/index.js';      // Correct path with `.js` extension


dotenv.config({
    path: './.env'  
})

connectDB() 