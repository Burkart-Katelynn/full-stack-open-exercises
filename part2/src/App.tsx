const Header = (props: { course: string }) => {
  return <h1>{props.course}</h1>;
};

const Part = (props: { part: string; exercises: number }) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

type Part = { name: string; exercises: number; id: number };
type Course = { name: string; parts: Part[] };

const Content = (props: { parts: Part[] }) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Total = (props: { parts: Part[] }) => {
  const totalExercises = props.parts.reduce(
    (sum, part) => sum + part.exercises,
    0,
  );

  return (
    <p>
      <strong>Total of {totalExercises} exercises</strong>
    </p>
  );
};

const Course = (props: { course: Course }) => {
  const { name, parts } = props.course;
  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <>
      <Course course={course} />
    </>
  );
};

export default App;
