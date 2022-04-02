import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  TextInput,
  View,
  Alert,
  Text,
  Animated,
  KeyboardAvoidingView,
  ActivityIndicator,
  Platform,
  Keyboard,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { Button } from "react-native-elements";
import LoginLogo from "../../common/component/atom/LoginLogo";
import { useDispatch } from "react-redux";
import { login } from "../../store/action/authAction";
import styles from "../../styles";

function Login(props) {
  const [event_code, setCode] = useState("");
  const [email_address, setemail] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert("Auth Error!", error, [{ text: "Okay" }]);
    }
  }, [error]);
  const checkedState = useCallback(() => {
    if (email_address != "") {
      return true;
    }
    return false;
  }, [event_code, email_address]);

  const loginHandler = async () => {
    Keyboard.dismiss();
    let userData = new FormData();
    if (event_code) {
      userData.append("email_address", email_address);
      userData.append("event_code", event_code);
    } else userData.append("email_address", email_address);
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(login(userData));
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#3f5c83",
            ...styles.flexCenter,
          }}
          //  onPress={Keyboard.dismiss()}
        >
          {/* <View
          style={{ flex: 1, backgroundColor: "#3f5c83", ...styles.flexCenter }}
        > */}
          <View
            style={{
              flex: 2,
              backgroundColor: "#3f5c83",
              ...styles.flexCenter,
            }}
          >
            <LoginLogo
              logoHeight={10}
              logoWidth={2}
              logo={require("../../assets/whiteLogo.png")}
            />
            <TextInput
              selectionColor={"#b3b3b3"}
              style={styles.inputFieldStyle}
              onChangeText={(text) => setCode(text)}
              value={event_code}
              placeholder="Enter event code"
              keyboardType="default"
              placeholderTextColor="#b3b3b3"
            />
            <TextInput
              selectionColor={"#b3b3b3"}
              style={styles.inputFieldStyle}
              onChangeText={(text) => setemail(text)}
              value={email_address}
              placeholder="Enter your email"
              keyboardType="email-address"
              placeholderTextColor="#b3b3b3"
            />
            {isLoading ? (
              <ActivityIndicator size={"large"} color="#e7aed0" />
            ) : (
              <Text> </Text>
            )}
            <Button
              containerStyle={styles.loginButtonContainerStyle}
              disabled={checkedState() ? false : true}
              disabledStyle={{ backgroundColor: "#999999" }}
              disabledTitleStyle={styles.loginButtonDisableTitleStyle}
              buttonStyle={{ backgroundColor: "#e7aed0" }}
              title="Start"
              titleStyle={styles.loginButtonTitleStyle}
              onPress={loginHandler}
            />
          </View>
          <View
            style={{
              flex: 0.5,
              // backgroundColor: "#121212",
              // justifyContent: "flex-end",
              //  marginBottom: 60,
              // alignItems: "center",
              //  opacity: fadeAnim,
            }}
          >
            <Image
              // logoHeight={6}
              // logoWidth={1.86}
              style={{
                height: Dimensions.get("window").height / 6,
                width: Dimensions.get("window").width / 1.86,
                resizeMode: "contain",
              }}
              source={require("../../assets/footer-logos.png")}
            />
          </View>
          {/* </View> */}
        </View>
      </KeyboardAvoidingView>
    </Pressable>
  );
}
export default Login;
