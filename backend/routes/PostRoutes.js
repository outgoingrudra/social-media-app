import express from "express"
import { auth } from "../middlewares/auth.js"
import { deletePost, getAllPosts, getFeedPosts, likePost, uploadPost } from "../controllers/PostControlller.js"

const postRouter  = express.Router()

postRouter.get("all-posts" ,  getAllPosts)
postRouter.get("posts" ,  getFeedPosts)
postRouter.post("upload" , auth ,  uploadPost)
postRouter.delete("delete" , auth ,  deletePost)
postRouter.delete("like" , auth ,  likePost)

export default postRouter