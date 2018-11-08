import React from "react";

export default ({ name, year, onDelete, onChangeName }) => (
  <div
    style={{
      border: "1px solid #ccc",
      width: "75vw",
      margin: "5px auto",
      paddingBottom: "10px"
    }}
  >
    <h3>Car name: {name}</h3>
    <p>
      Year: <strong> {year}</strong>
    </p>
    <input type="text" onChange={onChangeName} value={name} /> <br />
    <button onClick={onDelete} style={{ backgroundColor: "red" }}>
      Delete
    </button>
  </div>
);
