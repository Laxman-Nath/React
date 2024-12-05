import { useRef } from "react";

export const UseRef = () => {
  const username = useRef(null);
  const password = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:",username.current.value);
    console.log("Password:",password.current.value);
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
        <div className="flex flex-col m-2">
          <label htmlFor="email" className="text-center">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="text-center w-80 h-10 border-2 border-black rounded-full"
            ref={username}
          />
        </div>
        <div className="flex flex-col m-2">
          <label htmlFor="password" className="text-center">
            Password:
          </label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="text-center w-80 h-10 border-2 border-black rounded-full"
            ref={password}
          />
        </div>

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
