import React, { memo } from "react";
import { View, Text } from "react-native";
function NotAuthorized() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          color: "#3f5c83",
          fontSize: 20,
          fontFamily: "open-sans-bold",
        }}
      >
        You are not Authorize.
      </Text>
    </View>
  );
}

export default memo(NotAuthorized);
