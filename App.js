import React from "react";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/stackNavigation/AppNavigator";
import { store } from "./store/store";


export default function App() {

  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
}
