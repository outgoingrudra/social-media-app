import validator from "validator";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()


export async function signup(req, res) {
  
  try {
    let { name, email, password } = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();

    if (!name || !email || !password) {
      return res
        .status(401)
        .json({ success: false, message: "name , email or password missing " });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(401)
        .json({ success: false, message: " email incorrect  " });
    }

    if (password.length < 5) {
      return res
        .status(401)
        .json({ success: false, message: " Need a Stronger Password  " });
    }

    password = await bcrypt.hash(password, 10);

    const userobj = new User({ name, email, password });
    await userobj.save();

    return res.json({ sucess: true, message: "User Created Successfully ✅" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: " Internal Server Error " + error });
  }
}

export async function login(req, res) {
  try {
    let { email, password } = req.body;

    email = email.trim();
    password = password.trim();
    if (!email || !password) {
      return res
        .status(401)
        .json({ success: false, message: " email or password missing " });
    }
    if (!validator.isEmail(email)) {
      return res
        .status(401)
        .json({ success: false, message: " email incorrect  " });
    }

    if (password.length < 5) {
      return res
        .status(401)
        .json({ success: false, message: " Need a Stronger Password  " });
    }

    const userObj = await User.findOne({ email });
    if (!userObj) {
      return res
        .status(401)
        .json({ success: false, message: " User doesn't exist  " });
    }

    const isPasswordSame = await bcrypt.compare(password, userObj.password);
  
    if (!isPasswordSame) {
      return res
        .status(401)
        .json({ success: false, message: " Something is Wrong !" });
    }


    const SECRET = process.env.JWT_SECRET 
    const token  = jwt.sign({id : userObj._id}, SECRET)
    res.cookie("token",token)

    return res.json({
      success: true,
      message: userObj.name + " logged in Successfully !! ",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: " Internal Server Error " + error });
  }
}

export async function logout(req, res) {
    res.clearCookie("token")
    res.json({success : true , message : "logged out successfully ! "})
}
