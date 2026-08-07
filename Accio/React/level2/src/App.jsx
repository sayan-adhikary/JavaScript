import { useEffect, useState } from "react";
import questions from "./data/questions";
import "./index.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(questions[0].timer);

  const question = questions[currentIndex];

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timerId);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [currentIndex]);

  function nextQuestion() {
    if (currentIndex === questions.length - 1) return;

    const newIndex = currentIndex + 1;

    setCurrentIndex(newIndex);
    setTimeLeft(questions[newIndex].timer);
    setShowAnswer(false);
  }

  function prevQuestion() {
    if (currentIndex === 0) return;

    const newIndex = currentIndex - 1;

    setCurrentIndex(newIndex);
    setTimeLeft(questions[newIndex].timer);
    setShowAnswer(false);
  }

  function addTime() {
    setTimeLeft(timeLeft + 30);
  }

  function showAnswerHandler() {
    setShowAnswer((prev) => !prev);
  }

  return (
    <div className="app">
      <div className="quiz-box">
        <div className="top-controls">
          <button onClick={prevQuestion}>Prev Ques</button>
          <button onClick={showAnswerHandler}>
            {showAnswer ? "Hide Ans" : "Show Ans"}
          </button>
          <button onClick={nextQuestion}>Next Ques</button>
        </div>

        <div className="middle-section">
          <div className="left-section">
            <div className="question-box">
              <h2>Question {currentIndex}</h2>

              <p style={{ whiteSpace: "pre-line" }} className="question-text">
                {question.question}
              </p>

              {question.image && (
                <img
                  src={question.image}
                  alt="question"
                  className="question-image"
                />
              )}
            </div>

            {question.options.length > 0 && (
              <div className="options-grid">
                {question.options.map((option, index) => {
                  return (
                    <button key={index} className="option-btn">
                      {option}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="right-section">
            <div className="timer-circle">{timeLeft} sec</div>

            <button className="add-time-btn" onClick={addTime}>
              Add 30 sec
            </button>
          </div>
        </div>

        {showAnswer && (
          <div className="answer-box">
            <h3>Answer</h3>
            <p>{question.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
