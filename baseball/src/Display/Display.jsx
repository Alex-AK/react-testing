import React from 'react';
import styled from 'styled-components';

const Display = props => {
  return (
    <Stats>
      <div>Strikes: {props.strikes}</div>
      <div>Fouls: {props.fouls}</div>
      <div>Balls: {props.balls}</div>
    </Stats>
  );
};

export default Display;

const Stats = styled.div`
  div {
    margin-bottom: 10px;
  }
`;
