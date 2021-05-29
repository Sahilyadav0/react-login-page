import React, { useState } from "react";
import Input from "./Input";

function Form(props) {
  const [isMousedOver, setMouseOver] = useState(false);

  const [fullName, setfullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setfullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });

    // console.log(newValue);
    // console.log(inputName);
  }

  function handleOver() {
    setMouseOver(true);
  }

  function handleOut() {
    setMouseOver(false);
  }

  return (
    <form className="form">
      <h1>
        {fullName.fName} {fullName.lName}
      </h1>
      <Input
        type="text"
        name="fName"
        value={fullName.fName}
        placeholder="First Name"
        onChange={handleChange}
      />

      <Input
        type="text"
        name="lName"
        value={fullName.lName}
        placeholder="Last Name"
        onChange={handleChange}
      />

      <Input type="password" placeholder="Password" />

      {!props.register && (
        <Input type="password" placeholder="Confirm Password" />
      )}

      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleOver}
        onMouseOut={handleOut}
        type="submit"
      >
        {props.register ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
