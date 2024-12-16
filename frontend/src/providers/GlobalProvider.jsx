import { createContext, useState, useTransition } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [isPending, startTransition] = useTransition();
  const [activeWidget, setActiveWidget] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        isPending,
        activeWidget,
        startTransition,
        setActiveWidget,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
