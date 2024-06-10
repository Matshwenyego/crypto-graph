import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCryptoCurrencies } from "@/app/store/slice";
import _ from "lodash";

const useWebSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new WebSocket(`${process.env.API_URL}=${process.env.API_TOKEN}`);

    ws.onopen = () => {
      ws.send(
        JSON.stringify({ action: "subscribe", symbols: "ETH-USD,BTC-USD" })
      );
      console.log("connection established!");
    };

    ws.onmessage = _.throttle((event) => {
      const response = JSON.parse(event?.data);
      if (response) {
        dispatch(addCryptoCurrencies({ ...response }));
      }
    }, 2000);

    ws.onerror = () => {
      ws.send(
        JSON.stringify({ action: "unsubscribe", symbols: "ETH-USD,BTC-USD" })
      );
      console.error("an error has occured!");
    };

    return () => {
      ws.onclose = (event) => {
        ws.send(
          JSON.stringify({ action: "unsubscribe", symbols: "ETH-USD,BTC-USD" })
        );
        console.log({ onclose: event });
      };
    };
  }, [dispatch]);
};

export default useWebSocket;
