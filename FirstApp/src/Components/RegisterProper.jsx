import { useState } from "react";

export const RegistrationProper = () => {
const[user,setUser]=useState({
    firstName:"",
    lastName:"",
    age:0,
    address:"",
    phone:""
})

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setUser((prevUser)=>({...prevUser,[name]:value}))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(user);
  };
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <form
          style={{ boxShadow: "2px 2px 20px black" }}
          className="rounded-md p-4 bg-white"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center font-bold text-4xl text-green-400">
            Registration form
          </h1>
          <hr />
          <div className="flex flex-col m-2">
            <label htmlFor="firstName" className="text-center">
              FirstName:
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="FirstName"
              className="text-center w-80 h-10 border-2 border-black rounded-full"
              value={user.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="lastName" className="text-center">
              LastName:
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="LastName"
              className="text-center w-80 h-10 border-2 border-black rounded-full"
              value={user.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="age" className="text-center">
              Age:
            </label>
            <input
              type="number"
              name="age"
              placeholder="Age"
              className="text-center w-80 h-10 border-2 border-black rounded-full"
              value={user.age}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="address" className="text-center">
              Address:
            </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="text-center w-80 h-10 border-2 border-black rounded-full"
              value={user.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="phone" className="text-center">
              PhoneNumber:
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="text-center w-80 h-10 border-2 border-black rounded-full"
              value={user.phone}
              onChange={handleInputChange}
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
    </>
  );
};
