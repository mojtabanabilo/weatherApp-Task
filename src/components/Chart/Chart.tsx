import { Box, useTheme } from "@mui/material";
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
import type { ChartData, ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const theme = useTheme();

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        align: "start",
        text: "Average Monthly Temperature",
        color: theme.palette.text.primary,
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
        ticks: { color: theme.palette.text.primary },
        grid: { display: false },
      },
      y: {
        min: 10,
        max: 40,
        ticks: {
          stepSize: 10,
          color: theme.palette.text.primary,
          callback: function (value: any) {
            return `${value}°C`;
          },
        },
        grid: { color: theme.palette.divider },
      },
    },
  };

  const data: ChartData<"line"> = {
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
        data: [20, 40, 30, 10, 15, 25, 8, 38, 26, 36, 33, 11, 2],
        backgroundColor: `${theme.palette.primary.main}33`,
        tension: 0,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(
            chartArea.left,
            0,
            chartArea.right,
            0
          );
          gradient.addColorStop(0, theme.palette.primary.main);
          gradient.addColorStop(1, theme.palette.secondary.main);
          return gradient;
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1000px",
        height: "250px",
        backgroundColor: theme.palette.custom?.bgComponents ?? "#E1E9EE",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <Line
        data={data}
        options={{
          ...options,
          maintainAspectRatio: false,
        }}
      />
    </Box>
  );
}

export default Chart;
