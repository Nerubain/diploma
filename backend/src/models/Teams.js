import mongoose from 'mongoose';

const { Schema } = mongoose;

const TeamsScheme = new Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    favourite: { type: Boolean, required: true, default: false },
    boards: { type: Array, required: true, default: [] },
    members: { type: Array, required: true, default: [] },
  },
  { collection: 'teams' },
);

const Team = mongoose.model('teams', TeamsScheme);

export default Team;
