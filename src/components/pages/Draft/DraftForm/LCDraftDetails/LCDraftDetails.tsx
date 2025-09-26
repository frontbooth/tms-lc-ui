import type { FC } from "react";
import { AtomInputFormik } from "../../../../atoms/Input/AtomInputFormik";
import Buttons from "../../../../atoms/Buttons/Buttons";

const LCDraftRequest: FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 pb-6 border-b border-gray-300">
        <AtomInputFormik
          name="extractPreviousDraft"
          label="Extract Previous Draft"
          type="radio"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
        />

        <div className="col-span-1 sm:col-span-2 lg:col-span-2 w-full">
          <AtomInputFormik
            name="lcReferenceNumber"
            label="LC Reference Number"
            placeholder="Enter LC Reference Number"
            type="text"
            style={{ width: "100%" }}
          />
        </div>
        <div className="flex items-end">
          <Buttons
            label="Extract"
            color="primary"
            type="button"
            onClick={() => {
              console.log("Extract clicked!");
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AtomInputFormik
          name="sequenceOfTotal"
          label="Sequence of Total"
          placeholder="Enter Sequence of Total"
          type="text"
        />

        <AtomInputFormik
          name="formOfDocumentaryCredit"
          label="Form of Documentary Credit"
          placeholder="Enter Form of Documentary Credit"
          type="text"
        />

        <AtomInputFormik
          name="creditType"
          label="Type of Credit"
          type="radio"
          options={[
            { label: "Sight Credit", value: "Sight" },
            { label: "Usance Credit", value: "Usance" },
            { label: "Revolving Credit", value: "Revolving" },
          ]}
        />

        <AtomInputFormik
          name="documentaryCreditNumber"
          label="Documentary Credit Number"
          placeholder="Enter Documentary Credit Number"
          type="text"
        />

        <AtomInputFormik
          name="dateOfIssue"
          label="Date of Issue"
          placeholder="Select Date of Issue"
          type="date"
        />

        <AtomInputFormik
          name="applicableRules"
          label="Applicable Rules"
          placeholder="Enter Applicable Rules"
          type="text"
        />

        <AtomInputFormik
          name="dateOfExpiry"
          label="Date of Expiry"
          placeholder="Select Date of Expiry"
          type="date"
        />

        <AtomInputFormik
          name="placeOfExpiry"
          label="Place of Expiry"
          placeholder="Enter Place of Expiry"
          type="text"
        />

        <AtomInputFormik
          name="applicant"
          label="Applicant"
          placeholder="Enter Applicant"
          type="text"
        />

        <AtomInputFormik
          name="beneficiary"
          label="Beneficiary"
          placeholder="Enter Beneficiary"
          type="text"
        />

        <AtomInputFormik
          name="currencyCode"
          label="Currency Code"
          placeholder="Enter Currency Code"
          type="text"
        />

        <AtomInputFormik
          name="amount"
          label="Amount"
          placeholder="Enter Amount"
          type="number"
        />

        <AtomInputFormik
          name="tolerance"
          label="Tolerance"
          placeholder="Enter Tolerance"
          type="text"
        />

        <AtomInputFormik
          name="availableWith"
          label="Available With"
          placeholder="Enter Available With"
          type="text"
        />

        <AtomInputFormik
          name="availableBy"
          label="Available By"
          type="radio"
          options={[
            { label: "Payment", value: "Payment" },
            { label: "Negotiation", value: "Negotiation" },
            { label: "Acceptance", value: "Acceptance" },
            { label: "Deferred Payment", value: "DeferredPayment" },
            { label: "Mixed Payment", value: "MixedPayment" },
          ]}
        />

        <AtomInputFormik
          name="mixedPaymentDetails"
          label="Mixed Payment Details"
          placeholder="Enter Mixed Payment Details"
          type="text"
        />

        <AtomInputFormik
          name="paymentTerms"
          label="Payment Terms"
          placeholder="Enter Payment Terms"
          type="text"
        />

        <AtomInputFormik
          name="drawee"
          label="Drawee"
          type="radio"
          options={[
            { label: "42A: SIDD NPK AXXX", value: "42A" },
            { label: "42D: SIDDHARTHA BANK LIMITED, KATHMANDU, NEPAL", value: "42D" },
          ]}
        />

        <AtomInputFormik
          name="partialShipments"
          label="Partial Shipments"
          type="radio"
          options={[
            { label: "Allowed", value: "Allowed" },
            { label: "Not Allowed", value: "NotAllowed" },
            { label: "Conditional", value: "Conditional" },
          ]}
        />

        <AtomInputFormik
          name="transhipments"
          label="Transhipments"
          type="radio"
          options={[
            { label: "Allowed", value: "Allowed" },
            { label: "Not Allowed", value: "NotAllowed" },
            { label: "Conditional", value: "Conditional" },
          ]}
        />

        <AtomInputFormik
          name="placeOfTakingInCharge"
          label="Place of Taking in Charge / Dispatch / Receipt"
          placeholder="Enter Place"
          type="text"
        />

        <AtomInputFormik
          name="portOfLoading"
          label="Port of Loading"
          placeholder="Enter Port of Loading"
          type="text"
        />

        <AtomInputFormik
          name="portOfDischarge"
          label="Port of Discharge / Destination"
          placeholder="Enter Port of Discharge"
          type="text"
        />

        <AtomInputFormik
          name="latestDateOfShipment"
          label="Latest Date of Shipment"
          placeholder="Select Latest Date of Shipment"
          type="date"
        />

        <AtomInputFormik
          name="placeOfFinalDestination"
          label="Place of Final Destination"
          placeholder="Enter Final Destination"
          type="text"
        />

        <AtomInputFormik
          name="descriptionOfGoods"
          label="Description of Goods"
          placeholder="Enter Description of Goods"
          type="text"
        />

        <AtomInputFormik
          name="documentsRequired"
          label="Documents Required"
          placeholder="Enter Documents Required"
          type="text"
        />

        <AtomInputFormik
          name="additionalConditions"
          label="Additional Conditions"
          placeholder="Enter Additional Conditions"
          type="text"
        />

        <AtomInputFormik
          name="charges"
          label="Charges"
          placeholder="Enter Charges"
          type="text"
        />

        <AtomInputFormik
          name="periodOfPresentation"
          label="Period of Presentation"
          placeholder="Enter Period of Presentation"
          type="text"
        />

        <AtomInputFormik
          name="confirmationInstructions"
          label="Confirmation Instructions"
          type="radio"
          options={[
            { label: "Confirm", value: "Confirm" },
            { label: "May Add", value: "MayAdd" },
            { label: "Without", value: "Without" },
          ]}
        />

        <AtomInputFormik
          name="requestedConfirmationParty"
          label="Requested Confirmation Party"
          placeholder="Enter Requested Confirmation Party"
          type="text"
        />

        <AtomInputFormik
          name="reimbursingBank"
          label="Reimbursing Bank"
          placeholder="Enter Reimbursing Bank"
          type="text"
        />

        <AtomInputFormik
          name="instructionsToBank"
          label="Instructions to Paying/Accepting/Negotiating Bank"
          placeholder="Enter Instructions"
          type="text"
        />

        <AtomInputFormik
          name="adviseThroughBank"
          label="Advise Through Bank"
          placeholder="Enter Advise Through Bank"
          type="text"
        />

        <AtomInputFormik
          name="senderToReceiverInformation"
          label="Sender to Receiver Information"
          placeholder="Enter Sender to Receiver Information"
          type="text"
        />
      </div>
    </div>
  );
};

export default LCDraftRequest;
