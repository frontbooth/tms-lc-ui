import type { FC } from "react";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ChildLayout from "../../../templates/ChildLayout";
import Accordion from "../../../organism/Accordion/Accordion";
import Buttons from "../../../atoms/Buttons/Buttons";
import LCIssuanceRequest from "./LCIssuanceRequest/LCIssuanceRequest";
import CustomerDetails from "./CustomerDetails/CustomerDetails";
import { UseScrollToFirstError } from "../../../atoms/hooks/UseScrollToFirstError";
import LCIssuanceDetails from "./LCIssuanceDetails/LCIssuanceDetails";
import ConductorDetails from "./ConductorDetails/ConductorDetails";
import LimitInformation from "./LimitInformation/LimitInformation";
import MarginCommissionDetails from "./MarginCommissionDetails/MarginCommissionDetails";
import ChecklistInformation from "./ChecklistInformation/ChecklistInformation";
import IssuancePreview from "../IssuancePreview/IssuancePreview";
import FixedDateConverterButton from "../../../molecules/DateConverter/DateConverter";
import DocumentUpload from "./DocumentUpload/DocumentUpload";

const validationSchema = Yup.object({
  requestInitiatedBy: Yup.string().required("Request Initiated By is required"),
  requestInitiatedFrom: Yup.string().required("Request Initiated From is required"),
  solId: Yup.string().required("SOL ID is required"),
  applicantName: Yup.string().required("Applicant Name is required"),
  address: Yup.string().required("Address is required"),
  emailId: Yup.string().email("Invalid Email format").required("Email ID is required"),
  urm: Yup.string().required("URM is required"),
  cif: Yup.string().required("CIF is required"),
  registrationNumber: Yup.string().required("Registration Number is required"),
  pan: Yup.string().required("PAN is required"),
  eximCode: Yup.string().required("EXIM Code is required"),
});

const IssuanceForm: FC = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>{!showPreview && <FixedDateConverterButton />}
    <ChildLayout
      title="Letter of Credit Issuance Form"
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
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form Submitted:", values);
          setShowPreview(true);
        }}
      >
        {({ errors, submitCount }) => {
          if (submitCount > 0 && Object.keys(errors).length > 0 && !isAllOpen) {
            setIsAllOpen(true);
          }

   
          UseScrollToFirstError(errors, submitCount);

          return (
            <Form>
              <div
                id="lc-issuance-form-pane"
                className={showPreview ? "hidden" : "block"}
                aria-hidden={showPreview ? "true" : "false"}
              >
                <LCIssuanceRequest />

                <Accordion title="Customer Details" isAllOpen={isAllOpen}>
                  <CustomerDetails />
                </Accordion>

                   <Accordion title="LC Details" isAllOpen={isAllOpen}>
                  <LCIssuanceDetails />
                </Accordion>

                  <Accordion title="Conductor Details" isAllOpen={isAllOpen}>
                  <ConductorDetails />
                </Accordion>

                  <Accordion title="Checklist Information" isAllOpen={isAllOpen}>
                  <ChecklistInformation />
                </Accordion>

                 <Accordion title="Limit Information" isAllOpen={isAllOpen}>
                  <LimitInformation />
                </Accordion>

                   <Accordion title="Margin and Commission Details" isAllOpen={isAllOpen}>
                  <MarginCommissionDetails />
                </Accordion>

                  <Accordion title="Document Upload" isAllOpen={isAllOpen}>
                  <DocumentUpload />
                </Accordion>

                <div className="flex justify-between my-8">
                  <Buttons label="Back" color="primary" />
                  <Buttons
                    label="Submit"
                    color="secondary"
                    showarrowicon
                    type="submit"
                  />
                </div>
              </div>

              {showPreview && (
                <div
                  id="lc-issuance-form-preview"
                  className="block"
                  aria-hidden="false"
                >
                  <div className="text-center text-lg font-semibold">
                    <IssuancePreview setShowPreview={setShowPreview} />
                  </div>
                </div>
              )}
            </Form>
          );
        }}
      </Formik>
    </ChildLayout>
    </>
  );
};

export default IssuanceForm;
