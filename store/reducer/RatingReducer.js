import {
  POST_RATING,
  COUNT_RATED_CANDIDATE,
  INITIAL_RATING_STAT,
  INITIAL_RATING_RESET_COUNT,
} from "../action/RatingAction";

const initialState = {
  success: "",
  modal: false,
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_RATING:
      return {
        success: action.success,
        modal: action.modal,
        count: state.count,
      };
    case INITIAL_RATING_STAT:
      return {
        success: "",
        modal: false,
        count: state.count,
      };
    case COUNT_RATED_CANDIDATE:
      return {
        count: state.count + action.count,
      };
    case INITIAL_RATING_RESET_COUNT:
      return{
        success: "",
        modal: false,
        count: 0,
      }
  }
  return state;
};
