import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useTranslation } from "react-i18next";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: theme.palette.background.default,
        color: "text.primary",
        textAlign: "center",
        p: 3,
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 100, color: "error.main", mb: 2 }} />
      <Typography
        variant="h3"
        fontWeight={600}
        sx={{
          color: theme.palette.text.primary,
        }}
      >
        404
      </Typography>
      <Typography
        variant="h5"
        sx={{ mb: 2, color: theme.palette.text.primary }}
      >
        {t("notFound.title")}
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: 400, mb: 4, color: theme.palette.text.primary }}
      >
        {t("notFound.description")}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        sx={{ px: 4, py: 1 }}
      >
        {t("notFound.btnTitle")}
      </Button>
    </Box>
  );
};

export default NotFoundPage;
