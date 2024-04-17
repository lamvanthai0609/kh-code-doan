import voteController from "../controller/vote.controller.js";
import express from 'express';

const router = express.Router();

router.get('/', voteController.find);
router.get('/:id', voteController.findById);
router.post('/', voteController.create);
router.put('/:id', voteController.update);
router.delete('/:id', voteController.delete);

export const voteRouter = router;