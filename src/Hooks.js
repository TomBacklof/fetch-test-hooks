import React, { useEffect, useState } from "react";
import Quote from "./QuoteHooks";

function App() {
  const [showFirstQuote, setShowFirstQuote] = useState(true);
  const [quote, setQuote] = useState("");

  function toggleButton() {
    setShowFirstQuote(!showFirstQuote);
  }

  function beans() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://labs.thetrainbrain.com/knockon/?minutes=120"
    )
      .then(response => response.json())
      .then(data => setQuote(data));
    console.log("beansbeans");
  }

  useEffect(() => {
    setInterval(() => {
      beans();
    }, 5000);
  }, []);

  return (
    <div>
      <button onClick={() => toggleButton()}>Toggle</button>
      {showFirstQuote ? <Quote quote={quote} /> : ""}
    </div>
  );
}

export default App;
