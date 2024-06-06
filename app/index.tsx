import { FC, useEffect, useState } from "react";
import { StatusBar, View, Text, Modal } from "react-native";
import { Provider } from "react-redux";
import NetInfo from "@react-native-community/netinfo";

import Root from "@/app/navigation";
import store from "@/app/store";

import styles from "@/app/styles";

const App: FC = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      setIsConnected(state?.isConnected);
    });

    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state?.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Provider store={store}>
      <Root />
      <StatusBar barStyle="dark-content" />
      {!isConnected && (
        <Modal animationType="slide" transparent={true} visible={!isConnected}>
          <View style={styles.container}>
            <View style={styles.overlay}>
              <Text style={styles.text}>No Internet Connection</Text>
            </View>
          </View>
        </Modal>
      )}
    </Provider>
  );
};

export default App;

