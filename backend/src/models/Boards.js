import mongoose from 'mongoose';

const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  members: { type: Array, required: true, default: [] },
});

const ColumnSchema = new Schema({
  title: { type: String, required: true },
  tasks: [TaskSchema],
});

const BackgroundSchema = new Schema({
  fullImage: { type: String, required: true },
  image: { type: String, required: true },
});

const BoardSchema = new Schema(
  {
    title: { type: String, required: true },
    columns: [ColumnSchema],
    columnsOrder: { type: Array, required: true, default: [] },
    members: { type: Array, required: true, default: [] },
    background: { type: BackgroundSchema, required: true },
    favourite: { type: Boolean, required: true, default: false },
  },
  { collection: 'boards' },
);

const Boards = mongoose.model('boards', BoardSchema);

export default Boards;
