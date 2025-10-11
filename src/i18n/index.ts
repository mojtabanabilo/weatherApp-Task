import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        login: {
          title: "Login",
          placeholder: "Enter Your Name",
          btnTitle: "LOGIN",
          selectTitle: "Language",
          pending: "Loading...",
        },
        dashboard: {
          header: {
            title: "Weather Dashboard",
            selectTitle: "Search Your Location",
          },
          modal: {
            mode: "Mode",
            dark: "Dark",
            light: "Light",
            language: "Language",
            exit: "Exit",
          },
          cityStatus: {
            location: "",
            day: "Monday",
            date: "24 Dec, 2023 11:45 AM",
            low: "Low",
            high: "High",
            feelLike: "Feels like",
          },
          chart: {
            title: "Average Monthly Temprature",
          },
          swiper: {
            title: "2 weeks Forecast",
          },
          footer: {
            rules:
              "All rights of this site are reserved for Nadin Sadr Aria Engineering Company",
            contact: "contact us : info@nadin.ir",
            date: "12:25 . Monday 23 December 2023",
          },
        },
        notFound: {
          title: "Page Not Found",
          description:
            "Sorry, the page you’re looking for doesn’t exist or has been moved",
          btnTitle: "GO HOME",
        },
      },
    },
    fa: {
      translation: {
        login: {
          title: "ورود",
          placeholder: "نام خود را وارد کنید",
          btnTitle: "ورود",
          selectTitle: "زبان",
          pending: "در حال ارسال ...",
        },
        dashboard: {
          header: {
            title: "داشبورد آب و هوا",
            selectTitle: "مکان مورد نظر را جستجو کنید",
          },
          modal: {
            mode: "حالت",
            dark: "تیره",
            light: "روشن",
            language: "زبان",
            exit: "خروج",
          },
          cityStatus: {
            location: "",
            day: "دوشنبه",
            date: "11:45 ظهر شنبه 2 دی, 1402",
            low: "کمینه",
            high: "بیشینه",
            feelLike: "درجه احساس می شود",
          },
          chart: {
            title: "میانگین دمای ماهانه",
          },
          swiper: {
            title: "پیش بینی 2 هفته",
          },
          footer: {
            rules:
              "همه حقوق این سایت برای شرکت مهندسی نادین صدر آریا محفوظ است",
            contact: "تماس با ما : info@nadin.ir",
            date: "12.25 شنبه 2 دی 1402",
          },
        },
        notFound: {
          title: "صفحه پیدا نشد",
          description:
            "متأسفیم، صفحه‌ای که به‌دنبال آن هستید وجود ندارد یا منتقل شده است",
          btnTitle: "بازگشت",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
