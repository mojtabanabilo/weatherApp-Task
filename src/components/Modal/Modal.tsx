import {
  Box,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  IconButton,
  useTheme as useMuiTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/Language/LanguageContext";
import { useTheme } from "../../contexts/Theme/ThemeContext";
import type { MouseEvent } from "react";
import { useTranslation } from "react-i18next";

// icon
import lightIcon from "../../assets/icons/light_mode.png";
import darkIcon from "../../assets/icons/dark_mode.png";
import logOutIcon from "../../assets/icons/logout.png";

function Modal() {
  const { setLanguage, language } = useLanguage();
  const { mode, setMode } = useTheme();
  const muiTheme = useMuiTheme();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const handleLangChange = (
    _event: MouseEvent<HTMLElement>,
    newLang: "fa" | "en" | null
  ) => {
    if (newLang) setLanguage(newLang);
    i18n.changeLanguage(newLang as "fa" | "en");
  };

  const handleModeChange = (
    _event: MouseEvent<HTMLElement>,
    newMode: "light" | "dark" | null
  ) => {
    if (newMode) setMode(newMode);
  };

  return (
    <Box
      sx={{
        width: "220px",
        height: "240px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: muiTheme.palette.custom.bgComponents,
        borderRadius: "8px",
        position: "absolute",
        right: "59px",
        top: "80px",
        py: 2,
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="button"
          sx={{
            color: muiTheme.palette.text.primary,
            textTransform: "none",
          }}
        >
          {t("dashboard.modal.mode")}
        </Typography>

        <ToggleButtonGroup
          color="primary"
          value={mode}
          exclusive
          onChange={handleModeChange}
          aria-label="Theme Mode"
        >
          <ToggleButton value="light">
            <img
              src={lightIcon}
              alt="Light Mode"
              style={{ width: 13, height: 13, margin: "0 5px" }}
            />
            {t("dashboard.modal.light")}
          </ToggleButton>

          <ToggleButton value="dark">
            <img
              src={darkIcon}
              alt="Dark Mode"
              style={{ width: 13, height: 13, margin: "0 5px" }}
            />
            {t("dashboard.modal.dark")}
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Divider sx={{ borderColor: "#b1b1b1ff", width: "80%", mt: 2 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="button"
          sx={{
            color: muiTheme.palette.text.primary,
            mt: 2,
            textTransform: "none",
          }}
        >
          {t("dashboard.modal.language")}
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={language}
          exclusive
          onChange={handleLangChange}
          aria-label="Platform"
        >
          <ToggleButton value="en" sx={{ width: "86px", height: "48px" }}>
            En
          </ToggleButton>
          <ToggleButton value="fa" sx={{ width: "86px", height: "48px" }}>
            Fa
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Divider sx={{ borderColor: "#b1b1b1ff", width: "80%", mt: 2 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "flex-start",
          mt: 1,
        }}
      >
        <IconButton
          aria-label="logout"
          onClick={() => navigate("/login")}
          sx={{
            border: "none",
            borderRadius: "8px",
            color: muiTheme.palette.text.primary,
            mx: "17px",
            gap: 1,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <img src={logOutIcon} alt="setting-icon" />
          <Typography
            variant="button"
            sx={{
              color: muiTheme.palette.text.primary,
              textTransform: "none",
            }}
          >
            {t("dashboard.modal.exit")}
          </Typography>
        </IconButton>
      </Box>
    </Box>
  );
}

export default Modal;
