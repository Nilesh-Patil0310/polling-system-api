import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  votes: {
    type: Number,
    default: 0
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Prevent deletion if the option has votes
optionSchema.pre('deleteOne', async function (next) {
  if (this.votes > 0) {
    next(new Error('Cannot delete option with votes'));
  } else {
    next();
  }
});

export default mongoose.model('Option', optionSchema);
