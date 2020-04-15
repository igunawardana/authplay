import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
    tagsa: [],
  };

  render() {
    console.log("props", this.props);

    return (
      <div>
        <h4>Counter #{this.props.key}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.key)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    return this.state.tags.length === 0 ? (
      <p>No Tags!</p>
    ) : (
      <React.Fragment>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
