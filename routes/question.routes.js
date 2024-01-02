import express from 'express';

import QuestionController from '../controllers/questions.controller.js';

// initialize router
const questionRouter = express.Router();

const questioncontroller = new QuestionController();

// Create a new question
questionRouter.post('/create', questioncontroller.createQuestion);

// Add options to a specific question
questionRouter.post('/:questionId/options/create', questioncontroller.addOptions);

// Get a question with its options and votes
questionRouter.get('/:questionId', questioncontroller.getQuestion);

// Delete a question (considering constraints)
questionRouter.delete('/:questionId/delete', questioncontroller.deleteQuestion);

export default questionRouter;