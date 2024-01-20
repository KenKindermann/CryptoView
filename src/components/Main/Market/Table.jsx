import { useContext } from "react";
import { FetchDataContext } from "../../../provider/fetchDataContext";
import TableRow from "./TableRow";

const Table = () => {
  const { cryptoData } = useContext(FetchDataContext);

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
