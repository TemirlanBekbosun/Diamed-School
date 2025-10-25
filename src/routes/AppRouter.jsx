import { Routes, Route } from "react-router";
import NotFound from "@src/pages/NotFound";
import MainPage from "../pages/Mainpage";
import SignUp from "../pages/SignUp";
import MainLayout from "../layout/main/MainLayout";
import UserLayout from "../layout/user/userLayout.jsx";
import Listoflessons from "../components/user/Listoflessons.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      <Route path="user" element={<UserLayout />}>
        <Route index element={<Listoflessons />} />{" "}
        <Route path="lessons" element={<Listoflessons />} />{" "}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
