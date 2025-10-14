import type { FC } from "react";
import { Tooltip } from "antd";
import {
  AiOutlineSignature,
  AiFillEye,
  AiFillEdit,
  AiOutlinePlus,
  AiFillDelete,
} from "react-icons/ai";

interface IconButtonsProps {
  iconType: "signature" | "view" | "edit" | "plus" | "delete";
  tooltip: string;
  color?: string;
  onClick?: () => void;
}

const IconButtons: FC<IconButtonsProps> = ({
  iconType,
  tooltip,
  color,
  onClick,
}) => {
  let Icon;
  let defaultColor = "";

  switch (iconType) {
    case "signature":
      Icon = AiOutlineSignature;
      defaultColor = "bg-blue-500";
      break;
    case "view":
      Icon = AiFillEye;
      defaultColor = "bg-green-500";
      break;
    case "edit":
      Icon = AiFillEdit;
      defaultColor = "bg-yellow-500";
      break;
    case "plus":
      Icon = AiOutlinePlus;
      defaultColor = "bg-blue-500"; 
      break;
    case "delete":
      Icon = AiFillDelete;
      defaultColor = "bg-red-500";
      break;
    default:
      Icon = AiFillEye;
      defaultColor = "bg-gray-400";
  }

  return (
    <Tooltip placement="left" title={tooltip}>
      <div
        onClick={onClick}
        className={`cursor-pointer border border-gray-300 rounded w-11 h-8 flex items-center justify-center text-white hover:opacity-80 transition-all duration-200 ${color || defaultColor}`}
      >
        <Icon className="text-lg" />
      </div>
    </Tooltip>
  );
};

export default IconButtons;
