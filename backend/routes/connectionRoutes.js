import express from "express"
import {  acceptConnection, friendSugestions, getAllConnectionRequest, getFriends, rejectConnection, sendConnection } from "../controllers/ConnectionController.js"
import { auth } from "../middlewares/auth.js"

const connectionRouter =  express.Router()

connectionRouter.post("/send",auth,  sendConnection )
connectionRouter.get("/all-request",auth,  getAllConnectionRequest )
connectionRouter.patch("/accept",auth,  acceptConnection )
connectionRouter.patch("/reject",auth,  rejectConnection )
connectionRouter.get("/friends",auth,  getFriends )
connectionRouter.get("/friends-suggestion",auth,  friendSugestions )



export default connectionRouter











