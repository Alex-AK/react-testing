import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Display from './Display';

import 'jest-dom/extend-expect';

describe('<Display />', () => {
  it('renders without crashing', () => {
    render(<Display />);
  });

  it('renders stat titles', () => {
    const { getByText } = render(<Display />);

    const strikes = getByText(/strikes/i);
    const fouls = getByText(/fouls/i);
    const balls = getByText(/balls/i);

    expect(strikes).toBeInTheDocument();
    expect(fouls).toBeInTheDocument();
    expect(balls).toBeInTheDocument();
  });
});
