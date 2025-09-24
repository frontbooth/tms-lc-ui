import type { FC } from "react";
import { AtomInputFormik } from "../../../../atoms/Input/AtomInputFormik";

const LCDraftRequest: FC = () => {
  return (
    <div className="p-6 mb-2 border-b-3 border-[var(--primary-color)] rounded-[8px] bg-white text-gray-800 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AtomInputFormik
          name="requestInitiatedBy"
          label="Request Initiated By"
          placeholder="Enter Request Initiated By"
          required
          type="text"
        />

        <AtomInputFormik
          name="requestInitiatedFrom"
          label="Request Initiated From"
          placeholder="Enter Request Initiated From"
          required
          type="text"
        />

        <AtomInputFormik
          name="solId"
          label="SOL ID"
          placeholder="Enter SOL ID"
          required
          type="text"
        />

        <AtomInputFormik
          name="requestedDate"
          label="Requested Date"
          placeholder="Select Requested Date"
          required
          type="date"
        />
      </div>
    </div>
  );
};

export default LCDraftRequest;
