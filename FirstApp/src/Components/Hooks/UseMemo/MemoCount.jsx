import { useState } from "react";
import  Counts  from "./Counts";

export const MemoCounts = () => {
  const [count, setCount] = useState(0);
  return (
    <div className=" h-screen justify-center gap-10 flex flex-col items-center  bg-black text-white">
      <div>
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
      <Counts />
    </div>
  );
};
