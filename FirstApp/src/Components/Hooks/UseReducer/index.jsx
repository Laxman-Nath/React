import { useReducer } from "react";

export const UseReducer = () => {
  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-black text-white text-2xl">
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </>
  );
};
