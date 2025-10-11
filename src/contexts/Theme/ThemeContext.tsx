import { useContext, createContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

type Tmode = "light" | "dark";

type Ttheme = {
  mode: Tmode;
  setMode: Dispatch<SetStateAction<Tmode>>;
};

const ThemeContext = createContext<Ttheme | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Tmode>("light");

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#F3FAFE",
              paper: "#FFFFFF",
            },
            text: {
              primary: "#003464",
              secondary: "#000000",
            },
            custom: {
              bgComponents: "#E1E9EE",
              bgCards: "#CDD9E0",
              bgGradiant:
                "linear-gradient(90deg, #F3FAFE 0%, #CCDDDD 62%, #F3FAFE 100%)",
            },
          }
        : {
            background: {
              default: "#151D32",
              paper: "#000000",
            },
            text: {
              primary: "#F3F4F7",
              secondary: "#ffffff",
            },
            custom: {
              bgComponents: "#292F45",
              bgCards: "#3F4861",
              bgGradiant:
                "linear-gradient(90deg, #151D32 0%, #3F4861 62%, #292F45 100%)",
            },
          }),
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
