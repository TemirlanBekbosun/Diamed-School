import { Routes, Route } from "react-router";
import NotFound from "@src/pages/NotFound";
import MainPage from "../pages/MainPage";
import SignUp from "../pages/SignUp";
import MainLayout from "../layout/main/MainLayout";
import SignIn from "../pages/SignIn";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<MainPage />} />

      
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
