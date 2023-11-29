import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Feed from "../screens/Feed";
import Menu from "../screens/Menu";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

export default function StackLayout({ navigator }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          title: "Menu",
          headerShown: true,
        }}
      />
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
      <Stack.Screen
        name="About"
        component={About}
        options={{ title: "About", headerShown: true }}
      />
    </Stack.Navigator>
  );
}
