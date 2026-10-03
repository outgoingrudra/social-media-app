import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    userId : {
        type : mongoose.Schema.Types.ObjectId ,
        required : true ,
    },
    desc : {
        type : String ,
    },
    image : {
        type : String ,
    },
    likes : {
         type : [mongoose.Schema.Types.ObjectId],
         default : [] ,
    }

} , {timestamps : true })

const post = mongoose.model("Post" , postSchema)
export default post 

