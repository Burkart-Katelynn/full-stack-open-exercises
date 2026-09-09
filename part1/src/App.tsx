const Header = (props: { course: string }) => {
  return <h1>{props.course}</h1>;
}

const Part = (props: { part: string; exercises: number }) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
}

type Part = { name: string;
  exercises: number;
};

const Content = (props: { parts: Part[] }) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
}

const Total = (props: { parts: Part[] }) => {
  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <p>
      Number of exercises {totalExercises}
    </p>
  );
} 

const App = () => {
 const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  const name = course.name;
  const parts = course.parts;


  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
}

export default App;
