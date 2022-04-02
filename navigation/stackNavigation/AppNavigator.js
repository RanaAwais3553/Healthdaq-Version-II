import React from "react";
import MyStack from "./LoginStackNavigation";
import MyTabs from "../BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import StartupScreen from "../../screens/startupScreen/StartupScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const AppNavigator = (props) => {
  const isAuth = useSelector((state) => !!state.auth.token);
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer independent={true}>
      {isAuth && <MyTabs />}
      {!isAuth && didTryAutoLogin && <MyStack />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
