import React, { useState, useEffect } from "react";
import { View, LogBox, Text, Platform } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import DivBlock from "../atom/DivBlock";
import styles from "../../../styles.js";
import BarcodeMask from "react-native-barcode-mask";
import Activityindecator from "../atom/ActivityIndicatorComponent";
import ModalResponse from "./ModalResponse";
import { useDispatch, useSelector } from "react-redux";
import useError from "../../customHooks/useError";
import useHandleBarCodeScanner from "../../customHooks/useHandleBarCodeScanner";
import {
  resModalToggle,
  initialState,
} from "../../../store/action/scannerResponse";
// import useCameraPermissionHook from "../../customHooks/useCameraPermission";
import Ionicons from "react-native-vector-icons/Ionicons";
import useScanResponseFunction from "../../customHooks/scanResponseFunctions";

export default function BarCode({ navigation }) {
  LogBox.ignoreLogs([
    "Setting a timer for a long period of time, i.e. multiple minutes,",
    "EventEmitter.removeListener",
    "Sending",
    "Can't perform a React state update",
  ]);
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth);
  const { token, eventId, userType, event_exist } = authData;
  const resData = useSelector((state) => state.scannerResponse);
  const { resMessage, error, flag, scanned, modal } = resData;
  const [scanDataState, setScanData] = useState();
  useEffect(() => {
    dispatch(initialState());
  }, []);
  useHandleBarCodeScanner(scanDataState ? scanDataState : undefined);
  useError(error ? error : "");
  const checkStatus = useScanResponseFunction(
    resMessage,
    userType,
    scanDataState,
    navigation
  );
  function modalToggleState() {
    dispatch(resModalToggle());
  }
  const handleBarCodeScanned = (item) => {
    console.log("scan data is", item);

    (item.type != "org.iso.QRCode" || isNaN(item.data)) && scanner.reactivate();
    // (item.type != "QR_CODE" || isNaN(item.data)) && scanner.reactivate();
    if (
      !scanned &&
      (item.type === "QR_CODE" || item.type === "org.iso.QRCode")
    ) {
      setScanData(item);
    }
  };

  if (flag) {
    return <Activityindecator />;
  }

  return (
    <View style={[styles.x_axis_flexStart, { flex: 2 }]}>
      <View
        style={[
          styles.x_axis_y_axis_Start,
          { flex: userType == "admin" ? 0.2 : 0.1 },
        ]}
      >
        {userType == "admin" ? (
          <DivBlock token={token} eventId={eventId} userType={userType} />
        ) : (
          <Text></Text>
        )}
      </View>
      <View style={styles.barCodeScannerContainer}>
        <View style={styles.barCodeScannerbox}>
          <QRCodeScanner
            onRead={handleBarCodeScanned}
            vibrate={false}
            ref={(node) => {
              scanner = node;
            }}
            reactivate={scanned}
            containerStyle={{
              height: 250,
              width: 250,
              alignSelf: "center",
            }}
          />
          <View style={{ position: "absolute" }}>
            <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
          </View>
          {/* {Platform.OS == "android" && (
            <View style={{ position: "absolute" }}>
              <Ionicons
                // type="ionicon"
                name="reload"
                style={{
                  fontWeight: "bold",
                  top: 0,
                  alignSelf: "center",
                }}
                size={35}
                color="#bac7d2"
                // onPress={() => {
                //   listRef.current.scrollToEnd({ offset: 0, animated: true });
                // }}
              />
            </View>
          )} */}
        </View>
      </View>
      {modal && (
        <ModalResponse
          modalToggleState={modalToggleState}
          successed={checkStatus}
          modalButton={true}
        />
      )}
    </View>
  );
}
