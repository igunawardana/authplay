import React, { Component } from "react";
class Config extends Component {
  state = {};
  render() {
    console.log("props", this.props);

    return (
      <tr>
        <td>{this.props.title}</td>
        <td>
          <input title={this.props.value}></input>
        </td>
      </tr>
    );
  }
}

export default Config;
