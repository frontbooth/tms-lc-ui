import { useState } from "react";
import type { FC } from "react";
import type { MouseEvent, ReactNode } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface AccordionProps {
  title: string;
  children: ReactNode;
  isAllOpen?: boolean;
  isFirstOpen?: boolean;
}

const Accordion: FC<AccordionProps> = ({
  title,
  children,
  isAllOpen = false,
  isFirstOpen = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    toggleExpand();
  };

  return (
    <div className="mb-2 border-b-3 border-[var(--primary-color)] rounded-[4px] bg-white text-gray-800 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
      <div
        className="font-bold px-4 py-[1px] flex justify-between items-center bg-[var(--primary-color)] cursor-pointer"
        onClick={toggleExpand}
      >
        <div></div>
        <span className="text-white">{title}</span>
        <button
          type="button"
          onClick={handleButtonClick}
          className="text-xl cursor-pointer border-white focus:outline-none border rounded-full p-1 transition-transform duration-300 transform hover:scale-110"
        >
          {isExpanded ? (
            <AiOutlineMinus className="text-white text-lg transition-transform duration-300 transform hover:scale-125" />
          ) : (
            <AiOutlinePlus className="text-white text-lg transition-transform duration-300 transform hover:scale-125" />
          )}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-0 ease-in-out ${
          isExpanded || isAllOpen || isFirstOpen
            ? "max-h-[100%] px-4 py-2 border-t border-gray-300"
            : "max-h-0"
        }`}
      >
        <div className="py-4">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
