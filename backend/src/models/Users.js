import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const { Schema } = mongoose;

const User = new Schema(
  {
    _id: { type: String, default: () => nanoid() },
    userName: { type: String, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true },
    lastOnline: { type: Date },
    avatar: { type: String, required: true },
    teams: { type: Array, required: true, default: [] },
  },
  { collection: 'users' },
);

const Users = mongoose.model('users', User);

export default Users;
