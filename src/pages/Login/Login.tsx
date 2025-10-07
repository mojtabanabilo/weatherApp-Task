import styles from "./Login.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

// images
import Mooncloudfastwind from "../../assets/images/Mooncloudfastwind.png";
import Mooncloudmidrain from "../../assets/images/Mooncloudmidrain.png";
import Suncloudangledrain from "../../assets/images/Suncloudangledrain.png";

function Login() {
  return (
    <Box className={styles.loginContainer}>
      <Box className={styles.login}>
        <Box className={styles.userLogin}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6 }}>
            Login
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter Your Name"
            variant="outlined"
            fullWidth
            sx={{
              mb: 35,
            }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ height: "55px", fontSize: "1.3rem", fontWeight: "500" }}
          >
            LOGIN
          </Button>
        </Box>
        <Box className={styles.pic}>
          <img src={Mooncloudmidrain} alt="image" />
          <img src={Suncloudangledrain} alt="image" />
          <img src={Mooncloudfastwind} alt="image" />
        </Box>
      </Box>
      <FormControl
        sx={{
          width: "300px",
          margin: "20px 0",
        }}
      >
        <InputLabel
          variant="standard"
          color="primary"
          htmlFor="uncontrolled-native"
        >
          Language
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "language",
            id: "uncontrolled-native",
          }}
        >
          <option value={10}>English</option>
          <option value={20}>فارسی</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default Login;
