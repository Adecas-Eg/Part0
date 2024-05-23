import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = ( props) => (
  <div>
    <h4>{props.text}</h4>
    <p>{props.value}</p>
  </div>
);
const Statistics = (props) => {
  if (props.total === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <StatisticLine text="Average score" value={props.average.toFixed(2)} />
      <StatisticLine text="Positive feedback" value={`${(props.positive * 100).toFixed(2)}%`} />
    </div>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : good / total;

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <h1>Statistics</h1>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <Statistics total={total} average={average} positive={positive} />
    </div>
  );
};

export default App;

