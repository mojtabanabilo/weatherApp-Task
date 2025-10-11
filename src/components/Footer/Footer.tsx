import { Box, Typography, useTheme, Container } from "@mui/material";
import styles from "./Footer.module.css";
// image
import nadinSoftLogo from "../../assets/images/nadinSoftLogo.png";
// icon
import mail from "../../assets/icons/mail.png";
import calender from "../../assets/icons/calendar_month.png";
import mail2 from "../../assets/icons/mail2.png";
import calender2 from "../../assets/icons/calendar_month2.png";

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: "100vw",
        height: "130px",
        maxHeight: "160px",
        background: theme.palette.custom.bgGradiant,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={styles.footer}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "2300px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //   px: "200px",
          height: "100%",
        }}
        className={styles.container}
      >
        {/* --- Left side --- */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          className={styles.rules}
        >
          <img
            src={nadinSoftLogo}
            alt="nadin soft-logo"
            width="70"
            height="70"
            className={styles.logo}
          />
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.primary,
              mx: "10px",
              fontSize: "1rem",
            }}
          >
            All rights of this site are reserved for Nadin Sadr Aria Engineering
            Company.
          </Typography>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "center" }}
          className={styles.contact}
        >
          <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
            <img
              src={theme.palette.mode === "light" ? mail : mail2}
              alt="mail-icon"
              width="24px"
              height="24px"
            />
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                mx: "10px",
                fontSize: "1rem",
              }}
            >
              contact us : info@nadin.ir
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={theme.palette.mode === "light" ? calender : calender2}
              alt="calender-icon"
              width="24px"
              height="24px"
            />
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                mx: "10px",
                fontSize: "1rem",
              }}
            >
              12:25 . Monday 23 December 2023
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
