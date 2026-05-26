import { Link, Outlet } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations, type Language } from "../utils/translations";

const Main = () => {
   const { language, setLanguage } = useLanguage();

   return (
      <div>
         <nav style={{ display: "flex", height: 48, marginBottom: 5, gap: 20, position: "sticky", background: "white", alignItems: "center" }}>
            <Link to="/">{translations[language].navbar.home}</Link>
            <Link to="/about">{translations[language].navbar.about}</Link>
            <select value={language} onChange={(e) => setLanguage(e.target.value as Language)}>
               <option value="en">English</option>
               <option value="hi">Hindi</option>
               <option value="ka">Kannada</option>
               <option value="tm">Tamil</option>
            </select>
         </nav>
         <Outlet></Outlet>
      </div>
   );
};

export default Main;
