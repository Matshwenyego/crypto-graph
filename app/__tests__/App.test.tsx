import React from "react";
import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "@/app";

const mockStore = configureStore([]);

describe("App", () => {
  it("renders correctly", () => {
    const initialState = {
      eth: { name: "Ethereum", symbol: "ETH", p: "2500", dc: "5.0" },
      eth_data: [{ p: "2500" }, { p: "2550" }],
      btc: { name: "Bitcoin", symbol: "BTC", p: "40000", dc: "2.5" },
      btc_data: [{ p: "40000" }, { p: "41000" }],
    };
    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByTestId("home")).toBeDefined();
  });
});
