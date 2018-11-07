import React, { Component } from "react";
import Car from "./Car/Car";

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Aydi", year: 2016 },
      { name: "Mazda", year: 2010 }
    ],
    pageTitle: "React componenets"
  };

  changeTitleHandler = newTitle => {
    this.setState({
      pageTitle: newTitle
    });
  };

  handleInput = e => {
    this.setState({
      pageTitle: e.target.value
    });
  };

  render() {
    const divStyle = {
      textAlign: "center"
    };

    const pageTitle = this.state.pageTitle;
    return (
      <div style={divStyle}>
        <h1>{pageTitle}</h1>
        <input type="text" name="" onChange={this.handleInput} />
        <button onClick={this.changeTitleHandler.bind(this, "Changed!")}>
          Change title
        </button>
        {this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
              onChangeTitle={() => {
                this.changeTitleHandler(car.name);
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
