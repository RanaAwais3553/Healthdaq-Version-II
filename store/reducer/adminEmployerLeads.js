import { CURRENT_LEADS_ADMIN_EMPLOYER } from "../action/adminEmployerLeads";

const initialState = {
  leads: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_LEADS_ADMIN_EMPLOYER:
      return {
        leads: action.payload,
      };
  }
  return state;
};
