import { AUTHENTICATE, SET_DID_TRY_AL, LOGOUT } from "../action/authAction";

const initialState = {
  token: null,
  eventId: null,
  didTryAutoLogin: false,
  userType: null,
  event_city: null,
  event_date: null,
  event_exist: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        eventId: action.eventId,
        token: action.token,
        userType: action.userType,
        event_city: action.city,
        event_date: action.event_date,
        event_exist: action.event_exist,
      };
    case SET_DID_TRY_AL:
      return {
        ...state,
        didTryAutoLogin: true,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
