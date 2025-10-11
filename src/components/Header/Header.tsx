import { useEffect, useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import {
  AppBar,
  Box,
  Avatar,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  IconButton,
  Toolbar,
  Container,
  useTheme,
} from "@mui/material";
import styles from "./Header.module.css";
import Modal from "../Modal/Modal";
import { useTranslation } from "react-i18next";

// logo
import weatherLogo from "../../assets/images/weatherLogo.png";
// icon
import setting from "../../assets/icons/settings.png";

interface HeaderProps {
  setSelectedCity: Dispatch<SetStateAction<string>>;
  city: string;
}

function Header({ setSelectedCity, city }: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node))
        setIsModalOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <Box
      component="header"
      sx={{ position: "relative" }}
      className={styles.header}
    >
      <AppBar
        sx={{
          height: "100px",
          background: theme.palette.background.default,
          boxShadow:
            theme.palette.mode === "light"
              ? "0 10px 10px #0000001a"
              : "0 10px 10px #A6A5A526",
        }}
        className={styles.appBar}
      >
        <Toolbar
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          className={styles.toolBar}
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
          >
            <Box
              component="div"
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={weatherLogo}
                sx={{ width: 70, height: 70 }}
                className={styles.avatar}
              />
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.text.primary, margin: "0 15px" }}
                className={styles.headerTitle}
              >
                {t("dashboard.header.title")}
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{ display: "flex" }}
              className={styles.options}
            >
              <Box component="div" sx={{ minWidth: 300 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    {t("dashboard.header.selectTitle")}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    label="Select Your Location"
                    sx={{ height: "40px" }}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <MenuItem value="paris">{i18n.language === 'en' ? 'Paris' : 'پاریس'}</MenuItem>
                    <MenuItem value="london">{i18n.language === 'en' ? 'London' : 'لندن'}</MenuItem>
                    <MenuItem value="tehran">{i18n.language === 'en' ? 'Tehran' : 'تهران'}</MenuItem>
                    <MenuItem value="new york">{i18n.language === 'en' ? 'New York' : 'نیویورک'}</MenuItem>
                    <MenuItem value="sydney">{i18n.language === 'en' ? 'Sydney' : 'سیدنی'}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <IconButton
                aria-label="setting"
                onClick={handleToggleModal}
                sx={{
                  border: "solid 1px #BBC1C4",
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  margin: "0 10px",
                }}
              >
                <img src={setting} alt="setting-icon" />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
        {isModalOpen && (
          <div ref={modalRef}>
            <Modal />
          </div>
        )}
      </AppBar>
    </Box>
  );
}

export default Header;
