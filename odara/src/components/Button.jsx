import React from "react";

const buttonStyles = {
  primary: "bg-purple-400 text-white font-bold py-2 px-4 rounded",
  secondary:
    " bg-green-600 w-[300px] py-3  ml-[360px] text-white text-lg transition-transform transform hover:scale-105 hover:bg-purple-700 duration-300 ease-in-out",
  outline:
    "border-2 border-purple-400 text-purple-400 font-bold py-2 px-4 rounded",
  success: "bg-green-600 text-white font-bold py-2 px-4 rounded-full",
  danger: "bg-red-400 text-white font-bold py-2 px-4 rounded",
  warning: "bg-yellow-300 text-black font-bold py-2 px-4 rounded",
  info: "bg-blue-400 text-white font-bold py-2 px-4 rounded",
  light: "bg-gray-100 text-black font-bold py-2 px-4 rounded",
  dark: "bg-gray-800 text-white font-bold py-2 px-4 rounded",
  link: "text-purple-400 font-bold py-2 px-4 underline",
};

const Button = ({ variant = "primary", children }) => {
  return <button className={buttonStyles[variant]}>{children}</button>;
};

export default Button;
