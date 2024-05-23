import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });
  const handleClick = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));
  const handleVote = () => {
    const copy = { ...points };
    copy[selected] += 1;
    setPoints(copy);
  };

  const getMaxVotedAnecdote = () => {
    const maxVotes = Math.max(...Object.values(points));
    const maxVotedIndex = Object.keys(points).find(key => points[key] === maxVotes);
    console.log(maxVotedIndex);
    return maxVotedIndex;
  };
  const maxVotedIndex = getMaxVotedAnecdote();

  return (
    <div>
      <br></br>
      <p>{anecdotes[selected]}</p>
      <p>
        {" "}
        has <b> {points[selected]} votes</b>
      </p>
      <button onClick={handleVote}>Vote</button>

      <button onClick={handleClick}>Rand</button>

      <h4>
        Most Anecdotes max votes value is
      </h4>
      <p>anecdotes {anecdotes[maxVotedIndex]} whit votes is <b>{points[ maxVotedIndex ]}</b> </p>
    </div>

  );
};

export default App;
