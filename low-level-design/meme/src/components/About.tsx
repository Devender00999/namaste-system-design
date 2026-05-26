import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
const About = () => {
   const { language } = useLanguage();
   return (
      <div>
         <h3>{translations[language].about_us}</h3>
         <p>{translations[language].description}</p>
      </div>
   );
};

export default About;
