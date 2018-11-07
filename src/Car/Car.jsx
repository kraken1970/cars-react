import React from "react";

export default ({ name, year, onChangeTitle, now }) => (
  <div>
    <h3>Car name: {name}</h3>
    <p>
      Year: <strong> {year}</strong>
    </p>
    <button onClick={onChangeTitle}>Click</button>
    {/* <p>{now}</p> */}
  </div>
);
