import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <button  onClick={() => setGood(1 + good)}> Good</button>
      <button   onClick={() => setNeutral(1 + neutral)}> Neutral</button>
      <button onClick={() => setBad(1 + bad)}> Bad</button>
      <br />
      <h1>Statistis</h1>
      <br />
      <h4>count good</h4>
      {good}
      <br />
      <h4>count neutral</h4>

      {neutral}
      <br />
      <h4>count bad</h4>

      {bad}
    </div>
  );
};

export default App;
