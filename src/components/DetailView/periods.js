import moment from "moment";

const periods = [
  {
    label: "1 month",
    substract: 1,
    dateFormat: "DD.MM.",
    getTicks: (data) => Array.from(new Set(data.map(({ time }) => moment(time).startOf("day").format("YYYY-MM-DD")))),
  },
  {
    label: "3 month",
    substract: 3,
    dateFormat: "[CW] WW",
    getTicks: (data) => Array.from(new Set(data.map(({ time }) => moment(time).startOf("week").format("YYYY-MM-DD")))),
  },
  {
    label: "6 month",
    substract: 6,
    dateFormat: "MMM YY",
    getTicks: (data) => Array.from(new Set(data.map(({ time }) => moment(time).startOf("month").format("YYYY-MM-DD")))),
  },
  {
    label: "12 month",
    substract: 12,
    dateFormat: "MMM YY",
    getTicks: (data) => Array.from(new Set(data.map(({ time }) => moment(time).startOf("month").format("YYYY-MM-DD")))),
  },
];

export default periods;
