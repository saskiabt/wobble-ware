/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import NavMenu from "./components/NavMenu/NavMenu";
import WorksPage from "./components/WorksPage/WorksPage";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <>
        <div className="App">
          <NavMenu />
          <LandingPage />
          <WorksPage />
        </div>
        <div className="nav"></div>
      </>
    </GlobalProvider>
  );
}
App.defaultProps = {
  isBars: true,
};
export default App;
