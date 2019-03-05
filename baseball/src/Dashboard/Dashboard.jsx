import React, { Component } from 'react';
import styled from 'styled-components';

import Display from '../Display/Display';

export class Dashboard extends Component {
  state = {
    strikes: 0,
    fouls: 0,
    balls: 0
  };

  render() {
    const { strikes, fouls, balls } = this.state;

    return (
      <>
        <Buttons>
          {/* reset to 0 wen player reaches 3 strikes or 4 balls */}
          <button>Add Strike</button>
          <button>Add Ball</button>

          {/* foul increases strikes up to 2, then has no effect */}
          <button>Add Foul</button>

          {/* reset stikes and balls to 0 on hit */}
          <button>Player Hits</button>
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
