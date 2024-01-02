import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  options: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Option'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Prevent deletion if any options have votes
questionSchema.pre('deleteOne', async function (next) {
  const hasVotedOptions = await this.options.some(option => option.votes > 0);
  if (hasVotedOptions) {
    next(new Error('Cannot delete question with options that have votes'));
  } else {
    next();
  }
});

export default mongoose.model('Question', questionSchema);
