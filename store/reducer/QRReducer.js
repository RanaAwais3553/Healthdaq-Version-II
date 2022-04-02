import { QRSCAN_POST_ID, QRSCAN_POST_ATTENDENCE } from "../action/QRAction";

const initialState = {
  candidateIds: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case QRSCAN_POST_ID:
      return {
        candidateIds: action.candidateId,
      };
  }
  return state;
};
