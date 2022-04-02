import React, { useState, memo } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import monthNames from "../../../utility/monthArray";
import styles from "../../../styles";
import TextStyle from "../atom/TextStyle";
function DateText() {
  const authData = useSelector((state) => state.auth);
  const { event_city, event_date, event_exist } = authData;
  const [date, setDate] = useState(event_date ? event_date : null);
  const [city, setCity] = useState(event_city ? event_city : null);
  const d = new Date(`${date}`);
  const year = d.getFullYear();

  return (
    <>
      {event_exist ? (
        <View style={styles.dateTextContainerStyle}>
          <TextStyle adjustsFontSizeToFit style={styles.dateTextStyle}>
            {`${city} | ${d.getDate()} ${monthNames[d.getMonth()]} ${year}`}
          </TextStyle>
        </View>
      ) : (
        <Text></Text>
      )}
    </>
  );
}
export default memo(DateText);
