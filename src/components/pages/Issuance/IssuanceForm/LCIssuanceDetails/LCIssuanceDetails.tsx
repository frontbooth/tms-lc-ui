import type { FC } from "react";
import { useState } from "react";
import { AtomInputFormik } from "../../../../atoms/Input/AtomInputFormik";
import { currencyOptions } from "../../../../../utils/ListOfValues";
import { Card } from "antd";

const LCIssuanceDetails: FC = () => {
  const [isDraftApplicable, setIsDraftApplicable] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-1 sm:col-span-2 lg:col-span-4">
          <AtomInputFormik
            name="approvalSheetLink"
            label="Approval Sheet Link*"
            placeholder="Enter Approval Sheet Link"
            type="text"
            helperText="Enter the link of Approval Sheet, validate with the reference number and display its status"
          />
        </div>

        <AtomInputFormik
          name="lcDraftApplicable"
          label="LC Draft Applicable*"
          type="radio"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
          onChange={(e: any) => setIsDraftApplicable(e.target.value === "Yes")}
        />

        {isDraftApplicable && (
          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            <AtomInputFormik
              name="lcDraftLink"
              label="LC Draft Link*"
              placeholder="Enter LC Draft Link ID"
              type="text"
            />
          </div>
        )}

        <AtomInputFormik
          name="beneficiaryName"
          label="Beneficiary Name*"
          placeholder="Enter Beneficiary Name"
          type="text"
        />

        <AtomInputFormik
          name="beneficiaryAddress"
          label="Beneficiary Address*"
          placeholder="Enter Beneficiary Address"
          type="text"
        />

        <AtomInputFormik
          name="beneficiaryCountry"
          label="Beneficiary Country*"
          placeholder="Select Beneficiary Country"
          type="select"
          options={[
            { label: "Nepal", value: "Nepal" },
            { label: "India", value: "India" },
            { label: "China", value: "China" },
          ]}
        />

        <AtomInputFormik
          name="currencyCode"
          label="Currency Code*"
          type="select"
          options={currencyOptions}
          helperText='If "INR" or "LCY" is selected in LC Currency: INR or NPR must be set in this field and frozen. If "FCY" is selected, currency LOVs will be provided.'
        />

        <AtomInputFormik
          name="toleranceType"
          label="Tolerance % (+, -, +/-)*"
          type="radio"
          options={[
            { label: "+", value: "+" },
            { label: "-", value: "-" },
            { label: "+/-", value: "+/-" },
          ]}
        />

        <AtomInputFormik
          name="toleranceValue"
          label="Tolerance % Value*"
          placeholder="Enter numeric value"
          type="number"
        />

        <AtomInputFormik
          name="lcAmountFigures"
          label="LC Amount (In Figures)*"
          placeholder="Enter amount (in million terms)"
          type="number"
        />

        <AtomInputFormik
          name="lcAmountIncludingTolerance"
          label="LC Amount Including Tolerance"
          placeholder="Auto-calculated"
          type="text"
          disabled
        />

        <AtomInputFormik
          name="lcAmountWords"
          label="LC Amount (In Words)"
          placeholder="Automatically displayed"
          type="text"
          disabled
        />

        <AtomInputFormik
          name="rate"
          label="Rate*"
          placeholder="Enter rate (2 digits after decimal)"
          type="number"
          step="0.01"
        />

        <AtomInputFormik
          name="ttReimbursementLC"
          label="TT Reimbursement LC*"
          type="radio"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
        />

        <AtomInputFormik
          name="bciRequired"
          label="BCI Required*"
          type="radio"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
          helperText="Applicable only if LC Type is Sight"
        />

      </div>
      <div className="flex flex-col gap-6">
        <Card
          title="Applicant Bank"
          styles={{ header: { backgroundColor: "#f0f2f5" } }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <AtomInputFormik name="applicantBankCode" label="Bank" placeholder="Enter Bank Code" type="text" />
            <AtomInputFormik name="applicantBranchCode" label="Branch" placeholder="Enter Branch Code" type="text" />

            <AtomInputFormik name="applicantBankName" label="Name" placeholder="Enter Bank Name" type="text" />
            <AtomInputFormik name="applicantBranchName" label="Address Line 1" placeholder="Enter Address Line 1" type="text" />

            <AtomInputFormik name="applicantAddress2" label="Address Line 2" placeholder="Enter Address Line 2" type="text" />
            <AtomInputFormik name="applicantAddress3" label="Address Line 3" placeholder="Enter Address Line 3" type="text" />

            <AtomInputFormik name="applicantCity" label="City" placeholder="Enter City" type="text" />
            <AtomInputFormik name="applicantState" label="State" placeholder="Enter State" type="text" />

            <AtomInputFormik name="applicantCountry" label="Country" placeholder="Enter Country" type="text" />
            <AtomInputFormik name="applicantPostalCode" label="Postal Code" placeholder="Enter Postal Code" type="text" />

            <AtomInputFormik name="applicantBankIdentifier" label="Bank Identifier" placeholder="Enter Bank Identifier" type="text" />
            <AtomInputFormik name="applicantPartyId" label="Party ID" placeholder="Enter Party ID" type="text" />

            <AtomInputFormik
              name="applicantAddressType"
              label="Address Type"
              type="select"
              options={[
                { label: "Select", value: "" },
                { label: "Registered", value: "registered" },
                { label: "Correspondence", value: "correspondence" },
              ]}
            />
          </div>
        </Card>

        <Card
          title="Issuing Bank"
          styles={{ header: { backgroundColor: "#f0f2f5" } }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <AtomInputFormik name="applicantBankCode" label="Bank" placeholder="Enter Bank Code" type="text" />
            <AtomInputFormik name="applicantBranchCode" label="Branch" placeholder="Enter Branch Code" type="text" />

            <AtomInputFormik name="applicantBankName" label="Name" placeholder="Enter Bank Name" type="text" />
            <AtomInputFormik name="applicantBranchName" label="Address Line 1" placeholder="Enter Address Line 1" type="text" />

            <AtomInputFormik name="applicantAddress2" label="Address Line 2" placeholder="Enter Address Line 2" type="text" />
            <AtomInputFormik name="applicantAddress3" label="Address Line 3" placeholder="Enter Address Line 3" type="text" />

            <AtomInputFormik name="applicantCity" label="City" placeholder="Enter City" type="text" />
            <AtomInputFormik name="applicantState" label="State" placeholder="Enter State" type="text" />

            <AtomInputFormik name="applicantCountry" label="Country" placeholder="Enter Country" type="text" />
            <AtomInputFormik name="applicantPostalCode" label="Postal Code" placeholder="Enter Postal Code" type="text" />

            <AtomInputFormik name="applicantBankIdentifier" label="Bank Identifier" placeholder="Enter Bank Identifier" type="text" />
            <AtomInputFormik name="applicantPartyId" label="Party ID" placeholder="Enter Party ID" type="text" />

            <AtomInputFormik
              name="applicantAddressType"
              label="Address Type"
              type="select"
              options={[
                { label: "Select", value: "" },
                { label: "Registered", value: "registered" },
                { label: "Correspondence", value: "correspondence" },
              ]}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LCIssuanceDetails;
