import express from "express"
import dotenv from "dotenv"
import connectDB from "./configs/db.js"
import authRouter from "./routes/authRoutes.js"
import cookieParser from "cookie-parser"
import userRouter from "./routes/userRoutes.js"
import cors from "cors"
dotenv.config()
const app = express()
app.use(cookieParser())
app.use(express.json())

// change it 

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

const PORT = process.env.PORT

app.get("/",(req,res)=>{
    res.send("Welcome to our project ")
})


app.use("/auth",authRouter)
app.use("/user",userRouter)


connectDB()
.then(()=>{
            console.log("Connected to MongoDB Successfully ✅");
            app.listen(PORT, ()=> { console.log("App / Server is  running on PORT : "+PORT)})  
     })
.catch((e)=>{
        console.log("Connection Failed to MongoDB ❌ : "+ e);
        process.exit(1)
     })



