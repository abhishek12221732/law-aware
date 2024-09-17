import React, { useState } from 'react';
import questions from '../constants/questions.json';

const QuizPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleAnswerSelect = (answer) => {
    if (selectedAnswer === null) {
      const currentQuestion = questions[currentIndex];
      if (answer === currentQuestion.correctAnswer) {
        setScore(score + 1);
      } else {
        setScore(score - 0.25);
      }

      // Move to next question
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
      } else {
        setIsQuizCompleted(true);
      }
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-black mb-4">Quiz</h1>
      {!isQuizCompleted ? (
        <>
          <p className="text-lg text-black mb-2">Question {currentIndex + 1} of {questions.length}</p>
          <p className="text-xl text-black mb-4">{currentQuestion.question}</p>
          <ul className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleAnswerSelect(option)}
                  disabled={selectedAnswer !== null}
                  className={`w-full py-2 px-4 rounded-lg border-2 ${selectedAnswer === option ? 'bg-gray-300' : 'bg-gray-100'} ${selectedAnswer ? 'cursor-not-allowed' : 'cursor-pointer'} transition-all ease-in-out duration-200 text-black`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lg font-semibold text-black">Score: {score.toFixed(2)}</p>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Quiz Completed!</h2>
          <p className="text-xl text-black">Your total score is:</p>
          <p className="text-3xl font-bold text-black">{score.toFixed(2)}</p>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setScore(0);
              setIsQuizCompleted(false);
            }}
            className="mt-6 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all ease-in-out duration-200"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;