import { useState, FC, useMemo } from "react";
import { View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Switcher from "@/app/components/switcher";
import CrypoItem from "@/app/components/crypoitem";
import CryptoGraph from "@/app/components/crypograph";

import styles from "./styles";

const Home: FC = () => {
  const [index, setIndex] = useState(0);
  const { eth, eth_data, btc, btc_data } = useSelector(
    (state) => state?.cryptoReducer
  );

  const BTC_DATA = useMemo(
    () => btc_data.map((item) => parseFloat(item?.p).toFixed(2)),
    [btc_data]
  );

  const ETH_DATA = useMemo(
    () => eth_data.map((item) => parseFloat(item?.p).toFixed(2)),
    [btc_data]
  );

  return (
    <View testID="home" style={styles.container}>
      <View>
        <Switcher index={index} setIndex={setIndex} />
      </View>

      <View testID="switcher" style={[styles.mt2, styles.mb]}>
        <CrypoItem
          price={"Last Price"}
          ticker={"Ticker Code"}
          change={"Change Percentage"}
          header
        />
      </View>

      <ScrollView>
        {index === 0 ? (
          <CryptoGraph current_crypto={btc} crypto_array={BTC_DATA} />
        ) : (
          <CryptoGraph current_crypto={eth} crypto_array={ETH_DATA} />
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
