import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good-bad)/total;
  const positive =total ===0 ?0 : (good/total);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}> Good</button>
      <button onClick={handleNeutralClick}> Neutral</button>
      <button onClick={handleBadClick}> Bad</button>
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

    <br/>
    All
    <br />

    { total}
    <h4> Averague total</h4>

      {average}
    <h4>Positive All</h4>
      {positive} %
    </div>
  );
};

export default App;
