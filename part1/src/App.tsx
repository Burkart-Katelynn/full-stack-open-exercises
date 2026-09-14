import { useState } from "react";

const Header = (props: { text: string }) => {
  return <h1>{props.text}</h1>;
};

const Button = (props: { onClick: () => void; text: string }) => {
  const { onClick, text } = props;
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = (props: { text: string; value: number }) => {
  const { text, value } = props;
  return (
    <p>
      {text} {value}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <Header text="give feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Header text="statistics" />
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
    </>
  );
};

export default App;
