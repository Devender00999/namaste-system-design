import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import ProtectedRoute from "./components/ProtectedRoute";
import LanguageProvider from "./context/LanguageContext";
import Accordian from "./components/Accordian";

function App() {
   return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 30 }}>
         <LanguageProvider>
            <BrowserRouter>
               <Routes>
                  <Route element={<ProtectedRoute />}>
                     <Route path="/" element={<Body />}></Route>
                     <Route path="/about" element={<About />}></Route>
                     <Route path="/accordian" element={<Accordian />}></Route>
                  </Route>
               </Routes>
            </BrowserRouter>
         </LanguageProvider>
      </div>
   );
}

export default App;
