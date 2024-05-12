import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body; //getting message from request body(user input)
    const { id: receiverID } = req.params;
    const senderID = req.user._id; //getting senderID from user object because we have already set it in protectRoutes middleware
    let conversation = await Conversation.findOne({
      participants: { $all: [senderID, receiverID] },
    });

    //if doesn't exist, create a new conversation
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderID, receiverID],
      });
    }

    const newMessage = new Message({
      senderID,
      receiverID,
      message,
    });

    //put message in array of messages in conversation
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // await newMessage.save();
    // await conversation.save();

    //use Promise.all to save both message and conversation, run them in parallel
    await Promise.all([newMessage.save(), conversation.save()]);

    //send message as response
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
