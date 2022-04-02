import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { scanResponse } from "../../store/action/scannerResponse";
function useScanResponseHook(scanData) {
  const dispatch = useDispatch();
  useEffect(() => {
    const scanApi = async () => {
      await dispatch(scanResponse(scanData));
    };
    if (scanData) {
      scanApi();
    }
  }, [scanData]);
}

export default useScanResponseHook;
