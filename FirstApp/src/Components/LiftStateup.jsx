import { useState } from "react";

export const LiftStateUp = () => {
  const [name, setName] = useState("");
 
  return <div className="h-full w-full flex flex-col justify-center items-center">
  <FirstChild name={name} setName={setName} />;
  <SecondChild name={name}/>
  </div>
   

};

export const FirstChild = ({ name, setName }) => {
//   console.log(name);
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-2 rounded-md border-black h-10 w-50"
      />
      <div>{name}</div>
    </div>
  );
};

export const SecondChild=({name,setName})=>{
    console.log(name)
   return <div className="text-red-600">Name:{name}</div>
}
