import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import moment from "moment";
import test from "./testObject.js";

const Diagram = ({ id }) => {
  const { fetchData } = useFetch();
  const [history, setHistory] = useState(null);
  const [formattedData, setFormattedData] = useState();
  const [uniqueMonths, setUniqueMonths] = useState();

  // useEffect(() => {
  //   if (id) {
  //     const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365&interval=daily&precision=0`;
  //     fetchData(url, setHistory);
  //   }
  // }, [id]);

  useEffect(() => {
    setHistory(test);
  }, []);

  useEffect(() => {
    console.log("Formatiert:", formattedData);
  }, [formattedData]);

  useEffect(() => {
    if (history) {
      console.log("HISTORY", history);
      const formattedData = history.map((item) => ({
        month: moment(item[0]).format("MMM YY"),
        time: moment(item[0]).format("YYYY-MM-DD"),
        price: item[1],
      }));

      setFormattedData(formattedData);
    }
  }, [history]);

  useEffect(() => {
    if (formattedData) {
      const uniqueMonths = Array.from(
        new Set(formattedData.map(({ time }) => moment(time).startOf("month").format("YYYY-MM-DD")))
      );
      setUniqueMonths(uniqueMonths);
    }
  }, [formattedData]);

  useEffect(() => {
    console.log("Months:", uniqueMonths);
  }, [uniqueMonths]);

  const formatXAxis = (tickItem) => {
    const date = moment(tickItem, "YYYY-MM-DD");
    return date.format("MMM YY");
  };

  return (
    <div>
      <LineChart width={800} height={300} data={formattedData}>
        <Line type="monotone" dataKey="price" stroke="#002c45" dot={false} />
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="time"
          ticks={uniqueMonths}
          tickFormatter={formatXAxis}
          interval={0}
          tick={{ fontSize: 10, angle: -45, dy: 10 }}
        />
        <YAxis />
        <Tooltip labelFormatter={(value) => moment(value, "YYYY-MM-DD").format("DD.MM.YYYY")} />
      </LineChart>
    </div>
  );
};

export default Diagram;
