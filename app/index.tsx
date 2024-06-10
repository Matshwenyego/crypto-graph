import { FC } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { useNetInfo } from "@react-native-community/netinfo";

import Root from "@/app/navigation";
import store from "@/app/store";
import Connectivity from "@/app/components/connectivity";

const App: FC = () => {
  const { isConnected } = useNetInfo();
  return (
    <Provider store={store}>
      <Root />
      <StatusBar barStyle="dark-content" />
      {!isConnected && <Connectivity transparent visible={!isConnected} />}
    </Provider>
  );
};

export default App;
