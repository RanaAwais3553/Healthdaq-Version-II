import { FETCH_STATS_DATA } from "../action/StatsAction";

const initialState = {
  clinicalGroup: {},
  currentCompanyLeads: null,
  currentUserLead: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATS_DATA:
      return {
        clinicalGroup: action.clinicalGroup,
        currentCompanyLeads: action.currentCompanyLeads,
        currentUserLead: action.currentUserLead,
      };
  }
  return state;
};
