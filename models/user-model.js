const { Schema, model } = 'mongoose';

const userSchema = new Schema(
  {
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
    thoughts: [{ type: Schema.typers.ObjectId, ref: 'Thought-model' }],
    friends: [{ type: Schema.TypesObjectId, ref: 'User-model' }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

model.exports = User;
