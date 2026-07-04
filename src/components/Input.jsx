import React, { forwardRef } from "react";

const Input = forwardRef(({ type, label, placeholder }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="w-full h-11 px-4 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
      />
    </div>
  );
});

export default Input;