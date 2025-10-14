import type { FC } from "react";
import { useFormikContext } from "formik";

type Values = {
  approvalSheetLink: string;
  lcDraftApplicable: string;
  lcDraftLink?: string;
  beneficiaryName: string;
  beneficiaryAddress: string;
  beneficiaryCountry: string;
  currencyCode: string;
  toleranceType: string;
  toleranceValue: string | number;
  lcAmountFigures: string | number;
  lcAmountIncludingTolerance: string | number;
  lcAmountWords: string;
  rate: string | number;
  ttReimbursementLC: string;
  bciRequired: string;

  // Applicant Bank
  applicantBankCode: string;
  applicantBranchCode: string;
  applicantBankName: string;
  applicantBranchName: string;
  applicantAddress2: string;
  applicantAddress3: string;
  applicantCity: string;
  applicantState: string;
  applicantCountry: string;
  applicantPostalCode: string;
  applicantBankIdentifier: string;
  applicantPartyId: string;
  applicantAddressType: string;
};

const LCDetails: FC = () => {
  const { values } = useFormikContext<Values>();

  const fmt = (v: unknown) =>
    v === null || v === undefined || v === "" ? "—" : String(v);

  const simpleSections = [
    {
      title: "Approval & Draft Details",
      rows: [
        { label: "Approval Sheet Link", value: fmt(values.approvalSheetLink) },
        { label: "LC Draft Applicable", value: fmt(values.lcDraftApplicable) },
        { label: "LC Draft Link", value: fmt(values.lcDraftLink) },
        { label: "Beneficiary Name", value: fmt(values.beneficiaryName) },
        { label: "Beneficiary Address", value: fmt(values.beneficiaryAddress) },
        { label: "Beneficiary Country", value: fmt(values.beneficiaryCountry) },
        { label: "Currency Code", value: fmt(values.currencyCode) },
        { label: "Tolerance Type", value: fmt(values.toleranceType) },
        { label: "Tolerance Value (%)", value: fmt(values.toleranceValue) },
        { label: "LC Amount (Figures)", value: fmt(values.lcAmountFigures) },
        {
          label: "LC Amount (Including Tolerance)",
          value: fmt(values.lcAmountIncludingTolerance),
        },
        { label: "LC Amount (In Words)", value: fmt(values.lcAmountWords) },
        { label: "Rate", value: fmt(values.rate) },
        { label: "TT Reimbursement LC", value: fmt(values.ttReimbursementLC) },
        { label: "BCI Required", value: fmt(values.bciRequired) },
      ],
    },
  ];

  const bankSections = [
    {
      title: "Applicant Bank Details",
      rows: [
        { label: "Bank Code", value: fmt(values.applicantBankCode) },
        { label: "Branch Code", value: fmt(values.applicantBranchCode) },
        { label: "Bank Name", value: fmt(values.applicantBankName) },
        { label: "Branch Name", value: fmt(values.applicantBranchName) },
        { label: "Address Line 2", value: fmt(values.applicantAddress2) },
        { label: "Address Line 3", value: fmt(values.applicantAddress3) },
        { label: "City", value: fmt(values.applicantCity) },
        { label: "State", value: fmt(values.applicantState) },
        { label: "Country", value: fmt(values.applicantCountry) },
        { label: "Postal Code", value: fmt(values.applicantPostalCode) },
        { label: "Bank Identifier", value: fmt(values.applicantBankIdentifier) },
        { label: "Party ID", value: fmt(values.applicantPartyId) },
        { label: "Address Type", value: fmt(values.applicantAddressType) },
      ],
    },
    {
      title: "Issuing Bank Details",
      rows: [
        { label: "Bank Code", value: fmt(values.applicantBankCode) },
        { label: "Branch Code", value: fmt(values.applicantBranchCode) },
        { label: "Bank Name", value: fmt(values.applicantBankName) },
        { label: "Branch Name", value: fmt(values.applicantBranchName) },
        { label: "Address Line 2", value: fmt(values.applicantAddress2) },
        { label: "Address Line 3", value: fmt(values.applicantAddress3) },
        { label: "City", value: fmt(values.applicantCity) },
        { label: "State", value: fmt(values.applicantState) },
        { label: "Country", value: fmt(values.applicantCountry) },
        { label: "Postal Code", value: fmt(values.applicantPostalCode) },
        { label: "Bank Identifier", value: fmt(values.applicantBankIdentifier) },
        { label: "Party ID", value: fmt(values.applicantPartyId) },
        { label: "Address Type", value: fmt(values.applicantAddressType) },
      ],
    },
  ];

  return (
    <div className="space-y-8">

      {simpleSections.map((section, idx) => (
        <div key={idx} className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">
            {section.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.rows.map((item, i) => (
              <div
                key={i}
                className="flex flex-col p-3 border border-gray-200 rounded-md bg-gray-50"
              >
                <strong>{item.label}</strong>
                <span className="text-base text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}


      {bankSections.map((section, idx) => (
        <div
          key={idx}
          className="border border-gray-300 rounded-lg shadow-sm bg-white"
        >
          <div className="px-4 py-2 bg-gray-100 border-b border-gray-200 font-semibold text-gray-800">
            {section.title}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {section.rows.map((item, i) => (
              <div
                key={i}
                className="flex flex-col p-3 border border-gray-200 rounded-md bg-gray-50"
              >
                <strong>{item.label}</strong>
                <span className="text-base text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LCDetails;
