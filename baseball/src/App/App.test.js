import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

import 'jest-dom/extend-expect';

describe('<App />', () => {
  it('renders title "Baseball Tacker"', () => {
    const { getByText } = render(<App />);

    const actual = getByText(/baseball tracker/i);

    expect(actual).toBeInTheDocument();
  });

  it('renders subtitle "Dashboard Rules"', () => {
    const { getByText } = render(<App />);

    const rules = getByText(/dashboard rules/i);
    expect(rules).toBeInTheDocument();
  });

  it('render rules', () => {
    const { getAllByTestId } = render(<App />);

    const ruleNodes = getAllByTestId('rules');
    const rules = ruleNodes.map(r => r.textContent);

    expect(rules).toHaveLength(ruleNodes.length);
  });
});
