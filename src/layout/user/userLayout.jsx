import { Outlet } from "react-router";
import UserHeaders from "./userHeaders.jsx";

const UserLayout = () => (
  <>
    <UserHeaders />

    <Outlet />
  </>
);

export default UserLayout;
