import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchDataContext } from "../../provider/fetchDataContext";

const DetailView = () => {
  const { cryptoData } = useContext(FetchDataContext);
  const { id } = useParams();
  const [currentCoin, setCurrentCoin] = useState(cryptoData.data.find((coin) => coin.id === id));

  console.log("Current Coin:", currentCoin);

  return (
    <section id="detail-view">
      <div className="coin-details">
        <img src={currentCoin?.image} alt={`${currentCoin.name} icon`} />
        <div className="coin-info">
          <div>
            <span>Current Price:</span>
            <span>{currentCoin.current_price}</span>
          </div>
          <div>
            <span>Lowest 24h:</span>
            <span>{currentCoin.low_24h}</span>
          </div>
          <div>
            <span>Highest 24h:</span>
            <span>{currentCoin.high_24h}</span>
          </div>
          <div>
            <span>24h Change:</span>
            <span>{currentCoin.price_change_percentage_24h}</span>
          </div>
          <div>
            <span>Total Volume:</span>
            <span>{currentCoin.total_volume}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailView;
