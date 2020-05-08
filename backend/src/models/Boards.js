import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const { Schema } = mongoose;

const BackgroundSchema = new Schema({
  fullImage: { type: String },
  image: { type: String },
});

const BoardSchema = new Schema(
  {
    title: { type: String, required: true },
    owner: { type: String },
    team: { type: String, required: true },
    members: { type: Array, required: true, default: [] },
    columns: { type: Array, required: true, default: [] },
    tasks: { type: Array, required: true, default: [] },
    columnsOrder: { type: Array, required: true, default: [] },
    background: { type: BackgroundSchema, default: {} },
    favourite: { type: Boolean, required: true, default: false },
    color: { type: String, required: true, default: '' },
  },
  { collection: 'boards' },
);

const Boards = mongoose.model('boards', BoardSchema);

export default Boards;
