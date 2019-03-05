import React from 'react';
import { render } from 'react-testing-library';
import Dashboard from './Dashboard';

import 'jest-dom/extend-expect';

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });
});
