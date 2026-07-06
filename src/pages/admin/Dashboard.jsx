import React from "react";
import { FiFileText, FiGrid, FiEye, FiUsers } from "react-icons/fi";
import Ikkinchisi from "./Ikkinchisi";

function Dashboard() {
  const cards = [
    {
      id: 1,
      title: "Total Posts",
      value: "24",
      growth: "+12%",
      icon: <FiFileText size={24} />,
      bg: "bg-[#e0e7ff] text-[#4f46e5]",
    },
    {
      id: 2,
      title: "Categories",
      value: "6",
      growth: "+2",
      icon: <FiGrid size={24} />,
      bg: "bg-[#f3e8ff] text-[#9333ea]",
    },
    {
      id: 3,
      title: "Total Views",
      value: "12.5K",
      growth: "+23%",
      icon: <FiEye size={24} />,
      bg: "bg-[#ecfdf5] text-[#10b981]",
    },
    {
      id: 4,
      title: "Active Users",
      value: "1.2K",
      growth: "+8%",
      icon: <FiUsers size={24} />,
      bg: "bg-[#eff6ff] text-[#3b82f6]",
    },
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen w-full p-8 font-sans antialiased text-[#1e293b]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0f172a]">Dashboard</h1>
        <p className="text-sm text-slate-400 mt-1">Welcome back! Here's an overview of your blog.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 w-full">
        {cards.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm relative">
            <div className="flex justify-between items-start mb-4">
              <div className={`${item.bg} w-12 h-12 rounded-xl flex items-center justify-center`}>
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-[#10b981] bg-[#ecfdf5] px-2 py-1 rounded-md">
                {item.growth}
              </span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a]">{item.value}</h2>
              <p className="text-xs font-medium text-slate-400 mt-0.5">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full">
        <Ikkinchisi />
      </div>
    </div>
  );
}

export default Dashboard;