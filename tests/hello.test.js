import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import { HelloWorld, Counter } from '../src/index';

describe('HelloWorld', () => {
  it('renders Hello, World!', () => {
    const { getByText } = render(<HelloWorld />);
    expect(getByText('Hello, World!')).toBeTruthy();
  });
});

describe('Counter', () => {
  it('renders initial count of 0', () => {
    const { getByText } = render(<Counter />);
    expect(getByText('Count: 0')).toBeTruthy();
  });

  it('increments count when button is clicked', () => {
    const { getByText, getByRole } = render(<Counter />);
    const button = getByRole('button', { name: 'Increment' });
    
    fireEvent.click(button);
    expect(getByText('Count: 1')).toBeTruthy();
    
    fireEvent.click(button);
    expect(getByText('Count: 2')).toBeTruthy();
  });
});
