import React, { Component } from 'react';
import styled from 'styled-components';

import Display from '../Display/Display';

export class Dashboard extends Component {
  state = {
    strikes: 0,
    balls: 0
  };

  handleStrike = () => {
    if (this.state.strikes === 2) {
      this.setState({ strikes: 0, balls: 0 });
    } else {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    }
  };

  handleBall = () => {
    if (this.state.balls === 3) {
      this.setState({ strikes: 0, balls: 0 });
    } else {
      this.setState(prevState => {
        return { balls: prevState.balls + 1 };
      });
    }
  };

  handleFoul = () => {
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    }
  };

  handleHit = () => {
    this.setState({ strikes: 0, balls: 0 });
  };

  testFunction = () => {
    return null;
  };

  render() {
    const { strikes, fouls, balls } = this.state;

    return (
      <>
        <Buttons>
          {/* reset to 0 wen player reaches 3 strikes or 4 balls */}
          <button onClick={this.handleStrike}>Add Strike</button>
          <button onClick={this.handleBall}>Add Ball</button>

          {/* foul increases strikes up to 2, then has no effect */}
          <button onClick={this.handleFoul}>Add Foul</button>

          {/* reset stikes and balls to 0 on hit */}
          <button onClick={this.handleHit}>Player Hits</button>
          {/* <button data-testid="hit" onClick={this.testFunction}>
            test function on click
          </button> */}
        </Buttons>
        <Display strikes={strikes} fouls={fouls} balls={balls} />
      </>
    );
  }
}

export default Dashboard;

const Buttons = styled.div`
  margin: 30px 0;

  button {
    margin: 0 20px;
    padding: 10px 0;
    width: 100px;
    border-radius: 3px;
    border: 1px solid black;
  }
`;
