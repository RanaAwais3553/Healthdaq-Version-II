import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./reducer/authReducer";
import StatsReducer from "./reducer/StatsReducer";
import QRReducer from "./reducer/QRReducer";
import RatingReducer from "./reducer/RatingReducer";
import scannerResponse from "./reducer/scannerResponse";
import adminEmployerLeads from "./reducer/adminEmployerLeads";
import splashScreenFalseReducer from "./reducer/splashScreenFalseReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  stats: StatsReducer,
  qrCandidateId: QRReducer,
  rating: RatingReducer,
  scannerResponse: scannerResponse,
  adminEmployerLeads: adminEmployerLeads,
  isSplash: splashScreenFalseReducer,
});
export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
