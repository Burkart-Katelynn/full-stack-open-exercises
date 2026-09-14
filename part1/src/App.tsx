import { useState } from "react";

const Header = (props: { text: string }) => {
  return <h1>{props.text}</h1>;
};

const Button = (props: { onClick: () => void; text: string }) => {
  const { onClick, text } = props;
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = (props: {
  text: string;
  value: number;
  isPercentage?: boolean;
}) => {
  const { text, value, isPercentage } = props;
  return (
    <p>
      {text} {isPercentage ? `${value} %` : value}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const getTotal = (
    goodValue: number,
    neutralValue: number,
    badValue: number,
  ) => goodValue + neutralValue + badValue;

  const getAverage = (
    goodValue: number,
    neutralValue: number,
    badValue: number,
  ) => (goodValue - badValue) / getTotal(goodValue, neutralValue, badValue);

  const getPositive = (
    goodValue: number,
    neutralValue: number,
    badValue: number,
  ) => (goodValue / getTotal(goodValue, neutralValue, badValue)) * 100;

  const handleGoodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
    setTotal(getTotal(newGood, neutral, bad));
    setAverage(getAverage(newGood, neutral, bad));
    setPositive(getPositive(newGood, neutral, bad));
  };

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setTotal(getTotal(good, newNeutral, bad));
    setAverage(getAverage(good, newNeutral, bad));
    setPositive(getPositive(good, newNeutral, bad));
  };

  const handleBadClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
    setTotal(getTotal(good, neutral, newBad));
    setAverage(getAverage(good, neutral, newBad));
    setPositive(getPositive(good, neutral, newBad));
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
      <Statistic text="all" value={total} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={positive} isPercentage />
    </>
  );
};

export default App;
