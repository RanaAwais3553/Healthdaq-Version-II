// import { useEffect, useState } from "react";
// import { BarCodeScanner } from "expo-barcode-scanner";
// const useCameraPermissionHook = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   useEffect(() => {
//     const askForCameraPermission = async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === "granted");
//     };
//     askForCameraPermission();
//   }, []);
//   return hasPermission;
// };
// export default useCameraPermissionHook;
