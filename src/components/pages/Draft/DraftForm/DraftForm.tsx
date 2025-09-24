import type { FC } from "react";
import { useState, useEffect } from "react";
import ChildLayout from "../../../templates/ChildLayout";
import Accordion from "../../../organism/Accordian/Accordian";
import Buttons from "../../../atoms/Buttons/Buttons";
import LCDraftRequest from "./LCDraftRequest/LCDraftRequest";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomerDetails from "./CustomerDetails/CustomerDetails";

const validationSchema = Yup.object({
  requestInitiatedBy: Yup.string().required("Request Initiated By is required"),
  requestInitiatedFrom: Yup.string().required("Request Initiated From is required"),
  solId: Yup.string().required("SOL ID is required"),
  requestedDate: Yup.date().required("Requested Date is required"),

  applicantName: Yup.string().required("Applicant Name is required"),
  address: Yup.string().required("Address is required"),
  emailId: Yup.string().email("Invalid Email format").required("Email ID is required"),
  urm: Yup.string().required("URM is required"),
  cif: Yup.string().required("CIF is required"),
  registrationNumber: Yup.string().required("Registration Number is required"),
  pan: Yup.string().required("PAN is required"),
  eximCode: Yup.string().required("EXIM Code is required"),
});

const DraftForm: FC = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);

  return (
    <ChildLayout title="Letter of Credit Draft Form" showButton={false} withCardStyle={false}>
      <Formik
        initialValues={{
          requestInitiatedBy: "",
          requestInitiatedFrom: "",
          solId: "",
          requestedDate: "",
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
        }}
      >
        {({ errors, submitCount }) => {
          // open all accordions if there are validation errors on submit with formik
          useEffect(() => {
            if (submitCount > 0 && Object.keys(errors).length > 0) {
              setIsAllOpen(true);
            } else {
              setIsAllOpen(false);
            }
          }, [errors, submitCount]);

          return (
            <Form>
              <LCDraftRequest />

              <Accordion title="Customer Details" isAllOpen={isAllOpen}>
                <CustomerDetails />
              </Accordion>

              <Accordion title="LC Draft Details" isAllOpen={isAllOpen}>
                <p>form fields.</p>
              </Accordion>

              <Accordion title="Document Upload" isAllOpen={isAllOpen}>
                <p>form fields.</p>
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
            </Form>
          );
        }}
      </Formik>
    </ChildLayout>
  );
};

export default DraftForm;
