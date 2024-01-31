import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
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
        <div className="diagram-container">
          <div className="diagram">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart key={uniqueTicks} data={showPeriodData()}>
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
            </ResponsiveContainer>
          </div>
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
