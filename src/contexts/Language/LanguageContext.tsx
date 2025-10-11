import { useContext, useState, createContext } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

type Tlang = "fa" | "en";
type Tlanguage = {
  language: Tlang;
  setLanguage: Dispatch<SetStateAction<Tlang>>;
};

const LanguageContext = createContext<Tlanguage | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Tlang>("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
