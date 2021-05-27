import React, { Component } from "react";
import StyleDashboard from "./Dashboard.style";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <StyleDashboard>
        <aside>Aside</aside>
        <main>main</main>
      </StyleDashboard>
    );
  }
}

export default Dashboard;
