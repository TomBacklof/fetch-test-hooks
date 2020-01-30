import React, { useEffect, useState } from "react";

function App() {
  const [delay, setDelay] = useState("");

  function fetchData() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://labs.thetrainbrain.com/knockon/?minutes=120"
    )
      .then(response => response.json())
      .then(data => setDelay(data));
  }

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 5000);
  }, []);

  return (
    <div>
      {delay.disruptions.station.map(disruptions => (
        <p>{disruptions.station.station}</p>
      ))}
    </div>
  );
}

export default App;
