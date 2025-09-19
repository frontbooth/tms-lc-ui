import type { ReactNode } from 'react';
import Buttons from '../atoms/Buttons';

interface ChildLayoutProps {
  title?: string;
  children: ReactNode;
  showButton?: boolean; 
  onButtonClick?: () => void; 
}

const ChildLayout = ({
  title,
  children,
  showButton = true, 
  onButtonClick,
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

      <div className="p-4 mt-4 mb-12 border-b-3 border-[var(--primary-color)] rounded-[8px] bg-white text-gray-800 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
        {children}
      </div>
    </div>
  );
};

export default ChildLayout;
