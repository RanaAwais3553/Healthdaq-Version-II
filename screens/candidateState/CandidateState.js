import React, { useState } from "react";
import { View, Text } from "react-native";
import StatComponent from "../../common/component/organisms/StatComponent";
import ErrorComponent from "../../common/component/atom/ErrorComponent";
import ActivityIndicatorComponent from "../../common/component/atom/ActivityIndicatorComponent";
import { useSelector } from "react-redux";
import useStatCustomHook from "../../common/customHooks/useStatCustomHook";
import StatsObject from "../../utility/statObject";

function CandidateState() {
  const { isLoading, error } = useStatCustomHook();
  const authData = useSelector((state) => state.auth);
  const { event_city, event_date, event_exist } = authData;
  const ambientCount = useSelector((state) => state.rating.count);
  const [eventCity, setCity] = useState(event_city ? event_city : undefined);
  const [date, setDate] = useState(event_date ? event_date : undefined);
  const statsData = useSelector((state) => state.stats.clinicalGroup);
  const currentCompanyLeads = useSelector(
    (state) => state.stats.currentCompanyLeads
  );
  const currentUserLead = useSelector((state) => state.stats.currentUserLead);

  const statsObjects =
    event_exist && statsData != undefined ? StatsObject(statsData) : null;

  if (isLoading) {
    return <ActivityIndicatorComponent />;
  }
  if (error) {
    return <ErrorComponent error={error} />;
  }
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <StatComponent
        eventCity={eventCity}
        eventDate={date}
        statsObjects={statsObjects}
        currentCompanyLeads={currentCompanyLeads}
        leads={currentUserLead}
        event_exist={event_exist}
        ambientCount={ambientCount}
      />
    </View>
  );
}

export default CandidateState;
