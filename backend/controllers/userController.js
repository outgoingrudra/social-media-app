import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../models/User.js"
dotenv.config()

export  async function getProfile(req,res) {
    try {
        const token  = req.cookies?.token
        if(!token){
              return res.json({success : false , message : " Login for API USE "})
        }
        const SECRET = process.env.JWT_SECRET 
        const obj  =  jwt.verify(token , SECRET)
        console.log("id :", obj.id);
        const userObj  = await User.findById(obj.id).select('-password')
       if(!userObj){
           return res.json({success : false , message : " Login for API USE "})
       }
        
         return res.json({success : true , message : "Profile fetched " , user : userObj})
    } catch (error) {
          return res.json({success : false , message : "Internal Server Error : "+error})
    }
}

