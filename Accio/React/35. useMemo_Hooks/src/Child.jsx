import React from "react";

function Child(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </>
  );
}

export default Child;
