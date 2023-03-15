import { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");

  function handleSubmit() {
    // style alert
    // submit answer - save to database or a file
    if (answer !== "") {
      alert("Your next location is....");
      setAnswer("");
    } else if (answer === "") {
      alert("Please submit an answer!");
    }
  }

  return (
    <div id="question-container">
      <form id="quiz-form">
        <h1>Submit your answer to reveal your next location!</h1>
        <h2>
          If your scavenger hunt partner could have one superpower, what would
          they choose?
        </h2>
        <textarea
          id="answer-input"
          // rows="3"
          onChange={(event) => setAnswer(event.target.value)}
          value={answer}
        ></textarea>
        <button type="submit" id="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
