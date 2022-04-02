import { Dimensions, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomButton from "../common/component/atom/bottomTabButton/TabLeftButton";
import CustomButtonRight from "../common/component/atom/bottomTabButton/TabRightButton";
import QRStackNavigation from "./stackNavigation/QRStackNavigation";
import CandidateState from "../screens/candidateState/CandidateState";
import { bottomTabBarArea } from "../common/component/pixelPerfectSize/NormalizeSize";
import ActivityIndicatorComponent from "../common/component/atom/ActivityIndicatorComponent";
const Tab = createBottomTabNavigator();
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function MyTabs(props) {
  const [tab, setTab] = useState();
  const [value, setState] = useState(false);
  function handleChange() {
    setState(!value);
  }
  function handleFocusedTab(bool) {
    setTab(bool);
  }
  return (
      <Tab.Navigator
        initialRouteName={"CandidateStat"}
        tabBarOptions={{
          style: {
            position: "absolute",
            overflow: tab ? "hidden" : "visible",
            backgroundColor: "#3f5c83",
            height: bottomTabBarArea(screenHeight),
            alignItems: "center",
            ...styles.shadow,
          },
        keyboardHidesTabBar: true 
        }}
      >
        <Tab.Screen
          name="Change User"
          component={ActivityIndicatorComponent}
          options={{
            tabBarVisible: false,
            tabBarButton: (props) => (
              <CustomButton
                {...props}
                handleFocusedTab={handleFocusedTab}
                label={"Change User"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CandidateStat"
          component={value ? CandidateState : QRStackNavigation}
          options={{
            tabBarButton: (props) => (
              <CustomButtonRight
                {...props}
                label={value ? "Scan" : "Stats"}
                buttonColor={value ? "#e7aed0" : "#8c677d"}
                onChange={handleChange}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5d50",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default MyTabs;
