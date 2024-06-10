import { FC } from "react";
import { View, Text, Modal } from "react-native";

import styles from "@/app/styles";

type Props = {
  transparent: boolean;
  visible: boolean;
};

const Connectivity: FC<Props> = ({ transparent, visible }) => {
  return (
    <Modal
      testID="no-internet"
      animationType="slide"
      transparent={transparent}
      visible={visible}
    >
      <View style={styles.container}>
        <View style={styles.overlay}>
          <Text style={styles.text}>No Internet Connection</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Connectivity;
