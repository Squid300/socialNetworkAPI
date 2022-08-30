const { Schema, ObjectId } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = reactionSchema;