import React, { useState } from "react";
import "./Squiz.css";

const Squiz = () => {
  const quizData = [
    {
      question: "1. What do the letters NBA stand for?",
      options: [
        "National Baseball Association",
        "National Basketball Association",
        "National Bowling Association",
        "National Boxing Association",
      ],
      answer: "National Basketball Association",
    },
    {
      question: "2. Who has scored the most points in NBA history?",
      options: [
        "Kareem Abdul-Jabbar",
        "Chris Bosh",
        "Charles Barkley",
        "Rick Barry",
      ],
      answer: "Kareem Abdul-Jabbar",
    },
    {
      question: "3. How many fouls can a player commit before being ejected?",
      options: ["Four", "Three", "Two", "Six"],
      answer: "Six",
    },
    {
      question: "4. How long are NBA quarters?",
      options: ["10 minutes", "5 minutes", "3 minutes", "12 minutes"],
      answer: "12 minutes",
    },
    {
      question: "5. What Canadian cities have ever had an NBA team?",
      options: ["Ottawa", "Calgary", "Toronto", "Montreal"],
      answer: "Toronto",
    },
    {
      question: "6. Which team’s logo is shaped like a musical note?",
      options: [
        "Utah Jazz",
        "Charlotte Bobcats",
        "Detroit Pistons",
        "Cleveland Cavaliers",
      ],
      answer: "Utah Jazz",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const loadQuestion = () => {
    return (
      <div>
        <p>{quizData[currentQuestion].question}</p>
        <div>
          {quizData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="option-btn"
              onClick={() => checkAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const checkAnswer = (userAnswer) => {
    const currentQuizData = quizData[currentQuestion];
    if (userAnswer === currentQuizData.answer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="quiz-container">
      {!quizCompleted ? (
        <div>
          <p className="question">{quizData[currentQuestion].question}</p>
          <div>
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() => checkAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="quiz-completed">
          <p className="question">{`Quiz completed! Your score: ${score}/${quizData.length}`}</p>
          <button className="restart-btn" onClick={resetQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Squiz;
