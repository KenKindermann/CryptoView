import { useContext, useEffect } from "react";
import { CurrentDataContext } from "../provider/CurrentDataContext";
import axios from "axios";

const useFetch = () => {
  const { currentPage, cryptoData, setCryptoData } = useContext(CurrentDataContext);

  const fetchData = async (url, state) => {
    try {
      const response = await axios.get(url);
      state(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${currentPage}&sparkline=false`;
    fetchData(url, setCryptoData);
  }, [currentPage]);

  return { fetchData };
};

export default useFetch;
