import { useContext, useEffect } from "react";

import fetchData from "../../../hooks/useFetch";
import TableRow from "./TableRow";
import { CurrentDataContext } from "../../../provider/CurrentDataContext";

const Table = () => {
  const { cryptoData, setCryptoData, currentPage } = useContext(CurrentDataContext);

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${currentPage}&sparkline=false`;
    fetchData(url, setCryptoData);
  }, [currentPage]);

  return (
    <table>
      <thead>
        <tr>
          <th>Coin</th>
          <th>Price</th>
          <th>24h Change</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {cryptoData?.data.map((coin, index) => (index < 15 ? <TableRow key={coin.id} data={coin} /> : null))}
      </tbody>
    </table>
  );
};

export default Table;
