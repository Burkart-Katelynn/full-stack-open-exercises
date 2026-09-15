const Header = (props: { title: string }) => {
  return <h1>{props.title}</h1>;
};

const CourseTitle = (props: { course: string }) => {
  return <h2>{props.course}</h2>;
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
  const { parts } = props;
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

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
      <CourseTitle course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      <Header title="Web development curriculum" />
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default App;
