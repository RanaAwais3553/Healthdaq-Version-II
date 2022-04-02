import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchStatsData } from "../../store/action/StatsAction";
function useStatCustomHook() {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const loadedUserData = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(fetchStatsData());
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [dispatch, setError, setIsLoading]);
  useEffect(() => {
    loadedUserData();
    return () => {
      setError(null);
      setIsLoading(false);
    };
  }, [dispatch, loadedUserData]);

  return { isLoading, error };
}

export default useStatCustomHook;
