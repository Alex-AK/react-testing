import React from 'react';

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
  border: 1px solid blue;
`;
