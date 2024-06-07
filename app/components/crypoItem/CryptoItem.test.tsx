import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CryptoItem from '.';

describe('CryptoItem', () => {
  const mockProps = {
    price: '100',
    ticker: 'BTC',
    change: '5',
    header: false,
    onItemPress: jest.fn(),
  };

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<CryptoItem {...mockProps} />);
    expect(getByTestId('tracker-item')).toBeDefined();
    expect(getByText(mockProps.ticker)).toBeDefined();
    expect(getByText(`${parseFloat(mockProps.change) > 0 ? "+" : ""}${mockProps.change}%`)).toBeDefined();
    expect(getByText(mockProps.price)).toBeDefined();
  });

  it('triggers onPress callback when pressed', () => {
    const { getByTestId } = render(<CryptoItem {...mockProps} />);
    fireEvent.press(getByTestId('tracker-item'));
    expect(mockProps.onItemPress).toHaveBeenCalled();
  });

  it('disables TouchableOpacity when onItemPress is not provided', () => {
    const { getByTestId } = render(<CryptoItem {...mockProps} onItemPress={undefined} />);
    const touchableOpacity = getByTestId('tracker-item');
    expect(touchableOpacity.props.accessibilityState.disabled).toBe(true);
  });
});
