import { createContext, useContext } from "react";

export const MyGlobalContext = createContext({
  copy: "", // Default värde
  setCopy: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);