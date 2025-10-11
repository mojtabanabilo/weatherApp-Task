// import {
//   Box,
//   Divider,
//   ToggleButtonGroup,
//   ToggleButton,
//   Typography,
//   IconButton,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useLanguage } from "../../contexts/Language/LanguageContext";
// import type { MouseEvent } from "react";

// // icon
// import lightIcon from "../../assets/icons/light_mode.png";
// import darkIcon from "../../assets/icons/dark_mode.png";
// import logOutIcon from "../../assets/icons/logout.png";

// function Modal() {
//   const { setLanguage, language } = useLanguage();
//   const navigate = useNavigate()

//   const handleChange = (
//     _event: MouseEvent<HTMLElement>,
//     newLang: "fa" | "en" | null
//   ) => {
//     if (newLang !== null) {
//       setLanguage(newLang);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         width: "220px",
//         height: "240px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#FFFFFF",
//         borderRadius: "8px",
//         position: "absolute",
//         right: "59px",
//         top: "80px",
//         py: 2,
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "flex-start",
//         }}
//       >
//         <Typography
//           variant="button"
//           sx={{ color: "#000", textTransform: "none" }}
//         >
//           Mode
//         </Typography>
//         <ToggleButtonGroup
//           color="primary"
//           // value={mode}
//           exclusive
//           // onChange={(e, newMode) => newMode && setMode(newMode)}
//           aria-label="Platform"
//         >
//           <ToggleButton value="light">
//             <img
//               src={lightIcon}
//               alt="Light Mode"
//               style={{ width: 13, height: 13, marginRight: 8 }}
//             />
//             Light
//           </ToggleButton>

//           <ToggleButton value="dark">
//             <img
//               src={darkIcon}
//               alt="Dark Mode"
//               style={{ width: 13, height: 13, marginRight: 8 }}
//             />
//             Dark
//           </ToggleButton>
//         </ToggleButtonGroup>
//       </Box>
//       <Divider sx={{ borderColor: "#b1b1b1ff", width: "80%", mt: 2 }} />
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "flex-start",
//         }}
//       >
//         <Typography
//           variant="button"
//           sx={{ color: "#000", mt: 2, textTransform: "none" }}
//         >
//           Language
//         </Typography>
//         <ToggleButtonGroup
//           color="primary"
//           value={language}
//           exclusive
//           onChange={handleChange}
//           aria-label="Platform"
//         >
//           <ToggleButton value="en" sx={{ width: "86px", height: "48px" }}>
//             En
//           </ToggleButton>
//           <ToggleButton value="fa" sx={{ width: "86px", height: "48px" }}>
//             Fa
//           </ToggleButton>
//         </ToggleButtonGroup>
//       </Box>

//       <Divider sx={{ borderColor: "#b1b1b1ff", width: "80%", mt: 2 }} />

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignSelf: "flex-start",
//           mt: 1,
//         }}
//       >
//         <IconButton
//           aria-label="logout"
//           onClick={() => navigate("/login")}
//           sx={{
//             border: "none",
//             borderRadius: "8px",
//             color: "#000",
//             mx: "17px",
//             gap: 1,
//             "&:hover": {
//               backgroundColor: "transparent",
//             },
//           }}
//         >
//           <img src={logOutIcon} alt="setting-icon" />
//           <Typography
//             variant="button"
//             sx={{ color: "#000", textTransform: "none" }}
//           >
//             Exit
//           </Typography>
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }

// export default Modal;
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

// icon
import lightIcon from "../../assets/icons/light_mode.png";
import darkIcon from "../../assets/icons/dark_mode.png";
import logOutIcon from "../../assets/icons/logout.png";

function Modal() {
  const { setLanguage, language } = useLanguage();
  const { mode, setMode } = useTheme();
  const muiTheme = useMuiTheme();
  const navigate = useNavigate();

  const handleLangChange = (
    _event: MouseEvent<HTMLElement>,
    newLang: "fa" | "en" | null
  ) => {
    if (newLang) setLanguage(newLang);
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
      {/* Mode Switch */}
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
          Mode
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
              style={{ width: 13, height: 13, marginRight: 8 }}
            />
            Light
          </ToggleButton>

          <ToggleButton value="dark">
            <img
              src={darkIcon}
              alt="Dark Mode"
              style={{ width: 13, height: 13, marginRight: 8 }}
            />
            Dark
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Divider sx={{ borderColor: "#b1b1b1ff", width: "80%", mt: 2 }} />

      {/* Language Switch */}
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
          Language
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

      {/* Logout */}
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
            Exit
          </Typography>
        </IconButton>
      </Box>
    </Box>
  );
}

export default Modal;
