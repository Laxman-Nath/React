import { useState } from "react";

export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "age":
        setAge(value);
        break;
      case "phone":
        setPhone(value);
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      age,
      address,
      phone,
    };
    console.log(formData);
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
              value={firstName}
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
              value={lastName}
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
              value={age}
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
              value={address}
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
              value={phone}
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
