// src/routes/quiz.route.js
import express from 'express';
import { verifyToken, isAdmin } from '../utils/verifyUser.js';
import { getQuizzes, checkAnswer, getRandomQuizzes, bulkUploadQuizzes } from '../controllers/quiz.controller.js';

const router = express.Router();

// Routes accessible by all authenticated users
router.get('/quizzes', verifyToken, getQuizzes); // Read quizzes
router.post('/check-answer', verifyToken, checkAnswer); // Check answers
router.get('/random-quizzes', verifyToken, getRandomQuizzes); // Get random quizzes

// Routes accessible only by admin users
router.post('/bulk-upload', verifyToken, isAdmin, bulkUploadQuizzes); // Bulk upload quizzes

export default router;
