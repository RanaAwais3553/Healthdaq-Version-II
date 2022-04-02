import React, { useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import ProgressStatBar from "./ProgressStatBar";
import { Icon } from "react-native-elements";
import Octicons from "react-native-vector-icons/Octicons";
import ActivityIndicatorComponent from "./ActivityIndicatorComponent";
function CandidateProgressBar({ statsObjects, currentCompanyLeads }) {
  const listRef = useRef(null);
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const CONTENT_OFFSET_THRESHOLD = 125;
  if (statsObjects === undefined || statsObjects === null) {
    return <ActivityIndicatorComponent />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={listRef}
        onScroll={(event) => {
          setContentVerticalOffset(event.nativeEvent.contentOffset.y);
        }}
        style={{ flexGrow: 1 }}
      >
        {Object.entries(statsObjects).map(([key, value]) => (
          <ProgressStatBar
            key={key}
            text={key}
            value={
              currentCompanyLeads == 0 ? value : value / currentCompanyLeads
            }
            number={value}
          />
        ))}
      </ScrollView>
      {contentVerticalOffset < CONTENT_OFFSET_THRESHOLD && (
        <Octicons
          // type="ionicon"
          name="chevron-down"
          style={{
            fontWeight: "bold",
            top: 0,
            alignSelf: "center",
          }}
          size={35}
          color="#bac7d2"
          onPress={() => {
            listRef.current.scrollToEnd({ offset: 0, animated: true });
          }}
        />
      )}
      {contentVerticalOffset > CONTENT_OFFSET_THRESHOLD && (
        <Octicons
          // type="ionicon"
          name="chevron-up"
          style={{
            top: 0,
            alignSelf: "center",
            fontFamily: "open-sans-bold",
          }}
          size={35}
          color="#bac7d2"
          onPress={() => {
            listRef.current.scrollTo({ offset: 0, animated: true });
          }}
        />
      )}
    </View>
  );
}

export default CandidateProgressBar;
