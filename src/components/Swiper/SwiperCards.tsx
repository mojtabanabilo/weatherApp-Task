// import {
//   Box,
//   Typography,
//   Card,
//   CardMedia,
//   CardActionArea,
// } from "@mui/material";
// import img from "../../assets/images/Rain cloud.png";

// export default function SwiperCards() {
//   const slides = [
//     {
//       id: 1,
//       title: "Welcome",
//       subtitle: "26 oC",
//       img,
//     },
//     {
//       id: 1,
//       title: "Welcome",
//       subtitle: "26 oC",
//       img,
//     },
//     {
//       id: 1,
//       title: "Welcome",
//       subtitle: "26 oC",
//       img,
//     },
//     {
//       id: 1,
//       title: "Welcome",
//       subtitle: "26 oC",
//       img,
//     },
//     {
//       id: 1,
//       title: "Welcome",
//       subtitle: "26 oC",
//       img,
//     },
//     {
//       id: 1,
//       title: "Welcome",
//       subtitle: "26 oC",
//       img,
//     },
//     {
//       id: 1,
//       title: "Welcome",
//       subtitle: "26 oC",
//       img,
//     },
//     {
//       id: 1,
//       title: "Welcome",
//       subtitle: "26 oC",
//       img,
//     },
//     {
//       id: 1,
//       title: "Welcome",
//       subtitle: "26 oC",
//       img,
//     },
//     {
//       id: 1,
//       title: "Welcome",
//       subtitle: "26 oC",
//       img,
//     },
//   ];

//   return (
//     <Box sx={{ maxWidth: "2300px", width: "100%" }}>
//       <Typography variant="h4" sx={{ color: "#003464", fontWeight: 700 }}>
//         2 weeks Forecast
//       </Typography>
//       <Box
//         component="div"
//         sx={{
//           // minWidth: '100%',
//           display: "flex",
//           justifyContent: "flex-start",
//           alignItems: "center",
//           background: "red",
//           padding: '10px 15px',
//           gap: "20px",
//           overflowX: "scroll"
//         }}
//       >
//         {slides.map((i) => (
//           <Card
//             sx={{
//               maxWidth: "290px",
//               width: "140px",
//               height: "300px",
//               background: "#CDD9E0",
//               borderRadius: "24px",
//             }}
//           >
//             <CardActionArea
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "flex-start",
//                 alignItems: "center",
//               }}
//             >
//               <Typography
//                 gutterBottom
//                 variant="h5"
//                 component="div"
//                 sx={{ marginTop: "20px" }}
//               >
//                 {i.title}
//               </Typography>
//               <Box
//                 sx={{
//                   width: "60%",
//                   height: "2px",
//                   borderRadius: "50%",
//                   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
//                   background:
//                     "linear-gradient(90deg, rgba(54,54,54,0), #7E7E7E, rgba(54,54,54,0))",
//                   mb: "12px",
//                 }}
//               />
//               <CardMedia
//                 sx={{
//                   width: "80px",
//                   height: "80px",
//                   marginTop: "40px",
//                 }}
//                 component="img"
//                 image={i.img}
//                 alt="green iguana"
//               />
//               <Typography
//                 variant="h6"
//                 sx={{ color: "text.secondary", marginTop: "40px" }}
//               >
//                 26 Oc
//               </Typography>
//             </CardActionArea>
//           </Card>
//         ))}
//       </Box>
//     </Box>
//   );
// }
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import img from "../../assets/images/Rain cloud.png";

export default function SwiperCards() {
  const slides = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    title: "Welcome",
    subtitle: "26°C",
    img,
  }));

  return (
    <Box
      sx={{
        maxWidth: "100%",
        my:"30px",
        padding: "30px 40px",
        background: "#E1E9EE",
        borderRadius: "24px",
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: "#003464", fontWeight: 700, mb: 1 }}
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
              background: "#CDD9E0",
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
