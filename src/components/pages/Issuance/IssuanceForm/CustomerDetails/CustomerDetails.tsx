import type { FC } from "react";
import { AtomInputFormik } from "../../../../atoms/Input/AtomInputFormik";

const CustomerDetails: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <AtomInputFormik
        name="applicantName"
        label="Applicant Name"
        placeholder="Enter Applicant Name"
        required
        type="text"
      />

      <AtomInputFormik
        name="address"
        label="Address"
        placeholder="Enter Address"
        required
        type="text"
      />

      <AtomInputFormik
        name="emailId"
        label="Email ID"
        placeholder="Enter Email ID"
        required
        type="email"
      />

      <AtomInputFormik
        name="urm"
        label="URM"
        placeholder="Enter URM"
        required
        type="text"
      />

      <AtomInputFormik
        name="cif"
        label="CIF"
        placeholder="Enter CIF"
        required
        type="text"
      />

      <AtomInputFormik
        name="registrationNumber"
        label="Registration Number"
        placeholder="Enter Registration Number"
        required
        type="text"
      />

      <AtomInputFormik
        name="pan"
        label="PAN"
        placeholder="Enter PAN"
        required
        type="text"
      />

      <AtomInputFormik
        name="eximCode"
        label="EXIM Code"
        placeholder="Enter EXIM Code"
        required
        type="text"
      />
    </div>
  );
};

export default CustomerDetails;
