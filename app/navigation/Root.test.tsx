import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Root from '.';

describe('Root', () => {
  it('renders Home screen by default', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    );
    expect(getByTestId('home-screen')).toBeDefined();
  });
});
