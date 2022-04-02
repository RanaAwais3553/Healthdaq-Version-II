import React from "react";
import { View, Dimensions, Text } from "react-native";
import CircleStats from "../atom/CircleStats";
import CandidateProgressBar from "../atom/CandidateProgressBar";
import styles from "../../../styles";
import MiniHeader from "../molecules/MiniHeader";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
function StatComponent({
  statsObjects,
  currentCompanyLeads,
  leads,
  event_exist,
  ambientCount,
}) {
  return (
    <View style={styles.statContainer}>
      <MiniHeader event_exist={event_exist} />

      <View style={styles.statCircleDiv}>
        <CircleStats
          event_exist={event_exist}
          ambientCount={ambientCount}
          currentCompanyLeads={currentCompanyLeads}
          leads={leads}
        />
      </View>

      <View style={styles.statProgressBarDiv}>
        {event_exist ? (
          <CandidateProgressBar
            statsObjects={statsObjects}
            currentCompanyLeads={currentCompanyLeads}
          />
        ) : (
          <Text></Text>
        )}
      </View>
    </View>
  );
}

export default StatComponent;
