import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    name : {
        type : String ,
        required : true ,
    },
    email : {
        type : String ,
        required : true ,
        unique : true ,
        trim : true 
    },
    password : {
        type: String ,
        required : true ,
    },
    bio : {
        type : String,
        trim : true ,
    },
    city : {
        type : String 
    },
    image : {
        type : String ,
        default : "https://static.vecteezy.com/system/resources/thumbnails/060/605/418/small/default-avatar-profile-icon-social-media-user-free-vector.jpg"
    }
} , {timestamps : true })


const userModal = mongoose.model("User",userSchema)
export default userModal
