import { createContext, useState } from "react";

const store = createContext();

export function Provider({ children }) {
  const [drawerWidth, setdrawerWidth] = useState(280);
  const [Showdraw, setShowdraw] = useState(false);

  return (
    <store.Provider
      value={{ drawerWidth, setdrawerWidth, Showdraw, setShowdraw }}
    >
      {children}
    </store.Provider>
  );
}

export default store;
