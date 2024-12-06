import { useContext } from "react";
import { BioContext } from "./ContextApi";

export const About = () => {
  const { name, age } = useContext(BioContext);
  return (
    <div className="flex flex-col justify-center h-full items-center">
      <h1>This is about page.</h1>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
    </div>
  );
};
