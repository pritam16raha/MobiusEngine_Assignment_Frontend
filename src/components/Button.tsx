import React from "react";

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className="
        flex items-center justify-center 
        text-secondary
        bg-white hover:bg-primary 
        hover:text-white 
        text-[16px] font-medium 
        px-8 py-4 
        rounded-full
        transition-all duration-300
      "
    >
      {text}
    </button>
  );
};

export default Button;
