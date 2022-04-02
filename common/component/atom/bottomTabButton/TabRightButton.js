import { TouchableOpacity, View } from "react-native";
import React from "react";
import TextStyle from "../TextStyle";
import styles from "../../../../styles";
import { initialState } from "../../../../store/action/scannerResponse";
import { useSelector, useDispatch } from "react-redux";

const CustomButtonRight = ({ label, onPress, onChange, buttonColor }) => {
  const authData = useSelector((state) => state.auth);
  const { userType, event_exist } = authData;
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      disabled={userType == "admin"? true : false}
      onPress={() => {
        onPress();
        dispatch(initialState());
        onChange();
      }}
      style={styles.bottomTabBarButtonRightTouchAbleStyle}
    >
      <View
        style={[
          { backgroundColor: buttonColor },
          styles.bottomTabBarButtonRightViewStyle,
        ]}
      >
        <TextStyle
          adjustsFontSizeToFit
          style={styles.bottomTabBarButtonRightTextStyle}
        >
          {label}
        </TextStyle>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButtonRight;
