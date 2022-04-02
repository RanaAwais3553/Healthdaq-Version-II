import React, { useRef } from "react";
import { View, Animated, Image, Dimensions } from "react-native";
import LoginLogo from "../../common/component/atom/LoginLogo";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function SplashscreenComponent() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  fadeIn();
  setTimeout(() => {
    fadeOut();
  }, 3600);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "#3f5d83",
      }}
    >
      <Animated.View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          opacity: fadeAnim,
        }}
      >
        <Image
          style={{
            height: screenHeight / 2.8,
            width: screenWidth / 1.1,
            resizeMode: "contain",
          }}
          source={require("../../assets/transparentLogo.png")}
        />
      </Animated.View>
      <Animated.View
        style={{
          flex: 0.5,
          // backgroundColor: "#121212",
          // justifyContent: "flex-end",
          // marginBottom: 61.15,
          // alignItems: "flex-end",
          opacity: fadeAnim,
        }}
      >
        <Image
          // logoHeight={6}
          // logoWidth={1.86}
          style={{
            height: Dimensions.get("window").height / 6,
            width: Dimensions.get("window").width / 1.86,
            resizeMode: "contain",
          }}
          source={require("../../assets/footer-logos.png")}
        />
      </Animated.View>
    </View>
  );
}

export default SplashscreenComponent;
