// controllers/quiz.controller.js
import Quiz from '../models/quiz.model.js';
import { errorHandler } from '../utils/error.js';

export const getQuizzes = async (req, res, next) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    next(error);
  }
};

export const checkAnswer = async (req, res, next) => {
  const { questionId, answer } = req.body;
  try {
    const quiz = await Quiz.findById(questionId);
    if (!quiz) {
      return next(errorHandler(404, 'Quiz not found'));
    }
    const isCorrect = quiz.correctAnswer === answer;
    res.status(200).json({ isCorrect });
  } catch (error) {
    next(error);
  }
};


// controllers/quiz.controller.js
export const getRandomQuizzes = async (req, res, next) => {
  try {
    const quizzes = await Quiz.aggregate([{ $sample: { size: 15 } }]);
    res.status(200).json(quizzes);
  } catch (error) {
    next(error);
  }
};


// this route is temporary to uplaod questions - its not for users
export const bulkUploadQuizzes = async (req, res, next) => {
  try {
    const { quizzes } = req.body;
    if (!quizzes || quizzes.length === 0) {
      return res.status(400).json({ message: 'No quiz data provided' });
    }

    await Quiz.insertMany(quizzes);
    res.status(201).json({ message: 'Quizzes uploaded successfully' });
  } catch (error) {
    next(error);
  }
};