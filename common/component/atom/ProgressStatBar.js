import React from "react";
import { View, Dimensions } from "react-native";
import * as Progress from "react-native-progress";
import TextStyle from "./TextStyle";
import {
  normalize,
  progressBarHeight,
} from "../pixelPerfectSize/NormalizeSize";
import styles from "../../../styles";
function ProgressStatBar({ text, value, number }) {
  return (
    <View style={styles.progressBarContainerStyle}>
      <View style={styles.progressBarTextContainerStyle}>
        <TextStyle adjustsFontSizeToFit style={styles.progressBarText}>
          {text}
        </TextStyle>
        <TextStyle adjustsFontSizeToFit style={styles.progressBarText}>
          {number}
        </TextStyle>
      </View>
      <Progress.Bar
        progress={value}
        width={normalize(300)}
        height={progressBarHeight(Dimensions.get("window").height)}
        color="#468097"
        borderWidth={0}
        unfilledColor="#bac7d2"
        style={{ marginVertical: 5 }}
      />
    </View>
  );
}
export default ProgressStatBar;
