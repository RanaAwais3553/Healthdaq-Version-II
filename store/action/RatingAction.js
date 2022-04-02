export const POST_RATING = "POST_RATING";
export const COUNT_RATED_CANDIDATE = "COUNT_RATED_CANDIDATE";
export const INITIAL_RATING_STAT = "INITIAL_RATING_STAT";
export const INITIAL_RATING_RESET_COUNT = "INITIAL_RATING_RESET_COUNT";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const ratingAction = (candidateId, rating) => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, eventId, user_type, event_exist } = transformedData;
    console.log("rating data is:!..", rating);
    let formData = new FormData();
    formData.append("candidate_id", candidateId);
    event_exist && formData.append("event_id", eventId);
    formData.append("note", rating);
    const response = await fetch(
      event_exist
        ? `https://app.healthdaq.com/api/rateCandidate`
        : `https://app.healthdaq.com/api/rateAmbientCandidate`,

      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      const resData = await response.json();
      let msg = resData["errors"];
      console.log("error message in rating action is:!..", msg[0]);
      throw new Error(msg[0]);
    } else {
      const resData = await response.json();

      dispatch({
        type: POST_RATING,
        success: resData.info[0],
        modal: true,
      });
    }
  };
};

export const initialRatingStat = () => {
  return { type: INITIAL_RATING_STAT };
};

export const countRatedCandidate = (count) => {
  console.log("count value is :", count);
  return { type: COUNT_RATED_CANDIDATE, count: count };
};

export const initialRatingResetCount = () => {
  return { type: INITIAL_RATING_RESET_COUNT };
};
