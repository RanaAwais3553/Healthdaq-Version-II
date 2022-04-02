import React, { memo } from "react";
import { View, Text } from "react-native";
function ErrorComponent({ error }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          color: "#3f5c83",
          fontSize: 20,
          fontFamily: "open-sans-bold",
        }}
      >
        {error}
      </Text>
    </View>
  );
}

export default memo(ErrorComponent);
