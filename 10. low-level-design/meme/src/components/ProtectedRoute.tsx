import { Navigate } from "react-router-dom";
import Main from "./Main";

const ProtectedRoute = () => {
   const isUserAuthenticated = true;
   if (!isUserAuthenticated) return <Navigate to={"/login"} />;
   return <Main />;
};

export default ProtectedRoute;
