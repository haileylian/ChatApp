import mongoose from "mongoose";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const messageSchema = new mongoose.Schema(
  {
    //Schema Fields: senderID, receiverID, message, createdAt, updatedAt
    senderID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    // automatically manage createdAt and updatedAt timestamps for each document.
    //This is done by setting the timestamps option to true.
  },
  { timestamps: true }
);

//a model named Message is created.
//This model is what you use in the rest of your application to interact with the messages collection in your MongoDB database.
const Message = mongoose.model("Message", messageSchema);

export default Message;
