import type { FC } from "react";
import { useFormikContext } from "formik";
import { currencyOptions } from "../../../../../utils/ListOfValues"; // adjust path as needed

type Values = {
  extractPreviousDraft: string;
  lcReferenceNumber: string;
  sequenceOfTotal: string;
  formOfDocumentaryCredit: string;
  creditType: string;
  documentaryCreditNumber: string;
  dateOfIssue: string | null;
  applicableRules: string;
  dateOfExpiry: string | null;
  placeOfExpiry: string;
  applicant: string;
  beneficiary: string;
  currencyCode: string; // stores the UUID from options
  amount: string;
  tolerance: string;
  availableWith: string;
  availableBy: string;
  mixedPaymentDetails: string;
  paymentTerms: string;
  drawee: string;
  partialShipments: string;
  transhipments: string;
  placeOfTakingInCharge: string;
  portOfLoading: string;
  portOfDischarge: string;
  latestDateOfShipment: string | null;
  placeOfFinalDestination: string;
  descriptionOfGoods: string;
  documentsRequired: string;
  additionalConditions: string;
  charges: string;
  periodOfPresentation: string;
  confirmationInstructions: string;
  requestedConfirmationParty: string;
  reimbursingBank: string;
  instructionsToBank: string;
  adviseThroughBank: string;
  senderToReceiverInformation: string;
};

const LCDraftDetails: FC = () => {
  const { values } = useFormikContext<Values>();

  const getCurrencyLabel = (val?: string) => {
    if (!val) return "";
    const opt = currencyOptions.find(o => String(o.value) === String(val));
    return opt?.label ?? val; // fall back to raw if not found
  };

  const fmt = (v: unknown) => (v === null || v === undefined || v === "" ? "—" : String(v));

  // naive date formatter: displays only YYYY-MM-DD if possible
  const fmtDate = (v: string | null) => {
    if (!v) return "—";
    // supports ISO strings from DatePicker or plain yyyy-mm-dd
    const d = new Date(v);
    if (!isNaN(d.getTime())) {
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    }
    // if not parseable, return as-is
    return v;
  };

  const rows: { label: string; value: string }[] = [
    { label: "Extract Previous Draft", value: fmt(values.extractPreviousDraft) },
    { label: "LC Reference Number", value: fmt(values.lcReferenceNumber) },
    { label: "Sequence of Total", value: fmt(values.sequenceOfTotal) },
    { label: "Form of Documentary Credit", value: fmt(values.formOfDocumentaryCredit) },
    { label: "Type of Credit", value: fmt(values.creditType) },
    { label: "Documentary Credit Number", value: fmt(values.documentaryCreditNumber) },
    { label: "Date of Issue", value: fmtDate(values.dateOfIssue) },
    { label: "Applicable Rules", value: fmt(values.applicableRules) },
    { label: "Date of Expiry", value: fmtDate(values.dateOfExpiry) },
    { label: "Place of Expiry", value: fmt(values.placeOfExpiry) },
    { label: "Applicant", value: fmt(values.applicant) },
    { label: "Beneficiary", value: fmt(values.beneficiary) },
    { label: "Currency Code", value: fmt(getCurrencyLabel(values.currencyCode)) },
    { label: "Amount", value: fmt(values.amount) },
    { label: "Tolerance", value: fmt(values.tolerance) },
    { label: "Available With", value: fmt(values.availableWith) },
    { label: "Available By", value: fmt(values.availableBy) },
    { label: "Mixed Payment Details", value: fmt(values.mixedPaymentDetails) },
    { label: "Payment Terms", value: fmt(values.paymentTerms) },
    { label: "Drawee", value: fmt(values.drawee) },
    { label: "Partial Shipments", value: fmt(values.partialShipments) },
    { label: "Transhipments", value: fmt(values.transhipments) },
    { label: "Place of Taking in Charge / Dispatch / Receipt", value: fmt(values.placeOfTakingInCharge) },
    { label: "Port of Loading", value: fmt(values.portOfLoading) },
    { label: "Port of Discharge / Destination", value: fmt(values.portOfDischarge) },
    { label: "Latest Date of Shipment", value: fmtDate(values.latestDateOfShipment) },
    { label: "Place of Final Destination", value: fmt(values.placeOfFinalDestination) },
    { label: "Description of Goods", value: fmt(values.descriptionOfGoods) },
    { label: "Documents Required", value: fmt(values.documentsRequired) },
    { label: "Additional Conditions", value: fmt(values.additionalConditions) },
    { label: "Charges", value: fmt(values.charges) },
    { label: "Period of Presentation", value: fmt(values.periodOfPresentation) },
    { label: "Confirmation Instructions", value: fmt(values.confirmationInstructions) },
    { label: "Requested Confirmation Party", value: fmt(values.requestedConfirmationParty) },
    { label: "Reimbursing Bank", value: fmt(values.reimbursingBank) },
    { label: "Instructions to Paying/Accepting/Negotiating Bank", value: fmt(values.instructionsToBank) },
    { label: "Advise Through Bank", value: fmt(values.adviseThroughBank) },
    { label: "Sender to Receiver Information", value: fmt(values.senderToReceiverInformation) },
  ];

  return (
    <div>
      <div className="cursor-pointer rounded-[8px] bg-white text-gray-800">
        <div className="relative py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 py-4 gap-4">
            {rows.map((item, idx) => (
              <div key={idx} className="flex flex-col p-2 border border-gray-300 rounded-md">
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

export default LCDraftDetails;
