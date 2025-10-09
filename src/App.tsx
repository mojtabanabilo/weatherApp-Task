import { lazy, Suspense } from "react";
import { Box } from "@mui/system";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import "./App.css";

// lazy components
const Login = lazy(() => import("./pages/Login/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <Box className="app-container">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default App;
