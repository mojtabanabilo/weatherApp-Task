import { Box } from "@mui/material";
import { options, data } from "../../utils/constans/option";
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
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1000px",
        height: "250px",
        backgroundColor: "#E1E9EE",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <Line
        data={data}
        options={{
          ...options,
          maintainAspectRatio: false, // 👈 خیلی مهم برای کنترل ارتفاع دستی
        }}
      />
    </Box>
  );
}

export default Chart;
