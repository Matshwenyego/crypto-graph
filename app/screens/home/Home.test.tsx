import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '.';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('react-native/Libraries/Utilities/Dimensions', () => ({
  get: jest.fn(() => ({ width: 500, height: 500 })),
}));

const mockUseEffect = jest.fn();
jest.spyOn(React, 'useEffect').mockImplementation(mockUseEffect);

describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const mockSelector = {
      eth: { s: 'ETH', p: '2000', dc: '10' },
      eth_data: [{ p: '2000' }, { p: '2100' }],
      btc: { s: 'BTC', p: '50000', dc: '-5' },
      btc_data: [{ p: '50000' }, { p: '49000' }],
    };
    (useSelector as jest.Mock).mockReturnValue(mockSelector);

    const { getByText } = render(<Home />);
    
    expect(getByText('ETH')).toBeTruthy();
    expect(getByText('BTC')).toBeTruthy();
    expect(getByText('Last Price')).toBeTruthy();
    expect(getByText('Ticker Code')).toBeTruthy();
    expect(getByText('Change Percentage')).toBeTruthy();
  });

  it('handles switcher click', () => {
    const { getByText } = render(<Home />);

    fireEvent.press(getByText('BTC'));

    expect(mockUseEffect).toHaveBeenCalledTimes(1);
  });
  });
