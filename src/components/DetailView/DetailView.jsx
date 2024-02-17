import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CurrentDataContext } from "../../provider/CurrentDataContext";
import useFetch from "../../hooks/useFetch";
import Diagram from "./Diagram";

const DetailView = () => {
  const { cryptoData } = useContext(CurrentDataContext);
  const { id } = useParams();
  const [currentCoin, setCurrentCoin] = useState(null);
  const { fetchData } = useFetch();

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    fetchData(url, setCurrentCoin);
  }, [id]);

  const formattedData = {
    current_price: new Intl.NumberFormat("de-DE", { style: "currency", currency: "USD" }).format(
      currentCoin?.data.market_data.current_price.usd
    ),
    low_24h: new Intl.NumberFormat("de-DE", { style: "currency", currency: "USD" }).format(
      currentCoin?.data.market_data.low_24h.usd
    ),
    high_24h: new Intl.NumberFormat("de-DE", { style: "currency", currency: "USD" }).format(
      currentCoin?.data.market_data.high_24h.usd
    ),
    price_change_percentage_24h: `${currentCoin?.data.market_data.price_change_percentage_24h.toFixed(2)}%`,
    market_cap: new Intl.NumberFormat("de-DE").format(currentCoin?.data.market_data.total_volume.usd),
  };

  return (
    <section id="detail-view">
      <div className="coin-details">
        <div className="image-and-details">
          <img src={currentCoin?.data.image.large} alt={`${currentCoin?.name} icon`} />
          <div className="coin-info">
            <div>
              <span>Current Price:</span>
              <span>{formattedData?.current_price}</span>
            </div>
            <div>
              <span>Lowest 24h:</span>
              <span>{formattedData?.low_24h}</span>
            </div>
            <div>
              <span>Highest 24h:</span>
              <span>{formattedData?.high_24h}</span>
            </div>
            <div>
              <span>24h Change:</span>
              <span className={formattedData?.price_change_percentage_24h > 0 ? `profit` : `loss`}>
                {formattedData?.price_change_percentage_24h}
              </span>
            </div>
            <div>
              <span>Total Volume:</span>
              <span>{formattedData?.market_cap}</span>
            </div>
          </div>
        </div>

        <div className="coin-description">
          <p>{currentCoin?.data.description.en}</p>
        </div>
      </div>
      <Diagram id={id} />
    </section>
  );
};

export default DetailView;
