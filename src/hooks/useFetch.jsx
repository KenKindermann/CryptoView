import { useContext } from "react";
import { CurrentDataContext } from "../provider/CurrentDataContext";

const useFetch = () => {
  const { cryptoData, setCryptoData } = useContext(CurrentDataContext);

  const fetchData = async (url, state) => {
    try {
      await axios.get(url).then((res) => state(res));
    } catch (error) {
      console.error(error);
    }
  };
  return { fetchData };
};

export default useFetch;
