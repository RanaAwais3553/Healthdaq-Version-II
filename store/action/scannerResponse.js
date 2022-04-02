export const CURRENT_LEADS_ADMIN_ATTENDENCE = "CURRENT_LEADS_ADMIN_ATTENDENCE";
export const CHECK_STATUS = "CHECK_STATUS";
export const ADMIN_ATTENDENCE = "ADMIN_ATTENDENCE";
export const ERROR = "ERROR";
export const RESPONSE = "RESPONSE";
export const LOADING = "LOADING";
export const RESPONSE_MOVE_TO_RATING = "RESPONSE_MOVE_TO_RATING";
export const MODAL_TOGGLE = "MODAL_TOGGLE";
export const WAIT_FOR_SCANNING = "WAIT_FOR_SCANNING";
export const ERROR_CONFIRM = "ERROR_CONFIRM";
export const INITIAL_STATE = "INITIAL_STATE";
export const SCAN_RESPONSE_FAILED = "SCAN_RESPONSE_FAILED";
export const SCAN_RESPONSE_SUCCESS = "SCAN_RESPONSE_SUCCESS";
export const REQUEST_SCAN_RESPONSE = "REQUEST_SCAN_RESPONSE";
export const RESPONSE_MESSAGE = "RESPONSE_MESSAGE";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const resError = () => {
  return { type: ERROR };
};

export const responseModal = () => {
  return { type: RESPONSE };
};

export const resLoading = () => {
  return { type: LOADING };
};

export const resMoveToRating = () => {
  return { type: RESPONSE_MOVE_TO_RATING };
};

export const resModalToggle = () => {
  return { type: MODAL_TOGGLE };
};

export const waitForScanning = () => {
  return { type: WAIT_FOR_SCANNING };
};
export const errorConfirm = () => {
  return { type: ERROR_CONFIRM };
};

export const initialState = () => {
  return { type: INITIAL_STATE };
};
export const resMessageModal = () => {
  return { type: RESPONSE_MESSAGE };
};

export const scanResponse = (scanData) => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, eventId, user_type, event_exist } = transformedData;
    console.log("Scan Data in Action is:!...", scanData, eventId);
    try {
      dispatch({ type: REQUEST_SCAN_RESPONSE });

      const response = await fetch(
        event_exist
          ? user_type == "admin"
            ? `https://app.healthdaq.com/api/checkAttendence/${scanData}/${eventId}`
            : `https://app.healthdaq.com/api/checkIfAlreadyScanned/${scanData}/${eventId}`
          : `https://app.healthdaq.com/api/checkIfAlreadyAmbientScanned/${scanData}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        const errorResData = await response.json();
        const message = errorResData.errors[0];
        console.log("error in scanResponse API is:!...", message);
        throw new Error(message);
      } else {
        const resData = await response.json();
        console.log("Success in scanResponse API is:!...", resData);
        dispatch({
          type: SCAN_RESPONSE_SUCCESS,
          payload:
            user_type == "admin" ? resData.success[0] : resData.scanStatus,
          modal:
            user_type == "admin" ? true : resData.scanStatus ? true : false,
        });
      }
    } catch (error) {
      console.log("Scan Response error is:!...", error.message);
      dispatch({
        type: SCAN_RESPONSE_FAILED,
        payload: error.message,
      });
    }
  };
};
