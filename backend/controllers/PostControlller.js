import User from "../models/User.js"
import Post from "../models/Posts.js"

export async function getAllPosts(req , res ) {
    try {
        const {userId} = req.body
        if(!userId){
            return res.json({success : false , message : "UserId not found "})
        }
        const allPosts = await Post.find({
            userId
        })

        return res.json({success : true , message : "Posts fetched Successfully ", posts : allPosts})

    } catch (error) {
          return res.json({success : false , message : "Internal Server Error : "+error})
    }
}

export async function getFeedPosts(req , res ) {
    try {
        
        const posts  = await Post.find({}).limit(10).populate("userId" , "name email image bio city ")
        return res.json({success : true ,  message : "Feed Fetched Successfully" , posts })


    } catch (error) {
             return res.json({success : false , message : "Internal Server Error : "+error})
    }
}
export async function uploadPost(req , res ) {
    try {
        let {desc , image } = req.body
        if(!desc && !image ){
             return res.json({success : false , message : "Upload Unsuccessful"})
        }
        if(!desc) desc =  null 
        if(!image) image = null 
        const post  = new Post({
            userId : req.user._id ,
            desc,
            image

        })

        await post.save()

        return res.json( { success : true , message : "Post Uploaded Successfully " , post } )


    } catch (error) {
        return res.json({success : false , message : "Internal Server Error : "+error})
    }
}


export async function deletePost(req , res ) {
    try {
        const {postId} = req.body
        const post  = await Post.findById(postId)
        if(!post || (  post && !post.userId.equals(req.user._id)) ){
            return res.json({success : false , message : "Not Possible"})
        }
        await Post.findByIdAndDelete(postId)
        return res.json({success : true , message : "Post deleted Successfully !"})
        
    } catch (error) {
         return res.json({success : false , message : "Internal Server Error : "+error})
    }
}
export async function likePost(req , res ) {
    
}


