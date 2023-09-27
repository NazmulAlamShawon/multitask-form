// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
const messages = ["Learn React ", "apply for job ", "investfor new income "];
const App = () => {
  const [step, setStep] = useState(1);
  function handlePrev() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="step">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", colorL: "#fff" }}
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", colorL: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
