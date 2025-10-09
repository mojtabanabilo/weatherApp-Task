import { lazy, Suspense } from "react";
import { Box } from "@mui/system";
import Loading from "./components/Loading/Loading";
import routes from "./router";
import { useRoutes } from "react-router-dom";
import "./App.css";

function App() {
  const routing = useRoutes(routes);
  return (
    <Box className="app-container">
      <Suspense fallback={<Loading />}>{routing}</Suspense>
    </Box>
  );
}

export default App;
