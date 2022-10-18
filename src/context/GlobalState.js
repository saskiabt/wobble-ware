/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  const [globalState, setGlobalState] = useState({
    isBars: true,
  });

  const toggleIsBars = () => {
    globalState.isBars
      ? setGlobalState({ ...globalState, isBars: false })
      : setGlobalState({ ...globalState, isBars: true });
  };

  return (
    <GlobalContext.Provider value={{ ...globalState, toggleIsBars }}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.element),
};
