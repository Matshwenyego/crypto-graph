import { createSlice } from "@reduxjs/toolkit";

const cryptoSlice = createSlice({
  name: "currencies",
  initialState: {
    eth: {},
    eth_data: [],
    btc: {},
    btc_data: [],
  },
  reducers: {
    addCryptoCurrencies: (state, action) => {
      const { s, p, q, dc, dd, t } = action?.payload;
      const maxItems = 20;

      if (s === "ETH-USD") {
        const incoming = [...state.eth_data, { p }];
        if (incoming?.length > maxItems) {
          incoming.shift();
        }
        return {
          ...state,
          eth_data: incoming,
          eth: { s, p, q, dc, dd, t },
        };
      }

      if (s === "BTC-USD") {
        const incoming = [...state.btc_data, { p }];
        if (incoming?.length > maxItems) {
          incoming.shift();
        }
        return {
          ...state,
          btc_data: incoming,
          btc: { s, p, q, dc, dd, t },
        };
      }

      return state;
    },
  },
});

export const { addCryptoCurrencies } = cryptoSlice.actions;
export default cryptoSlice.reducer;
