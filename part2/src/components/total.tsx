import type { Part } from "../types";

const Total = (props: { parts: Part[] }) => {
  const { parts } = props;
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <p>
      <strong>Total of {totalExercises} exercises</strong>
    </p>
  );
};

export default Total;
