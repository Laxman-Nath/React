// const App=()=>{
//   return <h1>This is the react app created By laxman nath.</h1>
// }

import React from "react";

const App=()=>{
  console.log(React.createElement("h1",null,"Hello my name is laxman nath"));
  return  React.createElement("h1",null,"Hello my name is laxman nath");

}

export default App;
