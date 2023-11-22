import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";

import StackLayout from "./src/Layout/Stack.js";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StackLayout />
      </PaperProvider>
    </NavigationContainer>
  );
}
