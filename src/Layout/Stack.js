import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Feed from "../screens/Feed";

const Stack = createNativeStackNavigator();

export default function StackLayout() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Inicio", headerShown: false }}
      />
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{ title: "Feed", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
