import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const DB_URL = process.env.DB_URL

export default async function connectDB() {
      // this function will connect the app/server to db
       return mongoose.connect(DB_URL)
    
}