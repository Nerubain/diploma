import mongoose from 'mongoose';

const { Schema } = mongoose;

const MessageSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
});

const ChatSchema = new Schema({
  messages: [MessageSchema],
  members: { type: Array, required: true },
});

const Chats = mongoose.model('chats', ChatSchema);

export default Chats;
