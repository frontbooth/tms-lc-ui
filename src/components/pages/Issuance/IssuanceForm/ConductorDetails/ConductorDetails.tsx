import type { FC } from "react";
import { AtomInputFormik } from "../../../../atoms/Input/AtomInputFormik";

const ConductorDetails: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

      <AtomInputFormik
        name="customerType"
        label="Customer Type*"
        required
        type="radio"
        options={[
          { value: "Self Customer", label: "Self Customer" },
          { value: "Existing Customer", label: "Existing Customer" },
          { value: "Non Customer", label: "Non Customer" },
        ]}
      />


      <AtomInputFormik
        name="caccountNumber"
        label="Account Number*"
        placeholder="Enter Account Number"
        required
        type="text"
        maxLength={11}
      />

      <AtomInputFormik
        name="ccif"
        label="CIF"
        placeholder="Extract from the provided account number"
        required
        type="text"
      />

      <AtomInputFormik
        name="cname"
        label="Name"
        placeholder="Extract from CIF"
        required
        type="text"
      />

      <AtomInputFormik
        name="caddress"
        label="Address"
        placeholder="Extract from CIF"
        required
        type="text"
      />

      <AtomInputFormik
        name="isVerified"
        type="checkbox"
        checkedLabel="Conductor Verified"
      />

      <AtomInputFormik
        name="hasLicense"
        type="checkbox"
        checkedLabel="Has Valid License"
      />
    </div>
  );
};

export default ConductorDetails;
