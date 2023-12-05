import React, { createContext, useState } from "react";

const PanierContext = createContext();

const PanierProvider = ({ children }) => {
  const [itemPanier, setItemPanier] = useState([]);

  return (
    <PanierContext.Provider value={{ itemPanier, setItemPanier }}>
      {children}
    </PanierContext.Provider>
  );
};

export { PanierProvider, PanierContext };
