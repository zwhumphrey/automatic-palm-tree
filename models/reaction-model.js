const { Schema, model, Types } = require('moongoose');
const moment = require('moment');

const reactionSchema = new Schema(
  {
    reactionId: {
      types: Types.ObjectId,
      default: new Types.ObjectId(),
    },
    reationBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format('MMM DD, YYY [at] hh:mm a'),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

model.exports = reactionSchema;
