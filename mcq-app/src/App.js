import React, { useState, useEffect } from 'react';
import './App.css';

import questions from './questions';
import QuestionComponent from './QuestionComponent';
import ScoreComponent from './ScoreComponent';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    if (currentQuestion === questions.length) {
      // All questions answered
    }
  }, [currentQuestion]);

  return (
    <div className="container">
      {!gameStarted ? (
        <button onClick={() => setGameStarted(true)}>Start Game</button>
      ) : currentQuestion < questions.length ? (
        <QuestionComponent
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          correctAnswer={questions[currentQuestion].correctAnswer}
          handleAnswer={handleAnswer}
        />
      ) : (
        <ScoreComponent score={score} />
      )}
    </div>
  );
};

export default App;
