import { useContext, useEffect } from "react";
import { CurrentDataContext } from "../provider/CurrentDataContext";
import axios from "axios";
import moment from "moment";

const useFetch = () => {
  const { currentPage, cryptoData, setCryptoData } = useContext(CurrentDataContext);

  const fetchData = async (url, state, format) => {
    try {
      const response = await axios.get(url);
      if (format) {
        state(formatData(response));
      } else {
        state(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formatData = (response) => {
    const formattedData = response.data.prices.map((item) => ({
      month: moment(item[0]).format("MMM YY"),
      time: moment(item[0]).format("YYYY-MM-DD"),
      price: item[1],
    }));
    return formattedData;
  };

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${currentPage}&sparkline=false`;
    fetchData(url, setCryptoData);
  }, [currentPage]);

  return { fetchData };
};

export default useFetch;
