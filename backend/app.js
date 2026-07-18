import express from "express";
import { ConnectDB } from "./configs/db.js";
import User from "./models/User.js";
import dotenv from "dotenv"
import authRouter from "./routes/authRoutes.js";
dotenv.config()

const app = express();
app.use(express.json());



app.use("/auth", authRouter)


const PORT = process.env.PORT
ConnectDB()
  .then(() => {
    app.listen(PORT, () => console.log("Server running on PORT :" + PORT));
    console.log("Database connected Successfully !!");
  })
  .catch((err) => {
    console.log("Error in connecting Database ");
    console.log(err);
    process.exit(1);
  });
