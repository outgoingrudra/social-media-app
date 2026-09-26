import express from "express"
import {  acceptConnection, getAllConnectionRequest, getFriends, sendConnection } from "../controllers/ConnectionController.js"
import { auth } from "../middlewares/auth.js"

const connectionRouter =  express.Router()

connectionRouter.post("/send",auth,  sendConnection )
connectionRouter.get("/all-request",auth,  getAllConnectionRequest )
connectionRouter.patch("/accept",auth,  acceptConnection )
connectionRouter.get("/friends",auth,  getFriends )


export default connectionRouter











