import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/app/screens/home";
// import Ticker from "@/app/screens/ticker";
import useWebSocket from "@/app/hooks/useWebSockets";

const Root = () => {
  useWebSocket();
  const { Navigator, Screen, Group } = createNativeStackNavigator();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name="Home" component={Home} />
      </Group>
      {/* <Group screenOptions={{ presentation: "modal" }}>
        <Screen name="Ticker" component={Ticker} />
      </Group> */}
    </Navigator>
  );
};

export default Root;

