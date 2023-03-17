import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");

  function handleSubmit() {
    // style alert - sweet alert?
    // submit answer - save to database or a file
    if (answer !== "") {
      alert("Your next location is [location]!");
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
          onChange={(event) => setAnswer(event.target.value)}
          value={answer}
        ></textarea>
        <button type="submit" id="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {/* <img
        id="lightbulb-man"
        src="lightbulbman.png"
        alt="lightbulb man superhero"
      ></img> */}
    </div>
  );
}

export default App;
