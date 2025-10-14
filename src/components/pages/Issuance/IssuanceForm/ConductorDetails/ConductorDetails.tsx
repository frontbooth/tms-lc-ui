import type { FC } from "react";
import { useState } from "react";
import { AtomInputFormik } from "../../../../atoms/Input/AtomInputFormik";

const ConductorDetails: FC = () => {
  const [customerType, setCustomerType] = useState<string>("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

      <div className="col-span-1 sm:col-span-2 lg:col-span-4">
        <label className="block font-medium text-gray-700">
          Customer Type*
        </label>
        <div className="flex gap-4 mt-1">
          {["Self Customer", "Existing Customer", "Non Customer"].map((type) => (
            <label key={type} className="flex items-center gap-1">
              <input
                type="radio"
                name="customerType"
                value={type}
                checked={customerType === type}
                onChange={() => setCustomerType(type)}
                className="form-radio"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

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
    </div>
  );
};

export default ConductorDetails;
