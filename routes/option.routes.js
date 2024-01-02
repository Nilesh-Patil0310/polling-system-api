import express from 'express';

import OptionController from '../controllers/options.controller.js';

// initialize router
const optionRouter = express.Router();

const optioncontroller = new OptionController();

// Increment the count of votes for an option
optionRouter.put('/:optionId/add_vote', optioncontroller.addVote);

// Delete an option (considering constraints)
optionRouter.delete('/:optionId/delete', optioncontroller.deleteOption);

export default optionRouter;