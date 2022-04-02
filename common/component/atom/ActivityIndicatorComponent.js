import React, { memo } from "react";
import { View, ActivityIndicator } from "react-native";
function ActivityIndicatorComponent() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#e7aed0" />
    </View>
  );
}

export default memo(ActivityIndicatorComponent);
