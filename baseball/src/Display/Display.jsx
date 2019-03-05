import React from 'react';
import styled from 'styled-components';

const Display = props => {
  return (
    <Stats>
      <div>
        Strikes:
        <span data-testid="strike-count">{props.strikes}</span>
      </div>
      <div>
        Balls:
        <span data-testid="ball-count">{props.balls}</span>
      </div>
      <div>
        Fouls:
        <span data-testid="foul-count">{props.fouls}</span>
      </div>
    </Stats>
  );
};

export default Display;

const Stats = styled.div`
  div {
    margin-bottom: 10px;
  }
`;
