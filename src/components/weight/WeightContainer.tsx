import React, { useState, useCallback } from "react";
import { ChartData } from "react-chartjs-2";
import Weight from "./Weight";
import * as chartjs from "chart.js";
import dayjs from "dayjs";

const data: ChartData<chartjs.ChartData> = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31"
  ],
  datasets: [
    {
      label: "体重",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        81,
        81.5,
        82,
        83,
        82.5,
        82,
        81.5,
        81,
        82.5,
        82,
        83,
        82.5,
        82,
        83.5,
        81,
        82.5,
        83,
        84,
        83.5,
        82,
        81.5,
        81,
        81.5,
        82,
        83,
        82.5,
        82,
        81.5,
        81,
        81.5,
        82,
        83,
        82.5,
        82,
        81.5,
        82,
        82.5
      ]
    }
  ]
};

export default function WeightContainer() {
  const currentDay = dayjs();
  const [year, setYear] = useState(currentDay.format("YYYY"));
  const [month, setMonth] = useState(currentDay.format("M"));

  const incrementYear = useCallback(() => {
    setYear(prev => `${Number(prev) + 1}`);
  }, [year]);

  const decrementYear = useCallback(() => {
    setYear(prev => `${Number(prev) - 1}`);
  }, [year]);

  const incrementMonth = useCallback(() => {
    setMonth(prev => `${Number(prev) + 1}`);
  }, [month]);

  const decrementMonth = useCallback(() => {
    setMonth(prev => `${Number(prev) - 1}`);
  }, [month]);

  const _props = {
    year: Number(year),
    month: Number(month),
    data,
    incrementMonth,
    decrementMonth,
    incrementYear,
    decrementYear
  };

  return (
    <React.Fragment>
      <Weight {..._props} />
    </React.Fragment>
  );
}
