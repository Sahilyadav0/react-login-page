import React from "react";
import Form from "./Form";

const currentTime = new Date(2020, 1, 1, 21).getHours();
console.log(currentTime);

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form register={userIsRegistered} />
    </div>
  );
}

export default App;
