/* eslint-disable react/prop-types */
import { forwardRef, useId, useRef } from "react";

export const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Username:", username.current.value);
    console.log("Password:", password.current.value);
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <form
        style={{ boxShadow: "2px 2px 20px black" }}
        className="rounded-md p-4 bg-white"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold text-4xl text-green-400">
          LOGIN FORM
        </h1>
        <hr />
        <Input
          type="text"
          name="username"
          label="username"
          placeholder="Email"
          ref={username}
        />
        <Input
          type="password"
          name="password"
          label="password"
          placeholder="Password"
          ref={password}
        />

        <div className="flex flex-col m-2">
          <button
            type="submit"
            className="border rounded-md text-white bg-blue-500 h-10 transition duration-1500 ease-in-out hover:scale-90"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

// eslint-disable-next-line react/display-name
export const Input =forwardRef((props, ref ) => {
  const id = useId();
  return <>
    <div className="flex flex-col m-2">
      <label htmlFor={id} className="text-center">
       
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className="text-center w-80 h-10 border-2 border-black rounded-full"
        ref={ref}
      />
    </div>
    </>
  
});
