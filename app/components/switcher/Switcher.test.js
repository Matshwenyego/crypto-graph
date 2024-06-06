import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Switcher from '.';

describe('Switcher Component', () => {
  const mockSetIndex = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByTestId } = render(<Switcher index={0} setIndex={mockSetIndex} />);
    const bitcoinButton = getByTestId('bitcoin-button');
    const ethereumButton = getByTestId('ethereum-button');

    expect(bitcoinButton).toBeTruthy();
    expect(ethereumButton).toBeTruthy();
  });

  it('applies correct background color based on index', () => {
    const { getByTestId, rerender } = render(<Switcher index={0} setIndex={mockSetIndex} />);
    const bitcoinButton = getByTestId('bitcoin-button');
    const ethereumButton = getByTestId('ethereum-button');

    expect(bitcoinButton.props.style.backgroundColor).toBe('gray');
    expect(ethereumButton.props.style.backgroundColor).toBe('white');

    rerender(<Switcher index={1} setIndex={mockSetIndex} />);

    expect(bitcoinButton.props.style.backgroundColor).toBe('white');
    expect(ethereumButton.props.style.backgroundColor).toBe('gray');
  });

  it('calls setIndex with correct value when buttons are pressed', () => {
    const { getByTestId } = render(<Switcher index={0} setIndex={mockSetIndex} />);
    const bitcoinButton = getByTestId('bitcoin-button');
    const ethereumButton = getByTestId('ethereum-button');

    fireEvent.press(bitcoinButton);
    expect(mockSetIndex).toHaveBeenCalledWith(0);

    fireEvent.press(ethereumButton);
    expect(mockSetIndex).toHaveBeenCalledWith(1);
  });
});
