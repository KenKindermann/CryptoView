import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import useFetch from "../../hooks/useFetch";
import { useCallback, useEffect, useMemo, useState } from "react";
import moment from "moment";
import test from "./testObject.js";

const Diagram = ({ id }) => {
  const { fetchData } = useFetch();
  const [history, setHistory] = useState(null);
  const [formattedData, setFormattedData] = useState();
  const [uniqueTicks, setUniqueTicks] = useState();
  const [activePeriod, setActivePeriod] = useState("12 month");

  const periods = [
    {
      label: "1 month",
      substract: 1,
      dateFormat: "DD.MM.",
    },
    {
      label: "3 month",
      substract: 3,
      dateFormat: "WW",
    },
    {
      label: "6 month",
      substract: 6,
      dateFormat: "MMM YY",
    },
    {
      label: "12 month",
      substract: 12,
      dateFormat: "MMM YY",
    },
  ];

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
    if (formattedData) {
      setTicks("12 month");
    }
  }, [formattedData]);

  // Formatting history data from api to needed structure for diagram
  useEffect(() => {
    if (history) {
      const formattedData = history.map((item) => ({
        month: moment(item[0]).format("MMM YY"),
        time: moment(item[0]).format("YYYY-MM-DD"),
        price: item[1],
      }));

      setFormattedData(formattedData);
    }
  }, [history]);

  // Format
  const formatXAxis = (tickItem) => {
    const date = moment(tickItem, "YYYY-MM-DD");
    const currentPeriod = periods.find((period) => period.label === activePeriod);
    return date.format(currentPeriod.dateFormat);
    switch (activePeriod) {
      case "12 month":
        return date.format("MMM YY");
      case "6 month":
        return date.format("MMM YY");
      case "3 month":
        return date.format("WW");
      case "1 month":
        return date.format("DD.MM.");
      default:
        return date.format("MMM YY");
    }
  };

  // Format ticks by current period
  const setTicks = (currentPeriod) => {
    let ticks;
    switch (currentPeriod) {
      case "3 month":
        ticks = Array.from(
          new Set(formattedData?.map(({ time }) => moment(time).startOf("week").format("YYYY-MM-DD")))
        );
        break;
      case "1 month":
        ticks = formattedData?.map(({ time }) => moment(time).format("YYYY-MM-DD"));
        break;
      default:
        ticks = Array.from(
          new Set(formattedData?.map(({ time }) => moment(time).startOf("month").format("YYYY-MM-DD")))
        );
        break;
    }
    setUniqueTicks(ticks);
    setActivePeriod(currentPeriod);
  };

  // Filter data by current period
  const showPeriodData = () => {
    const now = moment();
    const currentPeriod = periods.find((period) => period.label === activePeriod);
    return formattedData.filter((data) =>
      moment(data.time).isAfter(now.clone().subtract(currentPeriod.substract, "months"))
    );
  };

  return (
    formattedData && (
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
              onClick={() => setTicks(period.label)}
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
