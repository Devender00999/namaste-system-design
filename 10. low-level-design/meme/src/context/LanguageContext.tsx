import { createContext, useContext, useState, type PropsWithChildren } from "react";
import type { Language } from "../utils/translations";

type LanguageContextType = {
   language: Language;
   setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageProvider = ({ children }: PropsWithChildren) => {
   const [language, setLanguage] = useState<Language>("en");
   return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;

export const useLanguage = () => {
   const context = useContext(LanguageContext);

   if (!context) {
      throw new Error("useLanguage must be used inside LanguageProvider");
   }

   return context;
};
