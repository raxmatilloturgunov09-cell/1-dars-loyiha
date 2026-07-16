import React from "react";

function Button({ text, variant, icon, onClick }) {
  const variants = {
    primary: "py-2.5 px-4 bg-indigo-600 text-white rounded-2xl",
    secondary:
      "flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#4346ef] to-[#9333ea] text-white font-medium text-lg rounded-2xl shadow-md hover:opacity-95 active:scale-95 transition-all cursor-pointer",
    danger:
      "px-8 py-3 bg-white text-[#0f172a] font-semibold text-lg rounded-2xl border-4 border-[#e2e8f0] shadow-sm hover:bg-slate-50 active:scale-95 transition-all",
    outline:
      "flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition-all cursor-pointer",
  };

  return (
    <button
      onClick={onClick}
      className={variants[variant]}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}

export default Button;