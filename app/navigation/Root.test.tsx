import React from 'react';
import { render } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from '.';

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(),
}));

jest.mock('@/app/hooks/useWebSocket', () => jest.fn());

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

describe('Root Component', () => {
  const mockNavigator = jest.fn();
  const mockScreen = jest.fn();
  const mockGroup = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    createNativeStackNavigator.mockReturnValue({
      Navigator: mockNavigator,
      Screen: mockScreen,
      Group: mockGroup,
    });
  });

  it('renders correctly', () => {
    render(<Root />);

    expect(createNativeStackNavigator).toHaveBeenCalledWith();
    
    expect(mockNavigator).toHaveBeenCalledWith(expect.objectContaining({ screenOptions: { headerShown: false } }));
    
    expect(mockScreen).toHaveBeenCalledWith('Home', expect.any(Function));
      });
});
