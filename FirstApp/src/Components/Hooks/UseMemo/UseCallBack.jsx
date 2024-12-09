import { memo, useCallback, useState } from "react";

export const UseCallBack = () => {
  const [count, setCount] = useState(0);
//   const increment = () => {
//   console.log("incrementing....")
//     setCount((prevCount)=>prevCount+1);
//   };
//   const decrement = () => {
//     console.log("decrementing............");
//     setCount((prevCount) => prevCount - 1);
//   };

  const increment=useCallback(()=>{
    // console.log("incrementing....")
    setCount((prevCount)=>prevCount+1)
  },[])
  const decrement=useCallback(()=>{  
    // console.log("decrementing............");
    setCount((prevCount) => prevCount - 1);},[])
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white gap-3 text-3xl">
      <h1>Count:{count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export const Button =memo( ({ children, onClick }) => {
    console.log("rendering button ",children)
  return (
    <button
      className={`${
        children === "Increment" ? "bg-green-500" : "bg-red-500"
      } border-2 border-white rounded-md p-2 `}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
