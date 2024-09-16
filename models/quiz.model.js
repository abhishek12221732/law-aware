import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswers: [{ type: String, required: true }], // Array for multiple correct answers
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' }, // Difficulty level
  category: { type: String }, // Optional category for quiz (e.g., 'History', 'Science')
}, { timestamps: true });

export default mongoose.model('Quiz', QuizSchema);
