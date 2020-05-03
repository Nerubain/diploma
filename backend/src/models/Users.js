import mongoose from 'mongoose';

const { Schema } = mongoose;

// const CollectionSchema = new Schema({
//   boards: { type: Array, required: true, default: [] },
//   teams: { type: Array, required: true, default: [] },
// });

const User = new Schema(
  {
    userName: { type: String, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true },
    lastOnline: { type: Date, required: true },
    avatar: { type: String, required: true },
    teams: { type: Array, required: true },
  },
  { collection: 'users' },
);

const Users = mongoose.model('users', User);

export default Users;
