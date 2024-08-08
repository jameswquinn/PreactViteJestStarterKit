import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import { HelloWorld, Counter } from '../src/index';

describe('HelloWorld Component', () => {
  it('renders Hello, World!', () => {
    const { getByText } = render(<HelloWorld />);
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });
});

describe('Counter Component', () => {
  it('renders initial count of 0', () => {
    const { getByText } = render(<Counter />);
    expect(getByText('Count: 0')).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    const { getByText, getByRole } = render(<Counter />);
    const button = getByRole('button', { name: 'Increment' });
    
    expect(getByText('Count: 0')).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(getByText('Count: 1')).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(getByText('Count: 2')).toBeInTheDocument();
  });

  it('only re-renders when count changes', () => {
    const { getByText, getByRole, rerender } = render(<Counter />);
    const button = getByRole('button', { name: 'Increment' });
    
    expect(getByText('Count: 0')).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(getByText('Count: 1')).toBeInTheDocument();
    
    rerender(<Counter />);
    expect(getByText('Count: 1')).toBeInTheDocument();
  });
});
