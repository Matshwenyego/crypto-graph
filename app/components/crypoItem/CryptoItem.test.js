// TrackerItem.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TrackerItem from '.';

describe('TrackerItem Component', () => {
  const mockOnItemPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with header prop', () => {
    const { getByText } = render(
      <TrackerItem price="$100" ticker="BTC" change="+5" header={true} />
    );
    expect(getByText('BTC')).toBeTruthy();
    expect(getByText('+5')).toBeTruthy();
    expect(getByText('$100')).toBeTruthy();
  });

  it('renders correctly without header prop', () => {
    const { getByText } = render(
      <TrackerItem price="$200" ticker="ETH" change="-2" />
    );
    expect(getByText('ETH')).toBeTruthy();
    expect(getByText('-2%')).toBeTruthy();
    expect(getByText('$200')).toBeTruthy();
  });

  it('calls onItemPress function when TouchableOpacity is pressed', () => {
    const { getByTestId } = render(
      <TrackerItem
        price="$300"
        ticker="LTC"
        change="+8"
        onItemPress={mockOnItemPress}
      />
    );
    const touchableOpacity = getByTestId('tracker-item');

    fireEvent.press(touchableOpacity);

    expect(mockOnItemPress).toHaveBeenCalledTimes(1);
  });

  it('disables TouchableOpacity when onItemPress is not provided', () => {
    const { getByTestId } = render(
      <TrackerItem price="$400" ticker="ADA" change="-3" />
    );
    const touchableOpacity = getByTestId('tracker-item');

    expect(touchableOpacity.props.accessibilityState.disabled).toBe(true);
  });
});
