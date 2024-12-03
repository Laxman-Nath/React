import { useEffect, useState } from "react";

export const Challenge = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  //   const handleInputChange = (event) => {

  //     setCount((prevCount) => prevCount + 1);
  //     setValue(event.target.value);
  //   };
  useEffect(() => {
    console.log("Name is:", value);
    document.title = `count:${count}`;
  }, [count]);
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1>Use Effect</h1>
      <p>Count:{count}</p>
      <button
        className="bg-green-500 text-white border-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <p>Name:{value}</p>
      <input
        type="text"
        placeholder="Enter your name"
        name="value"
        onChange={(e) => setValue(e.target.value)}
        className="text-center w-80 h-10 border-2 border-black rounded-full"
        value={value}
      />
    </div>
  );
};
