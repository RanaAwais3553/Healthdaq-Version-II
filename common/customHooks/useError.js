import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";
import { errorConfirm } from "../../store/action/scannerResponse";
function useError(error) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      Alert.alert("Error!", error, [
        {
          text: "Okay",
          onPress: () => {
            dispatch(errorConfirm());
          },
        },
      ]);
    }
  }, [error]);
}

export default useError;
