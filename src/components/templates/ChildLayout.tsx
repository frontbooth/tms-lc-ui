import type { ReactNode } from 'react';
import Buttons from '../atoms/Buttons/Buttons';

interface ChildLayoutProps {
  title?: string;
  children: ReactNode;
  showButton?: boolean;
  onButtonClick?: () => void;
  withCardStyle?: boolean;  
  bgColorClass?: string;
}

const ChildLayout = ({
  title,
  children,
  showButton = true,
  onButtonClick,
  withCardStyle = true,      
  bgColorClass = 'bg-white',  
}: ChildLayoutProps) => {
  return (
    <div className="w-full p-2">
      {title && (
        <h2 className="text-[20px] font-bold text-center mt-2">{title}</h2>
      )}

      {showButton && (
        <div className="flex justify-end">
          <Buttons
            label="Add New"
            color="secondary"
            showicon
            className="mt-4"
            onClick={onButtonClick}
          />
        </div>
      )}

      <div
        className={`p-4 mt-4 mb-12 rounded-[8px] text-gray-800 
        ${withCardStyle ? `
          border-b-3 border-[var(--primary-color)] 
          shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] 
          ${bgColorClass}
        ` : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ChildLayout;
