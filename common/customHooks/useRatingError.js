import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";
import { initialState } from "../../store/action/scannerResponse";
function useRatingError(objectsError) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (objectsError.error) {
      Alert.alert("Error!", objectsError.error, [
        {
          text: "Okay",
          onPress: () => {
            dispatch(initialState());
            objectsError.navigation.navigate("QRScan");
          },
        },
      ]);
    }
  }, [objectsError.error]);
}

export default useRatingError;
