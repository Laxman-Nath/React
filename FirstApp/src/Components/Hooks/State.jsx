import { useState } from "react";

export const State = () => {
  const [value, setValue] = useState(0);
  const handleButtonClick = () => {
    setValue(() => value + 1);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-black ">
      <h1 className="text-3xl text-white">{value}</h1>
      <button
        className="border-2 border-white rounded-md text-3xl text-white hover:bg-green-500"
        onClick={handleButtonClick}
      >
        Increment
      </button>
    </div>
  );
};

// State Change → setValue is called.
// Re-rendering → React re-renders the component with the new value.
// Updated UI → The new value is displayed in the UI