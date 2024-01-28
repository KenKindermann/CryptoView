import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import moment from "moment";
import test from "./testObject.js";
import periods from "./periods.js";

const Diagram = ({ id }) => {
  const { fetchData } = useFetch();
  const [history, setHistory] = useState(null);
  const [activePeriod, setActivePeriod] = useState(periods[3]);
  const [uniqueTicks, setUniqueTicks] = useState();

  useEffect(() => {
    if (id) {
      const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365&interval=daily&precision=0`;
      fetchData(url, setHistory, true);
    }
  }, [id]);

  useEffect(() => {
    if (history) {
      setUniqueTicks(activePeriod.getTicks(history));
    }
  }, [history]);

  useEffect(() => {
    console.log("HISOTREY", history);
  }, [history]);

  // useEffect(() => {
  //   setHistory(test);
  // }, []);

  // Formatting history data from api to needed structure for diagram
  // useEffect(() => {
  //   if (history) {
  //     const formattedData = history.data.prices.map((item) => ({
  //       month: moment(item[0]).format("MMM YY"),
  //       time: moment(item[0]).format("YYYY-MM-DD"),
  //       price: item[1],
  //     }));

  //     setFormattedData(formattedData);
  //   }
  // }, [history]);

  // Format
  const formatXAxis = (tickItem) => {
    const date = moment(tickItem, "YYYY-MM-DD");
    return date.format(activePeriod.dateFormat);
  };

  // Filter data by current period
  const showPeriodData = () => {
    const now = moment();
    return history.filter((data) => moment(data.time).isAfter(now.clone().subtract(activePeriod.substract, "months")));
  };

  return (
    history && (
      <>
        <div className="diagram">
          <LineChart key={uniqueTicks} width={900} height={300} data={showPeriodData()}>
            <Line type="monotone" dataKey="price" stroke="#002c45" dot={false} />
            <CartesianGrid stroke="#ccc" />
            <XAxis
              dataKey="time"
              ticks={uniqueTicks}
              tickFormatter={formatXAxis}
              interval={0}
              tick={{ fontSize: 10, angle: -45, dy: 10 }}
            />
            <YAxis />
            <Tooltip labelFormatter={(value) => moment(value, "YYYY-MM-DD").format("DD.MM.YYYY")} />
          </LineChart>
        </div>

        <div className="choose-period">
          {periods.map((period) => (
            <button
              key={period.label}
              className={activePeriod === period.label ? `active` : null}
              onClick={() => {
                setActivePeriod(period), setUniqueTicks(period.getTicks(history));
              }}
            >
              {period.label}
            </button>
          ))}
        </div>
      </>
    )
  );
};
export default Diagram;