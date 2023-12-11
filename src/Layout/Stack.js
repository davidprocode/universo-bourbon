import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Menu from "../screens/Menu";
import Videos from "../screens/Videos";
import Vagas from "../screens/Vagas";
import Cursos from "../screens/Cursos";
import Camera from "../screens/Camera";
import Unidades from "../screens/Unidades";

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
        name="Videos"
        component={Videos}
        options={{ title: "Videos", headerShown: false }}
      />
      <Stack.Screen
        name="Vagas"
        component={Vagas}
        options={{ title: "Vagas", headerShown: true }}
      />
      <Stack.Screen
        name="Cursos"
        component={Cursos}
        options={{ title: "Cursos", headerShown: true }}
      />
      <Stack.Screen
        name="Unidades"
        component={Unidades}
        options={{ title: "Unidades", headerShown: true }}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{ title: "Camera Ao vivo", headerShown: true }}
      />
    </Stack.Navigator>
  );
}
