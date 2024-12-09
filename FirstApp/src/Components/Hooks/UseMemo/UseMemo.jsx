import { useMemo, useState } from "react";

export const UseMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen flex flex-col gap-3 justify-center items-center text-white bg-black">
        <ExpensiveComponent/>
      <button
        onClick={() => setCount(count + 1)}
        className="border-2 border-white rounded-md"
      >
        Increment
      </button>
      <h1>Parent componenent rendered:{count} times.</h1>
    </div>
  );
};

export const ExpensiveComponent = () => {
    
  const sum = () => {
    console.log("Calculating sum...........");
    let i;
    for (i = 1; i < 100000; i++) {
        
      i = i + 1;
    }
    return i;
  };

  
 const total= useMemo(()=>sum(),[])
  
  return <h1>Sum:{total}</h1>;
};

// The purpose of useMemo is to optimize heavy calculations by avoiding them on every render unless the dependencies change. Here:

// We avoid running sum() repeatedly every time the parent re-renders.
// The sum only runs once on the first render.
