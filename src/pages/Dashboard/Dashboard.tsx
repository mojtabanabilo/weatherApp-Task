import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Box from "@mui/material/Box";

function Dashboard() {
  return (
    // <Box component="main" sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    // }}>
    //     <Header />
    //     <Footer />
    // </Box>
    <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "100vw", minHeight: "100vh" }}>
      <Header />
      {/* <Box component="main" sx={{ flexGrow: 1 }}>
        <Login />
      </Box> */}
      <Footer />
    </Box>
  );
}

export default Dashboard;
