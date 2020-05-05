import mongoose from 'mongoose';

export default () => {
  mongoose
    .connect('mongodb://localhost:27017/trello-copy', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .catch(e => console.log(e));
};
