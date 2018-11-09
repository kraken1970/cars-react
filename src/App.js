import React, { Component } from "react";
import Car from "./Car/Car";
import "./App.scss";

class App extends Component {
  constructor(props) {
    // console.log("App constructor");

    super(props);
    this.state = {
      cars: [
        { name: "Ford", year: 2018 }
        // { name: "Aydi", year: 2016 },
        // { name: "Mazda", year: 2010 }
      ],
      pageTitle: "React componenets",
      showCars: false
    };
  }

  handleDelete(index) {
    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({ cars });
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars
    });
  };

  componentWillMount() {
    console.log("App componentWillMount");
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  render() {
    console.log("App render");
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
            onChangeName={event => {
              this.onChangeName(event.target.value, index);
            }}
            onDelete={this.handleDelete.bind(this, index)}
          />
        );
      });
    }
    // и в return отобразить {cars}

    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>
        <button onClick={this.toggleCarsHandler} className={"AppButton"}>
          Toggle cars
        </button>
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
        <div
          style={{
            margin: "10px auto",
            paddingTop: "20px"
          }}
        >
          {cars}
        </div>
      </div>
    );
  }
}

export default App;
