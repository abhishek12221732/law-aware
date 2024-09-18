import React, { useState, useEffect } from 'react';
import questions from '../constants/questions.json';

const QuizPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (isQuizCompleted) return;

    if (timeLeft <= 0) {
      handleAnswerSelect(null); // Move to the next question when time is up
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isQuizCompleted]);

  const handleAnswerSelect = (answer) => {
    if (selectedAnswer === null) {
      const currentQuestion = questions[currentIndex];
      if (answer === currentQuestion.correctAnswer) {
        setScore(score + 1);
      } else if (answer !== null) {
        setScore(score - 0.25);
      }

      // Move to next question
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
        setTimeLeft(60); // Reset timer for the next question
      } else {
        setIsQuizCompleted(true);
      }
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#01161B] to-[#02242c] text-white flex items-center justify-center"
    >
      <div
        className="w-full max-w-3xl p-6 bg-[#01161B] shadow-lg rounded-lg"
      >
        <h1 className="text-3xl font-bold mb-4">Quiz</h1>
        {!isQuizCompleted ? (
          <div className="space-y-6">
            <div className="mb-4">
              <p className="text-lg mb-2">Question {currentIndex + 1} of {questions.length}</p>
              <p className="text-xl mb-4">{currentQuestion.question}</p>
              <p className="text-lg mb-4">Time Left: {timeLeft}s</p>
            </div>
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
            <p className="mt-4 text-lg font-semibold">Score: {score.toFixed(2)}</p>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-xl">Your total score is:</p>
            <p className="text-3xl font-bold">{score.toFixed(2)}</p>
            <button
              onClick={() => {
                setCurrentIndex(0);
                setScore(0);
                setIsQuizCompleted(false);
                setTimeLeft(60); // Reset timer for the new quiz
              }}
              className="mt-6 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all ease-in-out duration-200"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
