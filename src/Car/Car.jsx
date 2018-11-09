import React from "react";
import Radium from "radium";
import classes from "./Car.css";

const Car = ({ name, year, onDelete, onChangeName }) => {
  const inputClasses = [classes.input];
  name !== ""
    ? inputClasses.push(classes.green)
    : inputClasses.push(classes.red);
  if (name.length > 4) {
    inputClasses.push(classes.bold);
  }

  const style = {
    border: "2px solid #ccc",
    boxShadow: "4px 5px rgba(0, 0, 0, 0.14)",
    ":hover": {
      border: "2px solid #aaa",
      boxShadow: "0 4px 15px 0 rgba(0, 0, 0, 0.25)",
      cursor: "pointer"
    }
  };

  return (
    <div className={classes.Car} style={style}>
      <h3>Car name: {name}</h3>
      <p>
        Year: <strong> {year}</strong>
      </p>
      <input
        type="text"
        onChange={onChangeName}
        value={name}
        className={inputClasses.join(" ")}
      />
      <button onClick={onDelete} style={{ backgroundColor: "red" }}>
        Delete
      </button>
    </div>
  );
};

export default Radium(Car);
