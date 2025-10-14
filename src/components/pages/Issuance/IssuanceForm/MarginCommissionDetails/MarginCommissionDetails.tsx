import type { FC } from "react";
import { Card } from "antd";
import { AtomInputFormik } from "../../../../atoms/Input/AtomInputFormik";
import IconButtons from "../../../../atoms/Buttons/IconButtons"

const MarginCommissionDetails: FC = () => {
  return (
    <div className="flex flex-col gap-6 mb-6">

      <Card title="Margin Details" className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AtomInputFormik
            name="marginPercent"
            label="Margin (%)"
            placeholder="Enter margin percentage"
            required
            type="text"
          />
          <AtomInputFormik
            name="marginAccount"
            label="Margin Account"
            placeholder="Enter margin account"
            required
            type="text"
          />
          <AtomInputFormik
            name="marginAmount"
            label="Margin Amount"
            placeholder="Enter margin amount"
            required
            type="text"
          />
        </div>

        <div className="flex gap-3 mt-4">
          <IconButtons
            iconType="signature"
            tooltip="View Signature"
            onClick={() => console.log("Signature clicked")}
          />
          <IconButtons
            iconType="view"
            tooltip="Show Account Status"
            onClick={() => console.log("View clicked")}
          />
        </div>
      </Card>

      <Card title="Commission Details">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AtomInputFormik
            name="commissionPerQuarter"
            label="Commission Per Quarter (%)"
            placeholder="Enter commission per quarter"
            required
            type="text"
          />
          <AtomInputFormik
            name="commissionAccount"
            label="Commission Account"
            placeholder="Enter commission account"
            required
            type="text"
          />
          <AtomInputFormik
            name="commissionAmount"
            label="Commission Amount"
            placeholder="Enter commission amount"
            required
            type="text"
          />
        </div>
             <div className="flex gap-3 mt-4">
          <IconButtons
            iconType="signature"
            tooltip="View Signature"
            onClick={() => console.log("Signature clicked")}
          />
          <IconButtons
            iconType="view"
            tooltip="Show Account Status"
            onClick={() => console.log("View clicked")}
          />
        </div>
      </Card>

    </div>
  );
};

export default MarginCommissionDetails;
