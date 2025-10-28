import { Routes, Route } from "react-router";
import NotFound from "@src/pages/NotFound";
import MainPage from "../pages/MainPage";
import SignUp from "../pages/SignUp";
import MainLayout from "../layout/main/MainLayout";
import UserLayout from "../layout/user/userLayout.jsx";
import Listoflessons from "../components/user/Listoflessons.jsx";
import SignIn from "../pages/SignIn.jsx";
import Ourcourses from "../components/main/Ourcourses.jsx";
import Profile from "../components/user/Profile.jsx";
import AdminLayout from "../layout/admin/AdminLayout.jsx";
import MainAdminPage from "../components/admin/MainAdminPage.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/courses" element={<Ourcourses />}>
          <Route path=":courseId" element={<Ourcourses />} />
        </Route>
      </Route>

      <Route path="user" element={<UserLayout />}>
        <Route index element={<Listoflessons />} />
        <Route path="lessons" element={<Listoflessons />} />
        <Route path="profile" element={<Profile />} />
      </Route>

<Route path="admin" element={<AdminLayout />}>
        <Route index element={<MainAdminPage />} />


</Route>



      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
