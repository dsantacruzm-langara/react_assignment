import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box, VStack } from "native-base";
import Header from "../layout/Header";
import Tabs from "../layout/Tabs";

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <NativeBaseProvider>
    <Header />
    <Tabs />
  </NativeBaseProvider>
);

export default AppStack;
