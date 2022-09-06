import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return <h4>this is John and this is my first component</h4>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
