import React from "react";

const CommonButton = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        rounded-lg
        bg-gradient-to-r from-[#087f8c] to-[#075985]
        px-4 py-2
        text-sm font-medium text-white
        shadow-sm
        transition-all duration-200
        hover:opacity-90
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default CommonButton;