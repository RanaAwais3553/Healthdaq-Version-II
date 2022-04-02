import React, { memo } from "react";
import { View } from "react-native";
import DateText from "./DateText";
import LoginLogo from "../atom/LoginLogo";
function MiniHeader({ event_exist }) {
  return (
    <View
      style={{
        flex: event_exist ? 0.7 : 0.8,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginLogo
        logoHeight={10}
        logoWidth={2}
        logo={require("../../../assets/logo.png")}
      />
      <DateText />
    </View>
  );
}

export default memo(MiniHeader);
