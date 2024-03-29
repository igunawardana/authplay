import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("Evenet Handler Called", counterId);
  };

  render() {
    console.log("log");

    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            selected={true}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
        ;
      </div>
    );
  }
}

export default Counters;
