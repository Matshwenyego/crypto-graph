import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import Home from ".";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("Home", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      cryptoReducer: {
        btc: { s: "BTC", p: "100", dc: "5" },
        btc_data: [{ p: "100" }, { p: "200" }, { p: "300" }],
        eth: { s: "ETH", p: "200", dc: "10" },
        eth_data: [{ p: "200" }, { p: "250" }, { p: "300" }],
      },
    });
  });

  it("renders correctly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(getByTestId("switcher")).toBeDefined();
    expect(getByTestId("crypto-item")).toBeDefined();
    expect(getByTestId("line-chart")).toBeDefined();
  });

  it("switches between Bitcoin and Ethereum views", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Initially renders Bitcoin view
    expect(getByTestId("crypto-item").props.ticker).toEqual("BTC");
    expect(getByTestId("line-chart").props.legend).toEqual(["BTC"]);

    // Simulate switch to Ethereum view
    fireEvent.press(getByTestId("switcher-ethereum-button"));

    // Ensure Ethereum view is rendered
    expect(getByTestId("crypto-item").props.ticker).toEqual("ETH");
    expect(getByTestId("line-chart").props.legend).toEqual(["ETH"]);
  });

  it("handles click on data points correctly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Simulate click on data point
    fireEvent(getByTestId("line-chart"), "onDataPointClick", {
      x: 0,
      y: 0,
      value: 100,
    });

    // Ensure tooltip is displayed with correct value
    expect(getByTestId("tooltip").props.children).toEqual(100);
  });
});
