import { TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { logOut } from "../../../../store/action/authAction";
import {initialRatingResetCount} from '../../../../store/action/RatingAction'
import { useDispatch } from "react-redux";
import TextStyle from "../TextStyle";
import styles from "../../../../styles";
import { splashScreenFalse } from "../../../../store/action/splashScreenFalse";
const CustomButton = ({
  label,
  handleFocusedTab,
  accessibilityState,
  onPress,
}) => {
  useEffect(() => {
    handleFocusedTab(accessibilityState.selected);
  }, [accessibilityState.selected]);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      onPress={() => {
        onPress();
        dispatch(initialRatingResetCount())
        dispatch(splashScreenFalse());
        dispatch(logOut());
      }}
      style={styles.bottomTabBarButtonLeftTouchAbleStyle}
    >
      <View style={styles.bottomTabBarButtonLeftViewStyle}>
        <TextStyle
          adjustsFontSizeToFit
          style={styles.bottomTabBarButtonLeftTextStyle}
        >
          {label}
        </TextStyle>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
