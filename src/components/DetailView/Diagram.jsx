import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const Diagram = ({ id }) => {
  const { fetchData } = useFetch();
  const [history, setHistory] = useState(null);
  const [formattedData, setFormattedData] = useState();

  useEffect(() => {
    if (id) {
      const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365&interval=daily&precision=0`;
      fetchData(url, setHistory);
    }
  }, [id]);

  useEffect(() => {
    if (history) {
      const data = history.data.prices.reduce((acc, item) => {
        const date = new Date(item[0]);
        const month = date.getMonth();
        const year = date.getFullYear();
        const key = `${year}-${month}`;

        if (!acc[key]) {
          acc[key] = {
            time: `${monthNames[month]} ${year}`,
            price: item[1],
            count: 1,
          };
        } else {
          acc[key].price += item[1];
          acc[key].count += 1;
        }
        return acc;
      }, {});

      const formattedData = Object.values(data).map((item) => ({
        time: item.time,
        price: item.price / item.count,
      }));

      setFormattedData(formattedData);
    }
  }, [history]);

  useEffect(() => {
    console.log(formattedData);
  }, [formattedData]);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const formatXAxis = (tickItem) => {
    const date = new Date(tickItem);
    return monthNames[date.getMonth()];
  };

  return (
    <div>
      <LineChart width={700} height={300} data={formattedData}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" tickFormatter={formatXAxis} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Diagram;
