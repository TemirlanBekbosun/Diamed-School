import { Routes, Route } from "react-router";
import NotFound from "@src/pages/NotFound";
import MainPage from "../pages/Mainpage.jsx";
import SignUp from "../pages/SignUp.jsx";
import MainLayout from "../layout/main/MainLayout.jsx";
import UserLayout from "../layout/user/userLayout.jsx";
import Listoflessons from "../components/user/Listoflessons.jsx";
import SignIn from "../pages/SignIn.jsx";
import Ourcourses from "../components/main/Ourcourses.jsx";
import Profile from "../components/user/Profile.jsx";
import AdminLayout from "../layout/admin/AdminLayout.jsx";
import MainAdminPage from "../components/admin/MainAdminPage.jsx";
import Teacher from "../components/main/minipage/Teachers.jsx";
import Reviews from "../components/main/minipage/Reviews.jsx";
import Footer from "../layout/Footer.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute
            roles={["GUEST", "USER"]}
            Component={<MainLayout />}
            fallbackPath={"/admin"}
          />
        }
      >
        <Route index element={<MainPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/courses" element={<Ourcourses />}>
          <Route path=":courseId" element={<Ourcourses />} />
        </Route>
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/reviews" element={<Reviews />} />

        <Route path="/contacts" element={<Footer />} />
        <Route path="/about" element={<MainPage />} />
      </Route>

      <Route
        path="user"
        element={
          <PrivateRoute
            roles={["USER"]}
            Component={<UserLayout />}
            fallbackPath={"/"}
          />
        }
      >
        <Route index element={<Listoflessons />} />
        <Route path="lessons" element={<Listoflessons />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route
        path="admin"
        element={
          <PrivateRoute
            roles={["ADMIN"]}
            Component={<AdminLayout />}
            fallbackPath={"/"}
          />
        }
      >
        <Route index element={<MainAdminPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
