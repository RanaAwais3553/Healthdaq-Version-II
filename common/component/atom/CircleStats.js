import React from "react";
import { View } from "react-native";
import TextStyle from "./TextStyle";
import styles from "../../../styles";
function CircleStats({
  currentCompanyLeads,
  leads,
  event_exist,
  ambientCount,
}) {
  return (
    <View style={styles.circleComponentContainer}>
      <View style={styles.circleStringTextContainer}>
        <TextStyle style={styles.circleStringText1}>Total Leads</TextStyle>
        <TextStyle style={styles.circleStringText2}>Your Leads</TextStyle>
      </View>
      <View style={styles.circleContainer}>
        <View style={[styles.circle, { borderColor: "#468097" }]}>
          <TextStyle style={styles.firstCircleLeads}>
            {event_exist ? currentCompanyLeads : ambientCount}
          </TextStyle>
        </View>
        <View style={[styles.circle, { borderColor: "#8c677d" }]}>
          <TextStyle style={styles.secondCircleLeads}>
            {event_exist ? leads : ambientCount}
          </TextStyle>
        </View>
      </View>
    </View>
  );
}

export default CircleStats;
