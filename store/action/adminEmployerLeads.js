export const CURRENT_LEADS_ADMIN_EMPLOYER = "CURRENT_LEADS_ADMIN_EMPLOYER";

export const adminEmployerLead = (token, eventId, userType) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        userType == "employer" || userType == "member"
          ? `https://app.healthdaq.com/api/currentLead/${eventId}`
          : `https://app.healthdaq.com/api/checkAdminAttendenceCount/${eventId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
      const resData = await response.json();
      dispatch({
        type: CURRENT_LEADS_ADMIN_EMPLOYER,
        payload: resData.attendenceCount,
      });
    } catch (err) {
      throw err;
    }
  };
};
