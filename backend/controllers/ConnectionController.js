import Connection from "../models/Connection.js";
import User from "../models/User.js";
export async function sendConnection(req, res) {
  try {
    const fromUserId = req.user._id;
    const toUserId = req.body.toUserId;

    if (fromUserId == toUserId) {
      return res.json({
        success: false,
        message: "Cant send request to Yourself !",
      });
    }

    const destinationUser = await User.findById(toUserId);

    if (!destinationUser) {
      return res.json({
        success: false,
        message: " Target User doesn't exist !",
      });
    }
    const existConnection = await Connection.findOne({
      $or: [
        { fromUserId: fromUserId, toUserId: toUserId },
        { fromUserId: toUserId, toUserId: fromUserId },
      ],
    });

    if (existConnection) {
      return res.json({
        success: false,
        message: "Connection Request alredy exists ",
      });
    }

    const connectionObj = new Connection({
      fromUserId,
      toUserId,
      status: "pending",
    });

    await connectionObj.save();

    return res.json({
      success: true,
      message: "Connection Request Sent !",
      obj: connectionObj,
    });
  } catch (error) {
    return res.json({ success: false, message: "Internal Server Error" });
  }
}

export async function acceptConnection(req, res) {
  try {
     const connectionId  = req.body.connectionId
     const connection  = await Connection.findById(connectionId)
     if(!connection){
        return res.json({
        success: false,
        message: " No Connection Exists  !",
      });
     }
  
     

     if(!connection.toUserId.equals(req.user._id)){
        return res.json({
        success: false,
        message: " Something Wrong in Connection !",
      });
    }

      const updatedConnection  = await Connection.findByIdAndUpdate(connectionId , {
        status : "accepted"
      })
      return res.json({
        success: true,
        message: " Connection Accepted ",
        updatedConnection
      });
     
  } catch (error) {
    return res.json({
        success: false,
        message: " Internal Server Error   !",
      });
  }
}

export async function rejectConnection(req, res) {}

export async function getAllConnectionRequest(req, res) {
  try {
    const connections = await Connection.find({
      toUserId: req.user._id,
      status: "pending",
    }).populate("fromUserId", "name  email  image bio city");

    return res.json({
      success: true,
      message: "All connection Request Fetched ",
      requests: connections,
    });
  } catch (error) {
    return res.json({ success: false, message: "Internal Server Error" });
  }
}

export async function getFriends(req, res) {
    try {
        
        const connections  = await Connection.find({
            $or : [
             {   fromUserId : req.user._id } ,
             { toUserId: req.user._id}
            ],
            status : "accepted"
        }).populate("fromUserId" , "name email bio city").populate("toUserId" , "name email bio city")

        return res.json({success : true , message : "All friends fetched ", friends : connections })
    } catch (error) {
         return res.json({ success: false, message: "Internal Server Error" });
    }
}
