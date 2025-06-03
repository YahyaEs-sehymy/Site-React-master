

import React, { useState, useEffect } from 'react';
import questionsData from './dataTest';
import './css/TestPage.css';
import Header from './Header';

function TestPage() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(59); // Timer for each question
  const [timerActive, setTimerActive] = useState(true); // To control the timer's state

  useEffect(() => {
    const randomQuestions = getRandomQuestions(5);
    setSelectedQuestions(randomQuestions);
    setAnswers(new Array(randomQuestions.length).fill(null)); // Initialize answers array

    if (selectedQuestions.length > 0) {
      startTimer(); // Start the timer when questions are available
    }
  }, []); // Empty array means it will run only once when the component mounts

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft]);

  // Function to get random questions
  const getRandomQuestions = (count) => {
    let shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Start timer
  const startTimer = () => {
    setTimeLeft(60); // Reset timer to 30 seconds
    setTimerActive(true);
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // Handle the change in selected answer
  const handleAnswerChange = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
  };

  // Go to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      startTimer(); // Restart the timer for the next question
    } else {
      handleSubmit();
    }
  };

  // Handle test submission
  const handleSubmit = () => {
    setSubmitted(true);
    calculateScore();
  };

  // Calculate the score based on the user's answers
  const calculateScore = () => {
    let calculatedScore = 0;
    selectedQuestions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
  };

  // Feedback message based on the score
  const feedbackMessage = () => {
    const percentage = (score / selectedQuestions.length) * 100;
    if (percentage >= 80) {
      return { message: 'Great job! Keep it up!', emoji: '😄', color: 'green' }; // happy emoji
    } else if (percentage >= 50) {
      return { message: 'Good effort! You can do better!', emoji: '🙂', color: 'orange' }; // neutral emoji
    } else {
      return { message: 'Don’t worry, keep practicing!', emoji: '😔', color: 'red' }; // sad emoji
    }
  };

  const { message, emoji, color } = feedbackMessage();

  // Ensure selectedQuestions is not empty
  if (selectedQuestions.length === 0) {
    return <div>Loading...</div>; // Show a loading message until questions are available
  }

  return (
    <div >
      <Header />
      <div className='body'>
      <div className='khawi'></div>
      <div className="faq test-page">
        <h1>React Theoretical Quiz</h1>

        {!submitted ? (
          <div className="faq-container">
                <div className="timer">
                    00:{timeLeft} 
                </div>
            <div className="faq-itemm">
              {/* Display the current question */}
              <p>{selectedQuestions[currentQuestionIndex]?.question}</p>
              {selectedQuestions[currentQuestionIndex]?.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input
                    type="radio"
                    className="faq-item-input"
                    name={`question-${currentQuestionIndex}`}
                    value={option}
                    checked={answers[currentQuestionIndex] === option}
                    onChange={() => handleAnswerChange(option)}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
            {/* Timer */}
            

            {/* Buttons for navigation */}
            <div className="submitt">
              {currentQuestionIndex < selectedQuestions.length - 1 ? (
                <button className="faq-next-btn" onClick={handleNextQuestion}>Next</button>
              ) : (
                <button className="faq-next-btn" onClick={handleSubmit}>Submit</button>
              )}
            </div>
          </div>
        ) : (
          <div className={`result ${color}`}>
            <h3>Score: {score} / {selectedQuestions.length}</h3>
            <p>{message} {emoji}</p>
            <div>
              <p>Suggestions for improvement:</p>
              {score < 2 ? (
                <ul>
                  <li>Try studying the core React concepts like components, state, and props.</li>
                  <li>Learn more about React hooks like `useState` and `useEffect`.</li>
                  <li>Practice with more React exercises and tutorials!</li>
                </ul>
              ) : score < 4 ? (
                <ul>
                  <li>Keep up the good work! Focus on optimizing your React code.</li>
                  <li>Learn more about advanced hooks like `useContext` and `useReducer`.</li>
                </ul>
              ) : (
                <ul>
                  <li>You're doing great! Try building a project using React to apply what you've learned.</li>
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default TestPage;
