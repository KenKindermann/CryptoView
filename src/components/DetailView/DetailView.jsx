import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CurrentDataContext } from "../../provider/CurrentDataContext";
import useFetch from "../../hooks/useFetch";

const DetailView = () => {
  const { cryptoData } = useContext(CurrentDataContext);
  const { id } = useParams();
  const [currentCoin, setCurrentCoin] = useState(null);
  const { fetchData } = useFetch();

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    fetchData(url, setCurrentCoin);
  }, [id]);

  useEffect(() => {
    console.log(currentCoin);
  }, [currentCoin]);

  return (
    <section id="detail-view">
      <div className="coin-details">
        <img src={currentCoin?.data.image.large} alt={`${currentCoin?.name} icon`} />
        <div className="coin-info">
          <div>
            <span>Current Price:</span>
            <span>{currentCoin?.data.market_data.current_price.usd}</span>
          </div>
          <div>
            <span>Lowest 24h:</span>
            <span>{currentCoin?.data.market_data.low_24h.usd}</span>
          </div>
          <div>
            <span>Highest 24h:</span>
            <span>{currentCoin?.data.market_data.high_24h.usd}</span>
          </div>
          <div>
            <span>24h Change:</span>
            <span>{currentCoin?.data.market_data.price_change_percentage_24h}</span>
          </div>
          <div>
            <span>Total Volume:</span>
            <span>{currentCoin?.data.market_data.total_volume.usd}</span>
          </div>
        </div>
        <div className="coin-description">
          <p>{currentCoin?.data.description.en}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailView;
