import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("Hello World"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("123");

  return (
    <React.Fragment>
      <h1>{text}</h1>
    </React.Fragment>
  );
};

export default UseStateBasics;
