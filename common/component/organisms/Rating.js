import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import StarRating from "react-native-star-rating";
import { Button } from "react-native-elements";
import ModalResponse from "./ModalResponse";
import {
  ratingAction,
  countRatedCandidate,
} from "../../../store/action/RatingAction";
import { initialState } from "../../../store/action/scannerResponse";
import useRatingError from "../../customHooks/useRatingError";
import { useSelector, useDispatch } from "react-redux";
import ActivityIndicatorComponent from "../atom/ActivityIndicatorComponent";
let count = 1;
function RatingStar({ candidateId, navigation }) {
  const { success, modal } = useSelector((state) => state.rating);
  const [error, setError] = useState("");
  const [feedBack, setFeedBack] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const dispatch = useDispatch();
  const objectsError = {
    error: error,
    navigation: navigation,
  };
  useRatingError(error ? objectsError : "");

  const onStarRatingPress = async () => {
    setError("");
    setIsLoading(true);
    dispatch(countRatedCandidate(count));
    await dispatch(ratingAction(candidateId, feedBack))
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  };
  const onStarRatingSkipInputPress = async () => {
    let blankmsg = "";
    setFeedBack("");
    setError("");
    setIsLoading(true);
    dispatch(countRatedCandidate(count));
    await dispatch(ratingAction(candidateId, blankmsg))
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  };
  const modalToggleState = () => {
    dispatch(initialState());
    navigation.navigate("QRScan");
  };
  if (isLoading) {
    return <ActivityIndicatorComponent />;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <View style={{ flex: 1, width: "68%" }}>
            <Text
              adjustsFontSizeToFit
              style={{
                fontWeight: "bold",
                marginBottom: 10,
                fontSize: Dimensions.get("window").height < 600 ? 16 : 18,
                color: "#468097",
                textAlign: "left",
              }}
            >
              Notes
            </Text>

            <View style={styless.textAreaContainer}>
              <TextInput
                style={styless.textArea}
                underlineColorAndroid="transparent"
                placeholder="Type something..."
                placeholderTextColor="grey"
                numberOfLines={15}
                onChangeText={(text) => setFeedBack(text)}
                value={feedBack}
                textAlignVertical="top"
                keyboardType="default"
                multiline={true}
                selectionColor={"#b3b3b3"}
              />
            </View>
            <View
              style={{
                flex: 0.5,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <Button
                title="Submit"
                type="clear"
                titleStyle={{ color: "#468097" }}
                onPress={onStarRatingPress}
              />
              <Button
                title="Skip"
                type="clear"
                titleStyle={{ color: "#8c677d" }}
                onPress={onStarRatingSkipInputPress}
              />
            </View>

            {/* <StarRating
        disabled={false}
        emptyStar={"ios-star-outline"}
        fullStar={"ios-star"}
        halfStar={"ios-star-half"}
        iconSet={"Ionicons"}
        maxStars={5}
        rating={selectedRating}
        selectedStar={(rating) => onStarRatingPress(rating)}
        fullStarColor={"#468097"}
        emptyStarColor={"#bac7d2"}
        style={{
          paddingVertical: Dimensions.get("window").height < 600 ? 5 : 10,
        }}
      /> */}
            {modal && (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ModalResponse
                  modalToggleState={modalToggleState}
                  successed={success}
                  modalButton={true}
                />
              </View>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default RatingStar;
const styless = StyleSheet.create({
  textAreaContainer: {
    flex: 0.5,
    borderColor: "#9bb7c2",
    //  width:'100%',
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    flex: 1,
    //  width:'100%',
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
