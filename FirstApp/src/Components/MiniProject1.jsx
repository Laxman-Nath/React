import { useState } from "react";

export const MiniProject = () => {
  const [ON, setON] = useState(false);
  const changeState = () => {
    setON(!ON);
  };
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        className={`${
          ON ? "bg-green-500 justify-end" : "bg-red-500 justify-start"
        } border-2 rounded-full border-black  flex  items-center p-2  transition-all duration-1500 ease-in-out`}
        style={{ height: "18%", width: "15%" }}
        onClick={changeState}
      >
        <div
          className={`${
            ON ? "translate-x-35" : "tranlate-x-4"
          } rounded-full border-4 border-white  transition-all duration-1500 ease-in-out flex justify-center items-center  hover:cursor-pointer`}
          style={{ height: "50px", width: "50px" }}
        >
          {ON ? "ON" : "OFF"}
        </div>
      </div>
    </div>
  );
};
