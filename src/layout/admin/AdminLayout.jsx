import { Outlet } from "react-router"
import Header from "../Header"
import AdminHeader from "./AdminHeader"

const AdminLayout = () => {
  return (
    <>
        <AdminHeader/>
        <Outlet/>
    </>
  )
}

export default AdminLayout