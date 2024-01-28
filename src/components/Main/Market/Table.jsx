import { useContext, useEffect } from "react";
import fetchData from "../../../hooks/useFetch";
import TableRow from "./TableRow";
import { CurrentDataContext } from "../../../provider/CurrentDataContext";
import useFetch from "../../../hooks/useFetch";

const Table = () => {
  const { cryptoData, setCryptoData, currentPage } = useContext(CurrentDataContext);
  const { fetchData } = useFetch();

  return (
    <div className="table">
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
    </div>
  );
};

export default Table;
