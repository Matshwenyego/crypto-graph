import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/app/screens/home";
import useWebSocket from "@/app/hooks/useWebSockets";

const Root = () => {
  useWebSocket();
  const { Navigator, Screen, Group } = createNativeStackNavigator();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name="Home" component={Home} />
      </Group>
    </Navigator>
  );
};

export default Root;

