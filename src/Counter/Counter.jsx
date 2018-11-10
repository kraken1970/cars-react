import React, { Component } from "react";
import Auxiliary from "../hoc/Auxiliary";

export default class Counter extends Component {
  state = {
    counter: 0
  };

  addCounter = () => {
    // this.setState({ counter: this.state.counter + 1 });
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  };
  // removeCounter = () => {
  //   this.setState({ counter: this.state.counter - 1 });
  // };
  // или тоже внутри jsx
  render() {
    return (
      <>
        <h2>Counter {this.state.counter} </h2>
        <button onClick={this.addCounter}>+</button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </>
    );

    //изврат через [] в return с обязательным добавлением key
    // return [
    //   <h2 key={"1"}>Counter {this.statecounter} </h2>,
    //   <button key={"2"} onClick={this.addCounter}>
    //     +
    //   </button>,
    //   <button
    //     key={"3"}
    //     onClick={() => this.setState({ counter: this.state.counter - 1 })}
    //   >
    //     -
    //   </button>
    // ];
  }
}
