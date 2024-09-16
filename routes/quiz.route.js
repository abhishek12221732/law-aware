// routes/quiz.route.js
import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { getQuizzes, checkAnswer, getRandomQuizzes, bulkUploadQuizzes } from '../controllers/quiz.controller.js';

const router = express.Router();

router.get('/quizzes', verifyToken, getQuizzes);
router.post('/check-answer', verifyToken, checkAnswer);
router.get('/random-quizzes', verifyToken, getRandomQuizzes);
router.post('/bulk-upload', verifyToken, bulkUploadQuizzes);

export default router;
