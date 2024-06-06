// App.test.tsx
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import App from '@/app';
import store from '@/app/store';

// Mock the NetInfo module
jest.mock('@react-native-community/netinfo', () => ({
  fetch: jest.fn(),
  addEventListener: jest.fn(),
}));

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly when connected to the internet', async () => {
    NetInfo.fetch.mockResolvedValueOnce({ isConnected: true });
    NetInfo.addEventListener.mockImplementationOnce((callback) => {
      callback({ isConnected: true });
      return jest.fn();
    });

    const { getByText, queryByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => expect(queryByText('No Internet Connection')).toBeNull());
    // Replace 'Root Component Content' with actual text content from Root component
    // expect(getByText('Root Component Content')).toBeTruthy();
  });

  test('shows no internet connection modal when not connected', async () => {
    NetInfo.fetch.mockResolvedValueOnce({ isConnected: false });
    NetInfo.addEventListener.mockImplementationOnce((callback) => {
      callback({ isConnected: false });
      return jest.fn();
    });

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => expect(getByText('No Internet Connection')).toBeTruthy());
  });

  test('updates connectivity status dynamically', async () => {
    let callback;
    NetInfo.fetch.mockResolvedValueOnce({ isConnected: true });
    NetInfo.addEventListener.mockImplementationOnce((cb) => {
      callback = cb;
      return jest.fn();
    });

    const { queryByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => expect(queryByText('No Internet Connection')).toBeNull());

    // Simulate going offline
    callback({ isConnected: false });
    await waitFor(() => expect(queryByText('No Internet Connection')).not.toBeNull());

    // Simulate going online
    callback({ isConnected: true });
    await waitFor(() => expect(queryByText('No Internet Connection')).toBeNull());
  });
});
