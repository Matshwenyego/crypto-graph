import { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

type Props = {
  index: number;
  setIndex: (index: number) => void;
};

const Switcher: FC<Props> = ({ index, setIndex }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIndex(0)}
        style={[
          styles.barContainer,
          { backgroundColor: index === 0 ? "gray" : "white" },
        ]}
        testID="bitcoin-button"
      >
        <FontAwesome5 name="bitcoin" size={24} color="orange" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIndex(1)}
        style={[
          styles.iconContainer,
          { backgroundColor: index === 1 ? "gray" : "white" },
        ]}
        testID="ethereum-button"
      >
        <FontAwesome5 name="ethereum" size={24} color="purple" />
      </TouchableOpacity>
    </View>
  );
};

export default Switcher;
