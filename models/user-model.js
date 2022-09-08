const { Schema, model } = 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    match: [/.+\@.+\..+/],
  },
});
