import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import Dashboard from '../Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Baseball Tracker</h1>
        <Rules>
          <h3>Dashboard Rules</h3>
          <p>
            1. balls and strikes reset to 0 when a player reaches 3 strikes or 4
            balls.
          </p>
          <p>2. balls and strikes reset to 0 when a `hit` is recorded. </p>
          <p>
            3. a foul increases strikes up to 2. With no strikes, a foul makes
            it 1 strike. With 1 strike, a foul makes it 2 strikes. With two
            strikes a foul has no effect, count stays at 2 strikes.
          </p>
        </Rules>
        <Dashboard />
      </div>
    );
  }
}

export default App;

const Rules = styled.div`
  width: 600px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.3;
`;
