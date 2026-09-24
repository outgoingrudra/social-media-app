import mongoose from "mongoose"


const connectionSchema  = mongoose.Schema({
     fromUserId : {
        type : mongoose.Schema.Types.ObjectId ,
        required : true 
     } ,
     toUserId : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true 
     },
     status : {
          type : String ,
          enum : ["pending" , "accepted" ] ,
          required : true ,
          default : "pending"
     }
})


const connectionModel  = mongoose.model("Connections" , connectionSchema)
export default connectionModel

