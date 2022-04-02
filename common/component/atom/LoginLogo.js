import React, { memo } from "react";
import { Image, Dimensions } from "react-native";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
function LoginLogo({ logo, logoHeight, logoWidth }) {
  return (
    <>
      <Image
        style={{
          height: screenHeight / logoHeight,
          width: screenWidth / logoWidth,
          resizeMode: "contain",
        }}
        source={logo}
      />
    </>
  );
}

export default memo(LoginLogo);
