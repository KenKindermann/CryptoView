import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataFetchContext = createContext();

export const DataFetchProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=75&page=1&sparkline=false";

  const fetchData = async () => {
    try {
      await axios.get(url).then((res) => setCryptoData(res));
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   fetchData()
  // }, []);

  return <DataFetchContext.Provider value={{ cryptoData, setCryptoData }}>{children}</DataFetchContext.Provider>;
};
