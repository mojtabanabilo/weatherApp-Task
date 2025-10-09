import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
        color: "text.primary",
        textAlign: "center",
        p: 3,
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 100, color: "error.main", mb: 2 }} />
      <Typography variant="h3" fontWeight={600}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 400, mb: 4 }}>
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        sx={{ px: 4, py: 1 }}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
