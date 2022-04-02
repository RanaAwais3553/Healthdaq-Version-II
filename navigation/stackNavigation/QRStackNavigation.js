import { createStackNavigator } from "@react-navigation/stack";
import QRRateYourCandidate from "../../screens/candidateScanner/QRRateYourCandidate";
import QRScan from "../../screens/candidateScanner/QRScan";
import React from "react";
const Stack = createStackNavigator();

function QRStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={"QRScan"}
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => null,
      }}
    >
      <Stack.Screen name="Rating" component={QRRateYourCandidate} />
      <Stack.Screen name="QRScan" component={QRScan} />
    </Stack.Navigator>
  );
}
export default QRStackNavigation;
