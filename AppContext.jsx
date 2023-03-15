import { createContext, useContext } from "react";

const AppContext = createContext(
  /* Default value */
  {}
);

// export default AppContext;

export const useAppContext = () => useContext(AppContext);

export default AppContext;

export const AppBank = createContext({});

export const useAppBank = () => useContext(AppBank);
