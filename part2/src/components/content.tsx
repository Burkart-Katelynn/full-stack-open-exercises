import Part from "./part";
import type { Part as PartType } from "../types";

const Content = (props: { parts: PartType[] }) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

export default Content;
