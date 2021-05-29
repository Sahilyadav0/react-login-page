import React from "react";

function Input(props) {
  return (
    <input
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
export default Input;
