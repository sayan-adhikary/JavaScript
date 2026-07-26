import { useEffect, useState } from "react";
import quizData from "./data/quizData.js";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quizData[0].time);

  const activeQuiz = quizData[currentQuestion];

  useEffect(() => {
    setTimeLeft(activeQuiz.time);
    setShowAnswer(false);
  }, [activeQuiz]);

  useEffect(() => {
    if (timeLeft === 0) {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, currentQuestion]);

  function handleNext() {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function handlePrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function handleAns() {
    setShowAnswer((previousShowAnswer) => !previousShowAnswer);
  }

  function handleAdd30Seconds() {
    setTimeLeft((previousTimeLeft) => previousTimeLeft + 30);
  }

  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
      <main style={{ flex: 1 }}>
        <h1>Quiz App</h1>
        <p>
          Question {currentQuestion + 1} of {quizData.length}
        </p>

        <div>
          <img src={activeQuiz.imgtag} alt={activeQuiz.question} />
          <h2>{activeQuiz.question}</h2>

          <ul>
            {activeQuiz.options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>

          {showAnswer && <p>Answer: {activeQuiz.ans}</p>}
        </div>

        <div>
          <button onClick={handlePrev} disabled={currentQuestion === 0}>
            Previous Question
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestion === quizData.length - 1}
          >
            Next Question
          </button>
          <button onClick={handleAns}>
            {showAnswer ? "Hide the Answer" : "Show the Answer"}
          </button>
        </div>
      </main>

      <div>
        <h3>Timer</h3>
        <div>{timeLeft}</div>
        <p>seconds left</p>
        <p>Time per question: {activeQuiz.time} seconds</p>
        <button onClick={handleAdd30Seconds}>Add 30 sec more</button>
      </div>
    </div>
  );
}

export default App;
