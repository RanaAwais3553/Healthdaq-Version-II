import AsyncStorage from "@react-native-async-storage/async-storage";
export const FETCH_STATS_DATA = "FETCH_STATS_DATA";

export const fetchStatsData = () => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, eventId } = transformedData;
    try {
      const response = await fetch(
        `https://app.healthdaq.com/api/eventStats/${eventId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();

      dispatch({
        type: FETCH_STATS_DATA,
        clinicalGroup: resData.clinicalGroup,
        currentCompanyLeads: resData.currentCompanyLeads,
        currentUserLead: resData.currentUserLead,
      });
    } catch (err) {
      throw err;
    }
  };
};
