import React, { Component } from 'react';
import styled from 'styled-components';

export class Dashboard extends Component {
  state = {
    strikes: 0,
    fouls: 0,
    balls: 0
  };

  render() {
    return (
      <Buttons>
        {/* reset to 0 wen player reaches 3 strikes or 4 balls */}
        <button>Add Strike</button>
        <button>Add Ball</button>

        {/* foul increases strikes up to 2, then has no effect */}
        <button>Add Foul</button>

        {/* reset stikes and balls to 0 on hit */}
        <button>Player Hits</button>
      </Buttons>
    );
  }
}

export default Dashboard;

const Buttons = styled.div`
  border: 1px solid red;
`;
