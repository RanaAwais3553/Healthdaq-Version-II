import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resMoveToRating } from "../../store/action/scannerResponse";
import { qrScanEmployeMember } from "../../store/action/QRAction";
import { initialRatingStat } from "../../store/action/RatingAction";
function useScanResponseFunction(
  resMessage,
  userType,
  scanDataState,
  navigation
) {
  const dispatch = useDispatch();
  const [checkStatus, setCheckStatus] = useState("");
  useEffect(() => {
    if (resMessage === null) {
      return;
    } else {
      console.log("in if Block:!", resMessage);
      if (userType === "admin") {
        setCheckStatus(resMessage);
      } else {
        console.log("in Else Block:!", resMessage);
        setCheckStatus(resMessage);
        resMessage ? stayScanned() : moveToRating(scanDataState.data);
      }
    }
    return () => clearInterval();
  }, [resMessage]);

  const moveToRating = (candidateId) => {
    dispatch(resMoveToRating());
    setCheckStatus("");
    dispatch(qrScanEmployeMember(candidateId));
    dispatch(initialRatingStat());
    navigation.navigate("Rating");
  };
  const stayScanned = () => {
    setCheckStatus("Already Scanned!");
  };
  return checkStatus;
}

export default useScanResponseFunction;
