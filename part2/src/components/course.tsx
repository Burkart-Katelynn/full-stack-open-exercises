import CourseTitle from "./course-title";
import Content from "./content";
import Total from "./total";
import type { Course as CourseType } from "../types";

const Course = (props: { course: CourseType }) => {
  const { name, parts } = props.course;
  return (
    <>
      <CourseTitle course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

export default Course;
