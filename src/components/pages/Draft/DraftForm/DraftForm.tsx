import type { FC } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChildLayout from "../../../templates/ChildLayout";
import Accordion from "../../../organism/Accordion/Accordion";
import Buttons from "../../../atoms/Buttons/Buttons";
import LCDraftRequest from "./LCDraftRequest/LCDraftRequest";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomerDetails from "./CustomerDetails/CustomerDetails";
import LCDraftDetails from "./LCDraftDetails/LCDraftDetails";
import { UseScrollToFirstError } from "../../../atoms/hooks/UseScrollToFirstError";
import DocumentUpload from "./DocumentUpload/DocumentUpload";
import DraftPreview from "../DraftPreview/DraftPreview";

const validationSchema = Yup.object({
  requestInitiatedBy: Yup.string().required("Request Initiated By is required"),
  requestInitiatedFrom: Yup.string().required(
    "Request Initiated From is required"
  ),
  solId: Yup.string().required("SOL ID is required"),
  applicantName: Yup.string().required("Applicant Name is required"),
  address: Yup.string().required("Address is required"),
  emailId: Yup.string()
    .email("Invalid Email format")
    .required("Email ID is required"),
  urm: Yup.string().required("URM is required"),
  cif: Yup.string().required("CIF is required"),
  registrationNumber: Yup.string().required("Registration Number is required"),
  pan: Yup.string().required("PAN is required"),
  eximCode: Yup.string().required("EXIM Code is required"),
});

const DraftForm: FC = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const navigate = useNavigate();
  const [showPreview, setShowPreview] = useState(false);

  return (
    <ChildLayout
      title="Letter of Credit Draft Form"
      showButton={false}
      withCardStyle={false}
    >
      <Formik
        initialValues={{
          requestInitiatedBy: "Shristi Upadhaya",
          requestInitiatedFrom: "Hattisar",
          solId: "001",
          requestedDate: null,
          applicantName: "",
          address: "",
          emailId: "",
          urm: "",
          cif: "",
          registrationNumber: "",
          pan: "",
          eximCode: "",
          extractPreviousDraft: "",
          lcReferenceNumber: "",
          sequenceOfTotal: "",
          formOfDocumentaryCredit: "",
          creditType: "",
          documentaryCreditNumber: "",
          dateOfIssue: "",
          applicableRules: "",
          dateOfExpiry: "",
          placeOfExpiry: "",
          applicant: "",
          beneficiary: "",
          currencyCode: "",
          amount: "",
          tolerance: "",
          availableWith: "",
          availableBy: "",
          mixedPaymentDetails: "",
          paymentTerms: "",
          drawee: "",
          partialShipments: "",
          transhipments: "",
          placeOfTakingInCharge: "",
          portOfLoading: "",
          portOfDischarge: "",
          latestDateOfShipment: "",
          placeOfFinalDestination: "",
          descriptionOfGoods: "",
          documentsRequired: "",
          additionalConditions: "",
          charges: "",
          periodOfPresentation: "",
          confirmationInstructions: "",
          requestedConfirmationParty: "",
          reimbursingBank: "",
          instructionsToBank: "",
          adviseThroughBank: "",
          senderToReceiverInformation: "",
        }}
        // validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form Submitted:", values);
          setShowPreview(true);
          // navigate("/draft-preview", { state: values });
        }}
      >
        {({ errors, submitCount, values }) => {
          // open accordion on first submit if validationerrors exist in formik
          if (submitCount > 0 && Object.keys(errors).length > 0 && !isAllOpen) {
            setIsAllOpen(true);
          }

          //scroll to first error only after submit
          UseScrollToFirstError(errors, submitCount);

          return (
            <Form>
              <div
                id="lc-draft-form-pane"
                className={showPreview ? "hidden" : "block"}
                aria-hidden={showPreview ? "true" : "false"}
              >
                <LCDraftRequest />

                <Accordion title="Customer Details" isAllOpen={isAllOpen}>
                  <CustomerDetails />
                </Accordion>

                <Accordion title="LC Draft Details" isAllOpen={isAllOpen}>
                  <LCDraftDetails />
                </Accordion>

                <Accordion title="Document Upload" isAllOpen={isAllOpen}>
                  <DocumentUpload />
                </Accordion>

                <div className="flex justify-between my-8">
                  <Buttons label="Back" color="primary" />
                  <Buttons
                    label="Preview"
                    color="secondary"
                    showarrowicon
                    type="submit"
                  />
                </div>
              </div>
              <div
                id="lc-draft-form-preview"
                className={showPreview ? "block" : "hidden"}
                aria-hidden={showPreview ? "false" : "true"}
              >
                <DraftPreview setShowPreview={setShowPreview} />
              </div>
            </Form>
          );
        }}
      </Formik>
    </ChildLayout>
  );
};

export default DraftForm;
