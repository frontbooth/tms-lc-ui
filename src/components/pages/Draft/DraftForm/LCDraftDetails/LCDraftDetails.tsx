import { useState } from "react";
import type { FC } from "react";
import { AtomInputFormik } from "../../../../atoms/Input/AtomInputFormik";
import Buttons from "../../../../atoms/Buttons/Buttons";
import { currencyOptions } from "../../../../../utils/ListOfValues";
import PiInformation from "./PiInformation/PiInformation";
import { Card } from "antd";
import IconButtons from "../../../../atoms/Buttons/IconButtons";

const LCDraftRequest: FC = () => {
  const [showPiInfo, setShowPiInfo] = useState(false);

  return (
    <>
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

          <div className="flex items-end mb-1">
            <IconButtons
              iconType="extract"
              tooltip="Extract"
              onClick={() => console.log("Extract clicked!")}
            />
          </div>
        </div>

        {/* Second Section: LC Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AtomInputFormik
            name="sequenceOfTotal"
            label="Sequence of Total"
            type="select"
            options={[
              { label: "1/1", value: "onebyone" },
              { label: "1/2", value: "onebytwo" },
              { label: "2/2", value: "twobytwo" },
            ]}
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
            type="select"
            placeholder="Select Type of Credit"
            options={[
              { label: "Default", value: "default" },
              { label: "Mixed", value: "mixed" },
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
            label="Applicable Rule"
            type="select"
            options={[
              { label: "UCP Latest Version", value: "ucp" },
              { label: "URR Latest Version", value: "urr" },
            ]}
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
            type="select"
            options={[
              { label: "Nepal", value: "Nepal" },
              { label: "United States", value: "USA" },
              { label: "India", value: "India" },
              { label: "United Kingdom", value: "UK" },
              { label: "Canada", value: "Canada" },
              { label: "Australia", value: "Australia" },
              { label: "Germany", value: "Germany" },
              { label: "France", value: "France" },
              { label: "Japan", value: "Japan" },
              { label: "China", value: "China" },
            ]}
          />


          <AtomInputFormik
            name="beneficiaryAddress"
            label="Beneficiary Address"
            placeholder="Enter Beneficiary Address"
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
            type="select"
            options={currencyOptions}
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
            type="select"
            options={[
              { label: "Payment", value: "Payment" },
              { label: "Negotiation", value: "Negotiation" },
              { label: "Acceptance", value: "Acceptance" },
              { label: "Deferred Payment", value: "DeferredPayment" },
              { label: "Mixed Payment", value: "MixedPayment" },
            ]}
          />


          <AtomInputFormik
            name="drawee"
            label="Drawee"
            type="select"
            options={[
              { label: "From cbs", value: "Dummy1" },
              { label: "From cbs", value: "Dummy2" },

            ]}
          />

          <AtomInputFormik
            name="partialShipments"
            label="Partial Shipments"
            type="select"
            options={[
              { label: "Allowed", value: "Allowed" },
              { label: "Not Allowed", value: "NotAllowed" },
              { label: "Conditional", value: "Conditional" },
            ]}
          />

          <AtomInputFormik
            name="transhipments"
            label="Transhipments"
            type="select"
            options={[
              { label: "Allowed", value: "Allowed" },
              { label: "Not Allowed", value: "NotAllowed" },
              { label: "Conditional", value: "Conditional" },
            ]}
          />

          <AtomInputFormik
            name="portOfDischarge"
            label="Port of Discharge / Destination"
            type="select"
            options={[
              { label: "{dont now value yet}", value: "Dummy1" },
              { label: "{dont now value yet}", value: "Dummy2" },

            ]}
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
            name="charge"
            label="Charge"
            type="select"
            options={[
              { label: "Outside Nepal", value: "outsideNepal" },
              { label: "Conforming Charge", value: "conformingCharge" },
            ]}
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
            type="select"
            options={[
              { label: "Confirm", value: "Confirm" },
              { label: "May Add", value: "MayAdd" },
              { label: "Without", value: "Without" },
            ]}
          />

          <AtomInputFormik
            name="reimbursingBank"
            label="Reimbursing Bank"
            placeholder="Enter Reimbursing Bank"
            type="text"
          />

          <AtomInputFormik
            name="adviseThroughBank"
            label="Advise Through Bank"
            placeholder="Enter Advise Through Bank"
            type="text"
          />
        </div>

        {/* Third Section: Additional Details */}
        <div className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <AtomInputFormik
              name="paymentTerms"
              label="Payment Terms"
              placeholder="Enter detailed payment terms and conditions"
              type="textarea"
              rows={3}
            />

            <AtomInputFormik
              name="placeOfTakingInCharge"
              label="Place of Taking in Charge / Dispatch / Receipt"
              placeholder="Enter Place"
              type="textarea"
              rows={3}
            />

            <AtomInputFormik
              name="portOfLoading"
              label="Port of Loading"
              placeholder="Enter Port of Loading"
              type="textarea"
              rows={3}
            />

            <AtomInputFormik
              name="mixedPaymentDetails"
              label="Mixed Payment Details"
              placeholder="Enter detailed mixed payment terms and conditions"
              type="textarea"
              rows={3}
            />



            <AtomInputFormik
              name="descriptionOfGoods"
              label="Description of Goods"
              placeholder="Enter detailed description of goods, quantities, prices, specifications, HS codes, etc."
              type="textarea"
              rows={4}
            />

            <AtomInputFormik
              name="documentsRequired"
              label="Documents Required"
              placeholder="List all required documents (commercial invoice, bill of lading, packing list, certificate of origin, insurance certificate, inspection certificate, etc.)"
              type="textarea"
              rows={4}
            />

            <AtomInputFormik
              name="chargeDetails"
              label="Charges Details"
              placeholder="Provide a breakdown of all charges (banking fees, commissions, interest, taxes, shipping costs, insurance premiums, etc.)"
              type="textarea"
              rows={4}
            />

            <AtomInputFormik
              name="additionalConditions"
              label="Additional Conditions"
              placeholder="Enter any additional terms and conditions, special instructions, or specific requirements"
              type="textarea"
              rows={3}
            />

            <AtomInputFormik
              name="instructionsToBank"
              label="Instructions to Paying/Accepting/Negotiating Bank"
              placeholder="Enter detailed instructions for the bank regarding payment procedures, acceptance criteria, negotiation terms, document handling, and special conditions"
              type="textarea"
              rows={3}
            />

            <AtomInputFormik
              name="senderToReceiverInformation"
              label="Sender to Receiver Information"
              placeholder="Enter any additional information, special messages, or instructions from sender to receiver"
              type="textarea"
              rows={3}
            />
          </div>
        </div>
      </div>


      <div className="mt-4">
        <Card title="(Proforma Invoice) PI Information">
          <IconButtons
            iconType="view"
            tooltip="Show Pi Information"
            onClick={() => setShowPiInfo(prev => !prev)}
          />

          {showPiInfo && <div className="mt-4"><PiInformation /></div>}
        </Card>
      </div>
    </>
  );
};

export default LCDraftRequest;
