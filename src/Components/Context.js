import { createContext } from "react";

export const AppContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});
