import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

function Chart() {
  // ثبت ماژول‌ها برای فعال شدن در chart.js
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Temperature (°C)",
        data: ["20", "40", "30", "10", "15", "25", "8", "38", "26", "36", "33", "11", "2"],
        backgroundColor: "#007bff33",
        tension: 0,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 0,
         borderColor: (context:any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
          gradient.addColorStop(0, "#00BFFF");
          gradient.addColorStop(1, "#8A2BE2");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        align: "start" as const,
        text: "Average Monthly Temperature",
        color: "#1B2767",
        font: { size: 18 },
        padding: { bottom: 30 },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.parsed.y}°C`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#003464" },
        grid: { display: false },
      },
      y: {
        min: 10,
        max: 40,
        ticks: {
          stepSize: 10,
          color: "#003464",
          callback: function (value: any) {
            return `${value}°C`;
          },
        },
        grid: { color: "#0000001a" },
      },
    },
  };
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1000px",
        backgroundColor: "#E1E9EE",
        boxShadow: "0px 2px 10px #0000001a",
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      <Line data={data} options={options} />
    </Box>
  );
}

export default Chart;
