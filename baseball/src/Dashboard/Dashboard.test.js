import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard';
import Display from '../Display/Display';

import 'jest-dom/extend-expect';

describe('<Dashboard />', () => {
  describe('basic tests', () => {
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

  describe('button clicks and display', () => {
    it('check stats on new inning, strikes / fouls / balls at 0', () => {
      const state = {
        strikes: 0,
        fouls: 0,
        balls: 0
      };

      render(<Dashboard state={state} />);
    });

    it('test that strike button increments and resets according to rules', () => {
      const { getByText } = render(<Dashboard />);
      const { getByTestId } = render(<Display />);

      const strikeButton = getByText(/add strike/i);
      const strikeCount = getByTestId('strike-count');
      const foulButton = getByText(/add foul/i);

      // strike testing
      expect(strikeCount.textContent).toBe('0');
      fireEvent.click(strikeButton);
      expect(strikeCount.textContent).toBe('1');
      fireEvent.click(strikeButton);
      expect(strikeCount.textContent).toBe('2');
      fireEvent.click(strikeButton);
      expect(strikeCount.textContent).toBe('0');

      // foul testing
      expect(strikeCount.textContent).toBe('0');
      fireEvent.click(foulButton);
      expect(strikeCount.textContent).toBe('1');
      fireEvent.click(foulButton);
      expect(strikeCount.textContent).toBe('2');
    });

    it('test that ball button increments and resets according to rules', () => {
      const { getByText } = render(<Dashboard />);
      const { getByTestId } = render(<Display />);

      const ballButton = getByText(/add ball/i);
      const ballCount = getByTestId('ball-count');

      // ball testing
      expect(ballCount.textContent).toBe('0');
      fireEvent.click(ballButton);
      expect(ballCount.textContent).toBe('1');
      fireEvent.click(ballButton);
      expect(ballCount.textContent).toBe('2');
      fireEvent.click(ballButton);
      expect(ballCount.textContent).toBe('3');
      fireEvent.click(ballButton);
      expect(ballCount.textContent).toBe('0');
    });
  });

  // it('test a mock function', () => {
  //   const mockCallBack = jest.fn();
  //   const { getByTestId } = render(<Dashboard hit={mockCallBack} />); // button is expecting props.hit
  //   const hitButton = getByTestId('hit');
  //   fireEvent.click(hitButton);
  //   expect(mockCallBack).toHaveBeenCalled();
  // });
});
