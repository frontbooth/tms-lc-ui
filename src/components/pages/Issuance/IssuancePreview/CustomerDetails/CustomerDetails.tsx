import type { FC } from "react";
import { useFormikContext } from "formik";

type Values = {
  applicantName: string;
  address: string;
  emailId: string;
  urm: string;
  cif: string;
  registrationNumber: string;
  pan: string;
  eximCode: string;
};

const CustomerDetails: FC = () => {
  const { values } = useFormikContext<Values>();

  const fmt = (v: unknown) => (v === null || v === undefined || v === "" ? "—" : String(v));

  const rows: { label: string; value: string }[] = [
    { label: "Applicant Name", value: fmt(values.applicantName) },
    { label: "Address", value: fmt(values.address) },
    { label: "Email ID", value: fmt(values.emailId) },
    { label: "URM", value: fmt(values.urm) },
    { label: "CIF", value: fmt(values.cif) },
    { label: "Registration Number", value: fmt(values.registrationNumber) },
    { label: "PAN", value: fmt(values.pan) },
    { label: "EXIM Code", value: fmt(values.eximCode) },
  ];

  return (
    <div>
      <div className="cursor-pointer rounded-[8px] bg-white text-gray-800">
        <div className="relative py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 py-4 gap-4">
            {rows.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col p-2 border border-gray-300 rounded-md"
              >
                <strong>{item.label}:</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
