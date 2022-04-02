import React from "react";
import { View } from "react-native";
import RatingStar from "../../common/component/organisms/Rating";
import { useSelector } from "react-redux";
import MiniHeader from "../../common/component/molecules/MiniHeader";
import { useNavigation } from "@react-navigation/native";

function QRRateYourCandidate() {
  const navigation = useNavigation();
  const candidateId = useSelector((state) => state.qrCandidateId.candidateIds);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 15,
      }}
    >
      <View style={{ flex: 0.4, width: "100%", alignSelf: "stretch" }}>
        <MiniHeader event_exist={true} />
      </View>
      <View style={{ flex: 1, alignSelf: "stretch" }}>
        <RatingStar candidateId={candidateId} navigation={navigation} />
      </View>
    </View>
  );
}

export default QRRateYourCandidate;
