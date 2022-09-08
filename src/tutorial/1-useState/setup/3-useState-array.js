import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      {people.map((person) => {
        console.log(person);
        return <h3>Hello</h3>;
      })}
    </>
  );
};

export default UseStateArray;
