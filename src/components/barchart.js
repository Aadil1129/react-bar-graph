import React from "react";
import { Bar } from "react-chartjs-2";

import { Chart as ChartJS, BarElement, BarController, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, BarController, CategoryScale, LinearScale);

const options = {
  borderRadius: 2,
  maxBarThickness: 50,
  responsive: true,
  maintainAspectRatio: false,
  borderWidth: 1,
};

const BarChart = ({ data }) => {
  return <Bar height={200} data={data} options={options} />;
};

export default React.memo(BarChart);
