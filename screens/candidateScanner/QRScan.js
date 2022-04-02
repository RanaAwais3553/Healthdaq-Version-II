import React from "react";
import { View, LogBox } from "react-native";
import BarCode from "../../common/component/organisms/BarCodeScanner";
import MiniHeader from "../../common/component/molecules/MiniHeader";
function QRScan({ navigation }) {
  LogBox.ignoreLogs([
    "Setting a timer for a long period of time, i.e. multiple minutes,",
  ]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
      }}
    >
      <MiniHeader event_exist={true} />
      <BarCode navigation={navigation} />
    </View>
  );
}

export default QRScan;
