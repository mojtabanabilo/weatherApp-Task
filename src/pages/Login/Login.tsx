import { useActionState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import {
  Box,
  TextField,
  Typography,
  Button,
  InputLabel,
  FormControl,
  NativeSelect,
} from "@mui/material";
import { authApi } from "../../api";

// images
import Mooncloudfastwind from "../../assets/images/Mooncloudfastwind.png";
import Mooncloudmidrain from "../../assets/images/Mooncloudmidrain.png";
import Suncloudangledrain from "../../assets/images/Suncloudangledrain.png";

function Login() {
  const [state, formAction, isPending] = useActionState(authApiHandler, null);
  const navigate = useNavigate();

  async function authApiHandler(
    previousState: any,
    formData: FormData
  ): Promise<any> {
    const userData = Object.fromEntries(formData.entries());
    if (!userData.userName) return;
    try {
      const response = await authApi.post("/post", { name: userData.userName });
      console.log(response);
      navigate("/dashboard", { replace: true });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Box component="div" className={styles.loginContainer}>
      <Box component="div" className={styles.login}>
        <Box component="div" className={styles.userLogin}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6 }}>
            Login
          </Typography>
          <form action={formAction} style={{ width: "100%" }}>
            <TextField
              id="outlined-basic"
              label="Enter Your Name"
              variant="outlined"
              name="userName"
              fullWidth
              sx={{
                mb: 35,
              }}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ height: "55px", fontSize: "1.3rem", fontWeight: "500" }}
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Loading..." : "LOGIN"}
            </Button>
          </form>
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
          <option value={'en'}>English</option>
          <option value={'fa'}>فارسی</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default Login;
