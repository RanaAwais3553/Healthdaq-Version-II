import { SET_SPLASH_SCREEN_VALUE } from "../action/splashScreenFalse";

const initialState = {
  isSplashScreen: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SPLASH_SCREEN_VALUE:
      return {
        isSplashScreen: action.isSplashScreen,
      };
  }
  return state;
};
