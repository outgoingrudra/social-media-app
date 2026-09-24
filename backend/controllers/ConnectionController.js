import Connection from "../models/Connection.js"
export async function sendConnection(req , res ) {
    try {
        const fromUserId  = req.user._id 
        const toUserId = req.body.toUserId 
        if(fromUserId == toUserId){
             return res.json({success : false  , message : "Cant send request to Yourself !" , })
        }

        //  to check is toUserId exist or not 
        // already friend 

         
        const connectionObj = new Connection({
            fromUserId , toUserId , status : "pending"
        })

        await connectionObj.save()

        return res.json({success : true , message : "Connection Request Sent !" , obj : connectionObj})


    } catch (error) {
          return res.json({success : false , message : "Internal Server Error"})
    }
}

export async function acceptConnection(req , res ) {
    
}


export async function rejectConnection(req , res ) {
    
}


export async function getAllConnection(req , res ) {
    
}

