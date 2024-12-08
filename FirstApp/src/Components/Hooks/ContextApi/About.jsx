import { useContext } from "react";
import { BioContext, useBioContext } from "./ContextApi";
import { use } from "react";

export const About = () => {
//   const { name, age } = useContext(BioContext);
// const {name,age}=useBioContext();
const {name,age}=use(BioContext); // use can also be used inside if else but useContext doesn't
  return (
    <div className="flex flex-col justify-center h-full items-center">
      <h1>This is about page.</h1>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
    </div>
  );
};
