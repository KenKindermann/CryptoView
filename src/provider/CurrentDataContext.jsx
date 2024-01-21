import { createContext, useState } from "react";

export const CurrentDataContext = createContext();

export const CurrentDataProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <CurrentDataContext.Provider value={{ cryptoData, setCryptoData, currentPage, setCurrentPage }}>
      {children}
    </CurrentDataContext.Provider>
  );
};
