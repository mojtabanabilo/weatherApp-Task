import { Box } from "@mui/material";
import { options, data } from "../../utils/options/option";
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
        backgroundColor: "#E1E9EE",
        boxShadow: "0px 2px 10px #0000001a",
        borderRadius: "24px",
        padding: "24px",
      }}
    >
      <Line data={data} options={options} />
    </Box>
  );
}

export default Chart;
