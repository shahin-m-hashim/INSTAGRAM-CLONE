import { createContext, useTransition } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [isPending, startTransition] = useTransition();

  return (
    <GlobalContext.Provider
      value={{
        isPending,
        startTransition,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
