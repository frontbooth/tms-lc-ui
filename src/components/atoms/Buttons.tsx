import type { FC, MouseEventHandler } from "react";
import clsx from "clsx";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


// type checking
interface ButtonsProps {
  color?: 
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light"
    | "purple"
    | "pink";
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  showicon?: boolean;
  showremoveicon?: boolean;
  showarrowicon?: boolean;
  disabled?: boolean | (() => boolean);
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Buttons: FC<ButtonsProps> = ({
  color = "primary",
  label = "Button",
  onClick,
  showicon = false,
  showremoveicon = false,
  showarrowicon = false,
  disabled = false,
  className = "",
  type = "submit",
}) => {
  const isDisabled = typeof disabled === "function" ? disabled() : disabled;

  const baseStyles =
    "cursor-pointer relative rounded px-5 py-2.5 overflow-hidden group text-white hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300";

  const colorMapping: Record<
    NonNullable<ButtonsProps["color"]>,
    { bg: string; hover: string; disabled: string }
  > = {
    primary: {
      bg: "bg-blue-500",
      hover: "hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 hover:ring-blue-400",
      disabled: "bg-blue-300 cursor-not-allowed",
    },
    secondary: {
      bg: "bg-green-600",
      hover: "hover:bg-gradient-to-r hover:from-green-600 hover:to-green-400 hover:ring-green-400",
      disabled: "bg-green-300 cursor-not-allowed",
    },
    danger: {
      bg: "bg-red-500",
      hover: "hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 hover:ring-red-400",
      disabled: "bg-red-300 cursor-not-allowed",
    },
    warning: {
      bg: "bg-yellow-500",
      hover: "hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 hover:ring-yellow-400",
      disabled: "bg-yellow-300 cursor-not-allowed",
    },
    info: {
      bg: "bg-cyan-500",
      hover: "hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 hover:ring-cyan-400",
      disabled: "bg-cyan-300 cursor-not-allowed",
    },
    dark: {
      bg: "bg-gray-800",
      hover: "hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-600 hover:ring-gray-600",
      disabled: "bg-gray-400 cursor-not-allowed",
    },
    light: {
      bg: "bg-gray-200 text-gray-800",
      hover: "hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-100 hover:ring-gray-300",
      disabled: "bg-gray-100 cursor-not-allowed text-gray-400",
    },
    purple: {
      bg: "bg-purple-600",
      hover: "hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-400 hover:ring-purple-400",
      disabled: "bg-purple-300 cursor-not-allowed",
    },
    pink: {
      bg: "bg-pink-500",
      hover: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-400 hover:ring-pink-400",
      disabled: "bg-pink-300 cursor-not-allowed",
    },
  };

  const { bg, hover, disabled: disabledStyle } = colorMapping[color] || colorMapping.primary;

  return (
    <button
      type={type}
      style={{ width: "180px" }}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      className={clsx(baseStyles, isDisabled ? disabledStyle : [bg, hover], className)}
    >
      <div className="relative flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
        <span
          className={clsx(
            "absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12",
            !isDisabled && "group-hover:-translate-x-40"
          )}
        ></span>
        <span className="relative">
          <div className="flex items-center text-[14px]">
            {showicon && <FaPlus className="mr-2" />}
            {showremoveicon && <FaMinus />}
            {label}
            {showarrowicon && <FaArrowRightLong className="ml-2" />}
          </div>
        </span>
      </div>
    </button>
  );
};

export default Buttons;
