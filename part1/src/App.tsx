import { useState } from "react";

const Header = ({ text }: { text: string }) => <h1>{text}</h1>;

const Button = ({
  handleClick,
  text,
}: {
  handleClick: () => void;
  text: string;
}) => <button onClick={handleClick}>{text}</button>;

const Anecdote = ({ anecdote }: { anecdote: string }) => <p>{anecdote}</p>;

const Votes = ({ votes }: { votes: number }) => <p>has {votes} votes</p>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const getAnecdoteWithMostVotes = () => {
    const maxVotes = Math.max(...votes);
    const indexOfMaxVotes = votes.indexOf(maxVotes);
    return anecdotes[indexOfMaxVotes];
  };

  return (
    <>
      <Header text="Anecdote of the Day" />
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={handleRandomAnecdote} text="Next Anecdote" />
      <Header text="Anecdote with Most Votes" />
      <Anecdote anecdote={getAnecdoteWithMostVotes()} />
    </>
  );
};

export default App;
