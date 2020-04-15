import React, { Component } from "react";
import Config from "./config.jsx";
import Table from "react-bootstrap/Table";

class Configs extends Component {
  state = {
    configs: [
      { title: "Service Provider Name", value: "SP1" },
      { title: "Access Token", value: "12321dwfawfwefawfewfrafds" },
      { title: "Secret", value: "sfasdfwr23erdfdg23r4" },
      { title: "Expiring in", value: "3600" },
    ],
  };

  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <tbody>
            {this.state.configs.map((config) => (
              <Config title={config.title} value={config.value}></Config>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Configs;
