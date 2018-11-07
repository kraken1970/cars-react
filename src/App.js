import React, { Component } from "react";
import Car from "./Car/Car";

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Aydi", year: 2016 },
      { name: "Mazda", year: 2010 }
    ],
    pageTitle: "React componenets",
    showCars: false
  };

  changeTitleHandler = pageTitle => {
    this.setState({ pageTitle });
  };

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  render() {
    const divStyle = {
      textAlign: "center"
    };

    // или так:
    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
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
      });
    }
    // и в return отобразить {cars}

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
        {/* {!this.state.showCars
          ? null
          : this.state.cars.map((car, index) => {
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
            })} */}
        {cars}
      </div>
    );
  }
}

export default App;
