const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction-model');
const moment = require('moment');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    require: true,
    maxLength: 280,
    minLength: 1,
  },
  createdAt: {
    type Date,
    default: Date.now,
    get: (createAtVal) => moment(createAtVal).format('MMM DD, YYYY [at] hh:mm a')
  },
  username: {
    type: String,
    require: true
  },
  reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;

});

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;
