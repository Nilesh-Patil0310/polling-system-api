import mongoose from 'mongoose';
import Question from '../models/Question';

// Create a new question
export const createQuestion = async (req, res) => {
  try {
    const { title } = req.body;
    const question = new Question({ title });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add options to a question
export const addOptions = async (req, res) => {
  try {
    const { questionId, text } = req.body;
    const question = await Question.findById(questionId);

    if (!question) {
      res.status(404).json({ error: 'Question not found' });
      return;
    }

    const option = new Option({ text, question: question._id });
    await option.save();
    question.options.push(option);
    await question.save();
    res.json(option);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a question with its options and votes
export const getQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;
    const question = await Question.findById(questionId)
      .populate('options')
      .exec();

    if (!question) {
      res.status(404).json({ error: 'Question not found' });
      return;
    }

    res.json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a question (considering constraints)
export const deleteQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;
    await Question.findByIdAndDelete(questionId);
    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
