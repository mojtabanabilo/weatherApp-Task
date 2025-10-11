import { Box, Typography, useTheme, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
          height: "100%",
        }}
        className={styles.container}
      >
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
            {t("dashboard.footer.rules")}
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
              {t("dashboard.footer.contact")}
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
              {t("dashboard.footer.date")}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
