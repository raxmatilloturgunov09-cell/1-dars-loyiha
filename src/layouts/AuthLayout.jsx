import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">

      <div className="flex items-center justify-center bg-white">
        <Outlet />
      </div>

      <div className="bg-[#F4F3FF] flex items-center justify-center">
        <img src="./src/assets/images/Container.svg" alt="img" />
      </div>
    </div>
  );
}

export default AuthLayout;