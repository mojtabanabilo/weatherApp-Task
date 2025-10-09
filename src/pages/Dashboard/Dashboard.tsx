import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chart from "../../components/Chart/Chart";
import CityStatus from "../../components/CityStatus.tsx/CityStatus";
import SwiperCards from "../../components/Swiper/SwiperCards";
import { Box, Container } from "@mui/material";

function Dashboard() {
  return (
    <Box
      sx={{
        flexFlow: "1",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        paddingTop: "150px",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F3FAFE",
          justifyContent: "center",
          width: "100%",
          overflowY: "auto",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "1400px", px: 2 }}>
          <Container maxWidth={false}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <CityStatus />
              <Chart />
            </Box>
            <SwiperCards />
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Dashboard;
