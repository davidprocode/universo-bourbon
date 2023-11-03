import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import About from '../screens/About';

const Stack = createNativeStackNavigator();


export default function StackLayout() {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Inicio', headerShown: false}}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{title: 'Sobre'}}
        />
      </Stack.Navigator>
  );
}