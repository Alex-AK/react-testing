import React from 'react';
import { render } from 'react-testing-library';
import Dashboard from './Dashboard';

import 'jest-dom/extend-expect';

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });

  it('renders buttons', () => {
    const { getByText } = render(<Dashboard />);

    const strike = getByText(/add strike/i);
    const ball = getByText(/add ball/i);
    const foul = getByText(/add foul/i);
    const hit = getByText(/player hits/i);

    expect(strike).toBeInTheDocument();
    expect(ball).toBeInTheDocument();
    expect(foul).toBeInTheDocument();
    expect(hit).toBeInTheDocument();
  });
});
