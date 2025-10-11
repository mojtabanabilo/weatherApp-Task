import { useEffect, useState, useTransition } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chart from "../../components/Chart/Chart";
import CityStatus from "../../components/CityStatus.tsx/CityStatus";
import SwiperCards from "../../components/Swiper/SwiperCards";
import { Box, Container, useTheme } from "@mui/material";
import { weatherApi } from "../../api";
import type { IWeatherData } from "../../types/interface";
const apiKey = "dc1abd15927030a4cd5d36c8da1f4524";

function Dashboard() {
  const [selectedCity, setSelectedCity] = useState<string>("tehran");
  const [weatherData, setWeatherdata] = useState<IWeatherData | null>(null);
  const [isPending, startTransition] = useTransition();
  const theme = useTheme();

  const getCurrentWeather = (): void => {
    try {
      startTransition(async () => {
        const response = await weatherApi.get(
          `/weather?q=${selectedCity}&appid=${apiKey}&lang=en`
        );
        setWeatherdata(response?.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCurrentWeather();
  }, [selectedCity]);

  return (
    <Box
      sx={{
        flexFlow: "1",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
      >
      <Header setSelectedCity={setSelectedCity} city={selectedCity} />
      <Box
        component="main"
        sx={{
          display: "flex",
          alignItems: "center",
          background: theme.palette.background.default,
          justifyContent: "center",
          width: "100%",
          overflowY: "auto",
          paddingTop: "300px",
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
              <CityStatus data={weatherData} pending={isPending} />
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
