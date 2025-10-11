import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { useLanguage } from "../contexts/Language/LanguageContext";

export const useMuiTheme = () => {
  const { language } = useLanguage();

  const direction = language === "fa" ? "rtl" : "ltr";

  const cacheRtl = createCache({
    key: direction === "rtl" ? "mui-rtl" : "mui-ltr",
    stylisPlugins: direction === "rtl" ? [prefixer, rtlPlugin] : [],
  });

  return { cacheRtl };
};
