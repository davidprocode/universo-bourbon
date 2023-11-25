import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";

import StackLayout from "./src/Layout/Stack.js";
import Layout from "./src/components/Layout/index.js";
import Feed from "./src/screens/Feed/index.js";

export default function App() {
  return (
    <NavigationContainer>
      <Layout />
    </NavigationContainer>
  );
}
