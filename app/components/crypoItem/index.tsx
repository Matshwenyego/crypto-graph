import { FC } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

type Props = {
  price: string;
  ticker: string;
  change: string;
  header?: boolean;
  onItemPress?: () => void;
};

const CryptoItem: FC<Props> = ({
  price,
  ticker,
  change,
  header,
  onItemPress,
}) => {
  return (
    <TouchableOpacity
      disabled={!onItemPress}
      onPress={onItemPress}
      style={styles.container}
      testID="tracker-item"
    >
      <View style={styles.ticker}>
        <Text>{ticker}</Text>
      </View>

      <View style={styles.center}>
        {header ? (
          <Text>{change}</Text>
        ) : (
          <Text style={{ color: parseFloat(change) > 0 ? "green" : "red" }}>
            {`${parseFloat(change) > 0 ? "+" : ""}${change}%`}
          </Text>
        )}
      </View>

      <View style={styles.timestamp}>
        <Text>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CryptoItem;
