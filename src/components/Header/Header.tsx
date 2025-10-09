import { useEffect, useRef, useState } from "react";
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
} from "@mui/material";
import styles from "./Header.module.css";
import Modal from "../Modal/Modal";

// logo
import weatherLogo from "../../assets/images/weatherLogo.png";
// icon
import setting from "../../assets/icons/settings.png";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(isModalOpen);
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
          background: "#F3FAFE",
          boxShadow: "0 10px 10px #0000001a",
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
                sx={{ color: "#003464", margin: "0 15px" }}
                className={styles.headerTitle}
              >
                Weather Dashboard
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
                    Select Your Location
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="0"
                    label="Select Your Location"
                    sx={{ height: "40px" }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
