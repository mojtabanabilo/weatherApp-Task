import { Box, Typography, useTheme } from "@mui/material";
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
import { useTranslation } from "react-i18next";

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
  const { i18n, t } = useTranslation();

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        align: "start",
        // text: ,
        color: theme.palette.text.primary,
        font: { size: 18 },
        padding: { bottom: 30 },
      },
      tooltip: {
        rtl: i18n.language === "fa", // ✅ این ویژگی برای tooltip کار می‌کنه
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
        reverse: i18n.language === "fa", // ✅ محور X برعکس می‌شه
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
    labels:
      i18n.language === "en"
        ? [
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
          ]
        : [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند",
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
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
      sx={{
        width: "100%",
        maxWidth: "1000px",
        height: "250px",
        backgroundColor: theme.palette.custom?.bgComponents ?? "#E1E9EE",
        borderRadius: "24px",
        padding: "30px 33px 50px",
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h6">{t("dashboard.chart.title")}</Typography>
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
