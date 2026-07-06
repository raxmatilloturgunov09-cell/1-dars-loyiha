import { Outlet } from "react-router-dom";
import AdminBar from "../components/AdminBar";

function Admin() {
  return (
    <div className="flex">
      <AdminBar />
      <Outlet />
    </div>
  );
}

export default Admin;