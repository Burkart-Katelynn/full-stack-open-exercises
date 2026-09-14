import { useState } from "react";

const Header = (props: { text: string }) => {
  return <h1>{props.text}</h1>;
};

const Button = (props: { onClick: () => void; text: string }) => {
  const { onClick, text } = props;
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = (props: {
  text: string;
  value: number;
  isPercentage?: boolean;
}) => {
  const { text, value, isPercentage } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>{isPercentage ? `${value} %` : value}</td>
    </tr>
  );
};

const Statistics = (props: {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  average: number;
  positive: number;
}) => {
  const { good, neutral, bad, total, average, positive } = props;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} isPercentage />
    </table>
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

  const updateStatistics = (
    goodValue: number,
    neutralValue: number,
    badValue: number,
  ) => {
    setTotal(getTotal(goodValue, neutralValue, badValue));
    setAverage(getAverage(goodValue, neutralValue, badValue));
    setPositive(getPositive(goodValue, neutralValue, badValue));
  };

  const handleGoodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
    updateStatistics(newGood, neutral, bad);
  };

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    updateStatistics(good, newNeutral, bad);
  };

  const handleBadClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
    updateStatistics(good, neutral, newBad);
  };

  return (
    <>
      <Header text="give feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Header text="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </>
  );
};

export default App;
