import { useContext } from "react";
import { FetchDataContext } from "../../../provider/fetchDataContext";

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
        <tr>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
        </tr>
        <tr>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
        </tr>
        <tr>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
        </tr>
        <tr>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
