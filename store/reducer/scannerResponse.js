import {
  CURRENT_LEADS_ADMIN_ATTENDENCE,
  ADMIN_ATTENDENCE,
  RESPONSE_MOVE_TO_RATING,
  SCAN_RESPONSE_FAILED,
  SCAN_RESPONSE_SUCCESS,
  REQUEST_SCAN_RESPONSE,
  MODAL_TOGGLE,
  LOADING,
  ERROR_CONFIRM,
  WAIT_FOR_SCANNING,
  INITIAL_STATE,
  RESPONSE_MESSAGE,
  ERROR,
} from "../action/scannerResponse";

const initialState = {
  isRating: false,
  resMessage: null,
  error: "",
  flag: false,
  scanned: false,
  modal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_ATTENDENCE:
      return {
        resMessage: action.payload,
      };
    case SCAN_RESPONSE_FAILED:
      return {
        isRating: false,
        error: action.payload,
        scanned: true,
        resMessage: null,
        flag: false,
        modal: false,
      };
    case SCAN_RESPONSE_SUCCESS:
      return {
        isRating: false,
        scanned: true,
        modal: action.modal,
        resMessage: action.payload,
        error: "",
        flag: false,
      };
    case REQUEST_SCAN_RESPONSE:
      return {
        isRating: false,
        flag: true,
        scanned: true,
        resMessage: null,
        error: "",
        modal: false,
      };
    case LOADING:
      return {
        isRating: false,
        flag: true,
        scanned: true,
        resMessage: null,
        error: "",
        modal: false,
      };
    case MODAL_TOGGLE:
      return {
        isRating: false,
        scanned: false,
        flag: false,
        error: "",
        modal: false,
        resMessage: null,
      };
    case RESPONSE_MOVE_TO_RATING:
      return {
        isRating: true,
        scanned: true,
        resMessage: null,
        error: "",
        flag: true,
        modal: false,
      };
    case WAIT_FOR_SCANNING:
      return {
        isRating: false,
        scanned: false,
        flag: false,
        error: "",
        modal: false,
        resMessage: null,
      };
    case ERROR_CONFIRM:
      return {
        isRating: false,
        scanned: false,
        flag: false,
        error: "",
        modal: false,
        resMessage: null,
      };
    case ERROR:
      return {
        isRating: false,
        error: "Something went wrong",
        scanned: true,
        resMessage: null,
        flag: false,
        modal: false,
      };
    case INITIAL_STATE:
      return {
        isRating: false,
        resMessage: null,
        error: "",
        flag: false,
        scanned: false,
        modal: false,
      };
    case RESPONSE_MESSAGE:
      return {
        isRating: false,
        scanned: true,
        resMessage: null,
        error: "",
        flag: false,
        modal: false,
      };
  }
  return state;
};
