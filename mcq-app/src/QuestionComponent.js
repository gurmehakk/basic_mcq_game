import React, { useState } from 'react';

const QuestionComponent = ({ question, options, correctAnswer, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsAnswerCorrect(option === correctAnswer);
  };

  return (
    <div>
      <h2>{question}</h2>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleSelectOption(option)}
          className={
            selectedOption === option
              ? isAnswerCorrect
                ? 'correct'
                : 'incorrect'
              : ''
          }
        >
          {option}
        </button>
      ))}
      <button onClick={() => handleAnswer(selectedOption)}>Next</button>
    </div>
  );
};

export default QuestionComponent;
