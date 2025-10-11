import { Box, Typography, useTheme } from "@mui/material";
import type { IWeatherData } from "../../types/interface";
import { useTranslation } from "react-i18next";

// icons & images
import location from "../../assets/icons/location.png";
import storm from "../../assets/images/storm.png";
import clear from "../../assets/images/sunny.png";
import clouds from "../../assets/images/sunCloudy.png";
import rain from "../../assets/images/rainCloud.png";
import spinner from "../../assets/gif/spinner.gif";

interface CityStatusProps {
  data: IWeatherData | null;
  pending: boolean;
}

const weatherIcons: Record<string, string> = {
  Clear: clear,
  Clouds: clouds,
  Rain: rain,
  Thunderstorm: storm,
};

function CityStatus({ data, pending }: CityStatusProps) {
  const theme = useTheme();
  const { t } = useTranslation();

  const iconCode = data?.weather?.[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const weatherMain = data?.weather?.[0]?.main;
  const iconSrc = weatherIcons[weatherMain || ""] ?? iconUrl;

  const formatTemperature = (temp?: number | null): string => {
    if (temp == null) return "—";
    return `${(temp - 273.15).toFixed(1)}°C`;
  };

  return (
    <Box
      sx={{
        maxWidth: "700px",
        minWidth: "450px",
        height: "280px",
        background: theme.palette.custom.bgComponents,
        borderRadius: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 3,
        color: theme.palette.text.primary,
      }}
    >
      <Box>
        <Box
          sx={{
            background: "#CDD9E0",
            borderRadius: "50px",
            width: "fit-content",
            height: "50px",
            display: "flex",
            alignItems: "center",
            px: 2,
          }}
        >
          <img src={location} alt="location-icon" width="18" height="28" />
          <Typography variant="h6" sx={{ mx: 2, color: '#3D4852' }}>
            {data?.name || "—"}
          </Typography>
        </Box>

        <Box sx={{ my: 2 }}>
          <Typography variant="h3">{t('dashboard.cityStatus.day')}</Typography>
          <Typography variant="subtitle2">{t('dashboard.cityStatus.date')}</Typography>
        </Box>

        <Box sx={{ my: 2 }}>
          <Typography variant="h3">
            {formatTemperature(data?.main?.temp)}
          </Typography>
          <Typography variant="subtitle2">
            {t('dashboard.cityStatus.high')}: {formatTemperature(data?.main?.temp_max)} | {t('dashboard.cityStatus.low')}:{" "}
            {formatTemperature(data?.main?.temp_min)}
          </Typography>
        </Box>
      </Box>

      <Box>
        {pending ? (
          <img src={spinner} alt="loading" width="130" height="130" />
        ) : (
          <img
            src={iconSrc}
            alt="weather-status-image"
            width="150"
            height="130"
          />
        )}

        <Box sx={{ my: 2 }}>
          <Typography variant="h4">
            {data?.weather?.[0]?.description || "—"}
          </Typography>
          <Typography variant="subtitle2">
            {t('dashboard.cityStatus.feelLike')} {formatTemperature(data?.main?.feels_like)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CityStatus;
