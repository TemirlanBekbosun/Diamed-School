import { Routes, Route } from "react-router";
import NotFound from "@src/pages/NotFound";
import MainPage from "../pages/Mainpage";
import SignUp from "../pages/SignUp";
import MainLayout from "../layout/main/MainLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<MainPage />} />

      
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
