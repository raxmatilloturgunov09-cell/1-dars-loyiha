import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Container logo 0.svg";
import Button from "./Button";

import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";

function AdminBar() {
  const navigate = useNavigate();

  const menu = [
    {
      title: "Dashboard",
      path: "/admin",
      icon: <MdOutlineDashboard />,
    },
    {
      title: "Update Post",
      path: "/admin/update",
      icon: <FaRegEdit />,
    },
    {
      title: "Create Post",
      path: "/admin/createposts",
      icon: <IoCreateOutline />,
    },
  ];

  return (
    <aside className="h-screen w-64 flex flex-col justify-between border-r border-gray-300 bg-white">
      <div>
        <div className="p-6">
          <img src={Logo} alt="Logo" />
          <h5 className="text-gray-400 mt-2">Admin Panel</h5>
        </div>

        <div className="border-t border-b border-gray-300 p-4 flex flex-col gap-3">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300
                ${
                  location.pathname === item.path
                    ? "bg-[#4f46e5] text-white"
                    : "text-gray-700 hover:bg-[#4f46e5]/10 hover:text-[#4f46e5]"
                }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="p-4">
        <Button
          text="Log Out"
          variant="outline"
          icon={<FaArrowLeft />}
          onClick={() => navigate("/")}
        />
      </div>
    </aside>
  );
}

export default AdminBar;
