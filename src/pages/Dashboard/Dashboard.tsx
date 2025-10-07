import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chart from "../../components/Chart/Chart";
import { Box, Container } from "@mui/material";

function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F3FAFE",
        }}
      >
        <Container>
          <Box component="section">
            <Chart />
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Dashboard;
