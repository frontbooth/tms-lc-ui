import type { FC } from "react";
import { AtomInputFormik } from "../../../../atoms/Input/AtomInputFormik";

const LCIssuanceRequest: FC = () => {
  return (
    <div className="p-6 mb-2 border-b-3 border-[var(--primary-color)] rounded-[8px] bg-white text-gray-800 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AtomInputFormik
          name="requestInitiatedBy"
          label="Request Initiated By"
          placeholder="Enter Request Initiated By"
          type="text"
          disabled={true}
          
        />

        <AtomInputFormik
          name="requestInitiatedFrom"
          label="Request Initiated From"
          placeholder="Enter Request Initiated From"
          type="text"
          disabled
        />

        <AtomInputFormik
          name="solId"
          label="SOL ID"
          placeholder="Enter SOL ID"
          type="text"
          disabled
        />

        <AtomInputFormik
          name="requestedDate"
          label="Requested Date"
          placeholder="Select Requested Date"
          type="date"
          disabled

        />
      </div>
    </div>
  );
};

export default LCIssuanceRequest;
