import User from "../models/User.js";
import Post from "../models/Posts.js";
import imagekit from "../configs/imagekit.js";

export async function getAllPosts(req, res) {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.json({ success: false, message: "UserId not found " });
    }
    const allPosts = await Post.find({
      userId,
    });

    return res.json({
      success: true,
      message: "Posts fetched Successfully ",
      posts: allPosts,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal Server Error : " + error,
    });
  }
}

export async function getFeedPosts(req, res) {
  try {
    const posts = await Post.find({})
      .limit(10)
      .populate("userId", "name email image bio city ");
    return res.json({
      success: true,
      message: "Feed Fetched Successfully",
      posts,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal Server Error : " + error,
    });
  }
}
export async function uploadPost(req, res) {
  try {
     console.log(req.body);
   
    let { desc, image} = req.body;
    
    if (!desc && !image) {
      return res.json({ success: false, message: "Upload Unsuccessful" });
    }
    if (!desc) desc = null;
    if (!image) {
      return res.json({ success: false, message: "No image provided ❌" });
    }
     
    const random = Math.floor(Math.random()*1000000)
    const random2 = Math.floor(Math.random()*100000)
    const uploadResponse = await imagekit.upload({
      file: image,
      fileName:  " uploaded"+random+random2 ,
      transformation: {
        pre: "q-60,f-webp",
      },
    });
    const post = new Post({
      userId: req.user._id,
      desc,
      image : uploadResponse.url ,
    });

    await post.save();

    return res.json({
      success: true,
      message: "Post Uploaded Successfully ",
      post,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal Server Error : " + error,
    });
  }
}

export async function deletePost(req, res) {
  try {
    const { postId } = req.body;
    const post = await Post.findById(postId);
    if (!post || (post && !post.userId.equals(req.user._id))) {
      return res.json({ success: false, message: "Not Possible" });
    }
    await Post.findByIdAndDelete(postId);
    return res.json({ success: true, message: "Post deleted Successfully !" });
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal Server Error : " + error,
    });
  }
}

export async function likePost(req, res) {
  try {
    const userId = req.user.id;
    const postId = req.body.postId;
    const post = await Post.findById(postId);
    if (!post) {
      return res.json({ success: false, message: "Cant find Post " });
    }
    let arr = [];
    let found = false;
    for (let ele of post.likes) {
      if (ele == userId) {
        found = true;
        continue;
      }
      arr.push(ele);
    }
    if (found) {
      post.likes = arr;
      await post.save();
    } else {
      post.likes.push(userId);
      await post.save();
    }
    return res.json({ success: true, message: found ? "unliked " : "liked" });
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal Server Error : " + error,
    });
  }
}


