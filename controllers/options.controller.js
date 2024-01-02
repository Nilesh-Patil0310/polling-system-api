import mongoose from 'mongoose';
import Option from '../models/options.model.js'

export default class OptionController{
// Add a vote to an option
addVote = async (req, res) => {
  try {
    const { optionId } = req.params;
    const option = await Option.findByIdAndUpdate(
      optionId,
      { $inc: { votes: 1 } },
      { new: true }
    );
    res.json(option);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an option (considering constraints)
deleteOption = async (req, res) => {
  try {
    const { optionId } = req.params;
    await Option.findByIdAndDelete(optionId);
    res.json({ message: 'Option deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

}