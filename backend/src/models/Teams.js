import mongoose from 'mongoose';

const { Schema } = mongoose;

const TeamsScheme = new Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true, default: 'default' },
    boards: { type: Array, required: true, default: [] },
    members: { type: Array },
    owner: { type: String },
  },
  { collection: 'teams' },
);

const Team = mongoose.model('teams', TeamsScheme);

export default Team;
