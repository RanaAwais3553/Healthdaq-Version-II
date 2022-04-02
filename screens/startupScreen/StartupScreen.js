import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import SplashscreenComponent from "../splashScreen/SplashScreenComponent";
import { setDidTryAL, authenticate } from "../../store/action/authAction";
import ActivityIndicatorComponent from "../../common/component/atom/ActivityIndicatorComponent";

const StartupScreen = (props) => {
  const dispatch = useDispatch();
  const isSplash = useSelector((state) => state.isSplash.isSplashScreen);

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        dispatch(setDidTryAL());
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, eventId, user_type, city, event_date, event_exist } =
        transformedData;

      dispatch(
        authenticate(eventId, token, user_type, city, event_date, event_exist)
      );
    };
    {
      isSplash
        ? setTimeout(() => {
            tryLogin();
          }, 1000)
        : tryLogin();
    }
  }, [dispatch]);
  return (
    <View style={styles.screen}>
      {isSplash ? <SplashscreenComponent /> : <ActivityIndicatorComponent />}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#3f5d83",
  },
});

export default StartupScreen;
