import { Box, Typography } from "@mui/material";

// icon
import location from "../../assets/icons/location.png";
// image
import storm from "../../assets/images/storm.png";

function CityStatus() {
  return (
    <Box
      component="div"
      sx={{
        maxWidth: '700px',
        minWidth: '450px',
        height: '250px',
        background: "#E1E9EE",
        borderRadius: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 3,
      }}
    >
      <Box component="div">
        <Box
          component="div"
          sx={{
            background: "#CDD9E0",
            borderRadius: "50px",
            width: "fit-content",
            height: "50px",
            display: "flex",
            justifyContent: "flex-start",
            px: 2,
            alignItems: "center",
          }}
        >
          <img src={location} alt="location-icon" width="18px" height="28px" />
          <Typography variant="h6" sx={{ mx: 2 }}>
            San fransicko
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h3" sx={{ color: "#003464" }}>
            Monday
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#003464" }}>
            24 Dec, 2023 11:45 AM
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h3" sx={{ color: "#003464" }}>
            26°C
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#003464" }}>
            High: 27 Low: 10
          </Typography>
        </Box>
      </Box>
      <Box component="div">
        <img src={storm} alt="weather-status-image" width="130" height="130" />
        <Box sx={{ my: 2 }}>
          <Typography variant="h3" sx={{ color: "#003464" }}>
            stormy
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#003464" }}>
            Feels Like 26
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CityStatus;
