import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  waitForScanning,
  scanResponse,
} from "../../store/action/scannerResponse";
function useHandleBarCodeScanner(scanDataState) {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleBarCodeScanned = async (scanDataState) => {
      let scanData = scanDataState.data;
      if (
        !isNaN(scanData) &&
        (scanDataState.type === "QR_CODE" ||
          scanDataState.type === "org.iso.QRCode")
      ) {
        await dispatch(scanResponse(scanData));
      } else {
        dispatch(waitForScanning());
      }
    };
    scanDataState && handleBarCodeScanned(scanDataState);
  }, [scanDataState]);
}

export default useHandleBarCodeScanner;
