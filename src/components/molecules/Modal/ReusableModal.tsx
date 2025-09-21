import { Modal as AntdModal } from "antd";
import type { FC, ReactNode } from "react";

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  children: ReactNode;
  modalIcon?: string; 
  width?: number;
  noOverlay?: boolean;
  zIndex?: number;
}

const ReusableModal: FC<ReusableModalProps> = ({
  isOpen,
  onClose,
  name,
  children,
  modalIcon,
  width = 900,
  noOverlay = true,
  zIndex = 1000,
}) => {
  return (
    <AntdModal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      mask={noOverlay}
      width={width}
      className="custom-modal"
      zIndex={zIndex}
    >
      <h2 className="text-[16px] font-semibold p-4 shadow-sm bg-white rounded-t-[8px]">
        {name}
      </h2>

      {modalIcon === "true" && (
        <div className="p-4">
          <img
            src="/Images/modal/modalicon.svg"
            alt="logo"
            className="w-[77px] h-[75px] mx-auto"
          />
        </div>
      )}

      <div className="text-[16px] font-semibold p-4 bg-white m-2 rounded-[8px] shadow-md">
        {children}
      </div>
    </AntdModal>
  );
};

export default ReusableModal;
