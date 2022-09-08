import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className="btn">Decrease</button>
        <button className="btn">Reset</button>
        <button className="btn">Increase</button>
      </section>
    </>
  );
};

export default UseStateCounter;
