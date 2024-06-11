import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Root from '@/app/navigation';

describe('Root Navigation', () => {
  it('renders Home screen by default', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    );

    expect(getByTestId('home')).toBeDefined();
  });
});
