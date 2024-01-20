import { useContext } from "react";
import { FetchDataContext } from "../../../provider/fetchDataContext";
import Coin from "./TableRow";
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
        {cryptoData?.data.map((coin) => (
          <TableRow key={coin.id} data={coin} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
