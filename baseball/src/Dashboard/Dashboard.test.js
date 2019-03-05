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

      // strike testing
      expect(strikeCount.textContent).toBe('0');
      fireEvent.click(strikeButton);
      expect(strikeCount.textContent).toBe('1');
      fireEvent.click(strikeButton);
      expect(strikeCount.textContent).toBe('2');
      fireEvent.click(strikeButton);
      expect(strikeCount.textContent).toBe('0');
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

    // it('test that foul button increments and resets according to rules', () => {
    //   const { getByTestId, getByText } = render(<Dashboard />);

    //   const foulButton = getByText(/add foul/i);
    //   const foulCount = getByTestId('foul-count');

    //   // foul testing
    //   expect(foulCount.textContent).toBe('0');
    //   fireEvent.click(foulButton);
    //   expect(foulCount.textContent).toBe('1');
    //   fireEvent.click(foulButton);
    //   expect(foulCount.textContent).toBe('2');
    //   fireEvent.click(foulButton);
    //   expect(foulCount.textContent).toBe('3');
    //   fireEvent.click(foulButton);
    //   expect(foulCount.textContent).toBe('0');
    // });
  });
});
