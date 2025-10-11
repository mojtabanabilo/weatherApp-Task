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
  useTheme,
} from "@mui/material";
import { authApi } from "../../api";

// images
import Mooncloudfastwind from "../../assets/images/Mooncloudfastwind.png";
import Mooncloudmidrain from "../../assets/images/Mooncloudmidrain.png";
import Suncloudangledrain from "../../assets/images/Suncloudangledrain.png";

function Login() {
  const [state, formAction, isPending] = useActionState(authApiHandler, null);
  const navigate = useNavigate();
  const theme = useTheme();

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
    <Box
      component="div"
      className={styles.loginContainer}
      sx={{
        width: "90%",
        maxWidth: "1500px",
        height: "1000px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="div"
        className={styles.login}
        sx={{
          width: "100%",
          height: "100%",
          background: theme.palette.mode === "light" ? "#FFFFFF" : "#292F45",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "12px",
          boxShadow: "-5px 14px 15px #00000028",
          margin: "60px 0",
        }}
      >
        <Box
          component="div"
          className={styles.userLogin}
          sx={{
            width: "50%",
            height: "100%",
            padding: "0 100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "space-between",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 6,
              color: theme.palette.mode === "light" ? "#000000" : "#F3F4F7",
            }}
          >
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
              sx={{
                height: "55px",
                fontSize: "1.3rem",
                fontWeight: "500",
                color: "#FFFFFF",
              }}
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Loading..." : "LOGIN"}
            </Button>
          </form>
        </Box>
        <Box
          className={styles.pic}
          sx={{
            width: "50%",
            height: "100%",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
            padding: "0 100px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: theme.palette.mode === 'light' ? "#d3e1e7" : "#3E4660",
          }}
        >
          <img
            src={Mooncloudmidrain}
            style={{
              filter:
                theme.palette.mode === "light"
                  ? "drop-shadow(0 40px 40px #00000086)"
                  : "drop-shadow(0 40px 40px #12064366)",
            }}
            alt="image"
          />
          <img
            src={Suncloudangledrain}
            style={{
              filter:
                theme.palette.mode === "light"
                  ? "drop-shadow(0 40px 40px #00000086)"
                  : "drop-shadow(0 40px 40px #12064366)",
            }}
            alt="image"
          />
          <img
            src={Mooncloudfastwind}
            style={{
              filter:
                theme.palette.mode === "light"
                  ? "drop-shadow(0 40px 40px #00000086)"
                  : "drop-shadow(0 40px 40px #12064366)",
            }}
            alt="image"
          />
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
          <option value={"en"}>English</option>
          <option value={"fa"}>فارسی</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default Login;
