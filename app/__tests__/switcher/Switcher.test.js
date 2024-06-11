import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Switcher from "@/app/components/switcher";

describe('Switcher Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Switcher index={0} setIndex={() => {}} />);
    expect(getByTestId('bitcoin-button')).toBeDefined();
    expect(getByTestId('ethereum-button')).toBeDefined();
  });

  it('calls setIndex correctly when Bitcoin button is pressed', () => {
    const setIndexMock = jest.fn();
    const { getByTestId } = render(<Switcher index={0} setIndex={setIndexMock} />);
    const bitcoinButton = getByTestId('bitcoin-button');
    fireEvent.press(bitcoinButton);
    expect(setIndexMock).toHaveBeenCalledWith(0);
  });

  it('calls setIndex correctly when Ethereum button is pressed', () => {
    const setIndexMock = jest.fn();
    const { getByTestId } = render(<Switcher index={1} setIndex={setIndexMock} />);
    const ethereumButton = getByTestId('ethereum-button');
    fireEvent.press(ethereumButton);
    expect(setIndexMock).toHaveBeenCalledWith(1);
  });

  it('changes background color based on index prop', () => {
    const { getByTestId, rerender } = render(<Switcher index={0} setIndex={() => {}} />);
    const bitcoinButton = getByTestId('bitcoin-button');
    const ethereumButton = getByTestId('ethereum-button');

    expect(bitcoinButton.props.style.backgroundColor).toEqual('gray');
    expect(ethereumButton.props.style.backgroundColor).toEqual('white');

    rerender(<Switcher index={1} setIndex={() => {}} />)

    expect(bitcoinButton.props.style.backgroundColor).toEqual('white');
    expect(ethereumButton.props.style.backgroundColor).toEqual('gray');
  });
});
