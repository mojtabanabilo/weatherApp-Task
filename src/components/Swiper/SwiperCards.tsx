import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  useTheme,
} from "@mui/material";
import img from "../../assets/images/rainCloud.png";

export default function SwiperCards() {
  const slides = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    title: "Welcome",
    subtitle: "26°C",
    img,
  }));

  const theme = useTheme();

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
        2 Weeks Forecast
      </Typography>

      <Box
        sx={{
          minWidth: "100%",
          display: "flex",
          overflowX: "auto",
          gap: 2,
          padding: "30px 0",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#b0b0b0",
            borderRadius: "4px",
          },
        }}
      >
        {slides.map((i) => (
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
                {i.title}
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
                image={i.img}
                alt="forecast"
              />

              <Typography
                variant="h6"
                sx={{ color: "text.secondary", mt: "30px" }}
              >
                {i.subtitle}
              </Typography>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
