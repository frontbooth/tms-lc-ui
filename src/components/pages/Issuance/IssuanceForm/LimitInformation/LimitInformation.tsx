import type { FC } from "react";
import { AtomInputFormik } from "../../../../atoms/Input/AtomInputFormik";

const LimitInformation: FC = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

  

      <AtomInputFormik
        name="ccif"
        label="CIF"
        placeholder="Extract from the provided account number"
        required
        type="text"
      />


      <AtomInputFormik
        name="climitId"
        label="Limit ID"
        placeholder="Limit ID "
        required
        type="text"
        disabled
      />

    </div>
  );
};

export default LimitInformation;
