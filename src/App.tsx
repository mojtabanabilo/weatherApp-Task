import { Suspense } from "react";
import { Box, useTheme } from "@mui/system";
import Loading from "./components/Loading/Loading";
import routes from "./router";
import { useRoutes } from "react-router-dom";
import {
  LanguageProvider,
  useLanguage,
} from "./contexts/Language/LanguageContext";
import { ThemeProvider } from "./contexts/Theme/ThemeContext";
import { CacheProvider } from "@emotion/react";
import { useMuiTheme } from "./utils/theme";
import "./App.css";

function AppContent() {
  const routing = useRoutes(routes);
  const { language } = useLanguage();
  const theme = useTheme();

  return (
    <Box
      className="app-container"
      dir={language === "en" ? "ltr" : "rtl"}
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Suspense fallback={<Loading />}>{routing}</Suspense>
    </Box>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppWithMuiTheme />
    </LanguageProvider>
  );
}

function AppWithMuiTheme() {
  const { cacheRtl } = useMuiTheme();

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
