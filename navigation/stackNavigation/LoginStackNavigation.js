import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/authScreen/Login";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      mode="card"
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => null,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
export default MyStack;
