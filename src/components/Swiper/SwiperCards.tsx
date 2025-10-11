import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

// images
import img from "../../assets/images/rainCloud.png";
import img2 from "../../assets/images/sunCloudy.png";
import img3 from "../../assets/images/sunny.png";

export default function SwiperCards() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const weatherData = i18n.language === 'fa' ? [
    {
      day: "شنبه",
      id: 0,
      icon: img,
      temp: "28°C",
    },
    {
      day: "یک‌شنبه",
      id: 1,
      icon: img2,
      temp: "31°C",
    },
    {
      day: "دوشنبه",
      id: 2,
      icon: img2,
      temp: "32°C",
    },
    {
      day: "سه‌شنبه",
      id: 3,
      icon: img2,
      temp: "29°C",
    },
    {
      day: "چهار‌شنبه",
      id: 4,
      icon: img2,
      temp: "27°C",
    },
    {
      day: "پنج‌شنبه",
      id: 5,
      icon: img3,
      temp: "30°C",
    },
    {
      day: "جمعه",
      id: 6,
      icon: img3,
      temp: "34°C",
    },
    {
      day: "شنبه",
      id: 7,
      icon: img3,
      temp: "33°C",
    },
    {
      day: "شنبه",
      id: 7,
      icon: img3,
      temp: "33°C",
    },
    {
      day: "شنبه",
      id: 7,
      icon: img3,
      temp: "33°C",
    },
    {
      day: "شنبه",
      id: 7,
      icon: img3,
      temp: "33°C",
    },
  ] : [
    {
      day: "Sat",
      id: 0,
      icon: img,
      temp: "28°C",
    },
    {
      day: "Son",
      id: 1,
      icon: img2,
      temp: "31°C",
    },
    {
      day: "Tue",
      id: 2,
      icon: img2,
      temp: "32°C",
    },
    {
      day: "Wed",
      id: 3,
      icon: img2,
      temp: "29°C",
    },
    {
      day: "Fri",
      id: 4,
      icon: img2,
      temp: "27°C",
    },
    {
      day: "Thu",
      id: 5,
      icon: img3,
      temp: "30°C",
    },
    {
      day: "Mon",
      id: 6,
      icon: img3,
      temp: "34°C",
    },
    {
      day: "Son",
      id: 7,
      icon: img3,
      temp: "33°C",
    },
    {
      day: "Mon",
      id: 7,
      icon: img3,
      temp: "33°C",
    },
    {
      day: "Wed",
      id: 7,
      icon: img3,
      temp: "33°C",
    },
    {
      day: "Thu",
      id: 7,
      icon: img3,
      temp: "33°C",
    },
  ]

  return (
    <Box
      sx={{
        maxWidth: "100%",
        my: "30px",
        padding: "30px 40px",
        background: theme.palette.custom.bgComponents,
        borderRadius: "24px",
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: theme.palette.text.primary, fontWeight: 700, mb: 1 }}
      >
        {t("dashboard.swiper.title")}
      </Typography>

      <Box
        sx={{
          minWidth: "100%",
          display: "flex",
          overflowX: "auto",
          gap: 2,
          padding: "30px 0",
          scrollBehavior: "smooth",
        }}
      >
        {weatherData.map((i) => (
          <Card
            key={i.id}
            sx={{
              flex: "0 0 auto",
              width: 140,
              height: 300,
              background: theme.palette.custom.bgCards,
              borderRadius: "24px",
            }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ marginTop: "20px" }}
              >
                {i.day}
              </Typography>

              <Box
                sx={{
                  width: "60%",
                  height: "2px",
                  borderRadius: "50%",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
                  background:
                    "linear-gradient(90deg, rgba(54,54,54,0), #7E7E7E, rgba(54,54,54,0))",
                  mb: "12px",
                }}
              />

              <CardMedia
                sx={{
                  width: "80px",
                  height: "80px",
                  mt: "30px",
                }}
                component="img"
                image={i.icon}
                alt="forecast"
              />

              <Typography
                variant="h6"
                sx={{ color: "text.secondary", mt: "30px" }}
              >
                {i.temp}
              </Typography>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
