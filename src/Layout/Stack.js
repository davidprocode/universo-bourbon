import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Menu from "../screens/Menu";
import Videos from "../screens/Videos";
import Vagas from "../screens/Vagas";
import Cursos from "../screens/Cursos";
import Camera from "../screens/Camera";
import Unidades from "../screens/Unidades";
import Template from "../screens/Template";
import AppStylesheet from "../components/AppStylesheet";

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
          headerBackground: AppStylesheet.primaryColor,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicio",
          headerShown: false,
          headerBackground: AppStylesheet.primaryColor,
        }}
      />
      <Stack.Screen
        name="Videos"
        component={Videos}
        options={{
          title: "Videos",
          headerShown: false,
          headerBackground: AppStylesheet.primaryColor,
        }}
      />
      <Stack.Screen
        name="Vagas"
        component={Vagas}
        options={{
          title: "Vagas",
          headerShown: true,
          headerBackground: AppStylesheet.primaryColor,
        }}
      />
      <Stack.Screen
        name="Cursos"
        component={Cursos}
        options={{
          title: "Cursos",
          headerShown: true,
          headerBackground: AppStylesheet.primaryColor,
        }}
      />
      <Stack.Screen
        name="Unidades"
        component={Unidades}
        options={{
          title: "Unidades",
          headerShown: true,
          headerBackground: AppStylesheet.primaryColor,
        }}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          title: "Camera Ao vivo",
          headerShown: true,
          headerBackground: AppStylesheet.primaryColor,
        }}
      />
      <Stack.Screen
        name="Template"
        component={Template}
        options={{
          title: "Template",
          headerShown: true,
          headerBackground: AppStylesheet.primaryColor,
        }}
      />
    </Stack.Navigator>
  );
}
