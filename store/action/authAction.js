import AsyncStorage from "@react-native-async-storage/async-storage";
export const LOGOUT = "LOGOUT";

export const AUTHENTICATE = "AUTHENTICATE";
export const SET_DID_TRY_AL = "SET_DID_TRY_AL";
let timer;

export const setDidTryAL = () => {
  return { type: SET_DID_TRY_AL };
};

export const authenticate = (
  event_id,
  token,
  userType,
  city,
  event_date,
  event_exist
) => {
  return (dispatch) => {
    //  dispatch(setLogoutTimer(expiry));
    dispatch({
      type: AUTHENTICATE,
      eventId: event_id,
      userType,
      token: token,
      city,
      event_date,
      event_exist,
    });
  };
};

export const login = (userData) => {
  console.log("userData is:!...", userData);
  return async (dispatch) => {
    const response = await fetch(
      "https://app.healthdaq.com/api/authenticateEmployer",
      {
        method: "POST",

        body: userData,
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.errors[0];
      console.log("error is", errorId);
      let message = "Some thing went wrong!";
      if (errorId === "The email address must be a valid email address.") {
        message = "Please Check Email and Event Code!";
      } else if (errorId === "Event not found") {
        message = "This Event Code is not valid";
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log("resData is:!...", resData.event_exist);
    // const expiry = 3600 * 1000;
    // const expiryTime = new Date(new Date().getTime() + expiry);
    dispatch(
      authenticate(
        resData.event_id,
        resData.token,
        resData.user_type,
        resData.event_city,
        resData.event_date,
        resData.event_exist
      )
    );
    saveDataToStorage(
      resData.event_id,
      resData.token,
      resData.event_city,
      resData.event_date,
      resData.currentLeads,
      resData.user_type,
      resData.event_exist
    );
  };
};
export const logOut = () => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, eventId } = transformedData;
    await fetch("https://app.healthdaq.com/api/logout", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //  clearLogoutTimer();
    AsyncStorage.removeItem("userData");
    dispatch({ type: LOGOUT });
  };
};
// const clearLogoutTimer = () => {
//   if (timer) {
//     clearTimeout(timer);
//   }
// };
// const setLogoutTimer = (expirationTime) => {
//   return (dispatch) => {
//     timer = setTimeout(() => {
//       dispatch(logOut());
//     }, expirationTime);
//   };
// };
const saveDataToStorage = (
  eventId,
  token,
  city,
  event_date,
  current_leads,
  user_type,
  event_exist
) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      eventId: eventId,
      city: city,
      event_date: event_date,
      current_leads: current_leads,
      user_type: user_type,
      event_exist: event_exist,
    })
  );
};
