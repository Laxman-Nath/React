import { useState } from "react";

export const DerivedState = () => {
  // const users=[
  //     {name:"laxman",age:"23"},
  //     {name:"rohit",age:"25"},
  //     {name:"bhim",age:"24"},
  // ]

  const [users, setUsers] = useState([
    { name: "laxman", age: 23 },
    { name: "rohit", age: 25 },
    { name: "bhim", age: 24 },
  ]);
  const ageSum = users.reduce((sum, u) => {
    return sum + u.age;
  }, 0);
  const usersLength = users.length;
  const usersAvg=users.reduce((sum,user)=> {return sum+user.age},0)/users.length;
  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Name:{user.name},Age:{user.age}
          </li>
        ))}
        <li>Sum of age:{ageSum}</li>
        <li>Length:{usersLength}</li>
        <li>Average:{usersAvg}</li>
      </ul>
    </div>
  );
};
