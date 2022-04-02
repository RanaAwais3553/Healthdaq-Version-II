import React, { useEffect } from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import ActivityIndicatorComponent from "./ActivityIndicatorComponent";
import { adminEmployerLead } from "../../../store/action/adminEmployerLeads";
import { useDispatch, useSelector } from "react-redux";
function DivBlock({ token, eventId, userType }) {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(adminEmployerLead(token, eventId, userType));
    })();
  }, []);
  const { leads } = useSelector((state) => state.adminEmployerLeads);
  return (
    <View style={styles.divBlockContainer}>
      <View style={styles.divBlockTextContainerStyle}>
        {leads || leads == 0 ? (
          <Text
            adjustsFontSizeToFit
            style={[{ paddingHorizontal: 9 }, styles.divBlockText]}
          >
            Check In {"\n"}
            {leads}
          </Text>
        ) : (
          <ActivityIndicatorComponent />
        )}
      </View>
    </View>
  );
}

export default DivBlock;
