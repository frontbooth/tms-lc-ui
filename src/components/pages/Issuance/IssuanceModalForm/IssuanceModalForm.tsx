import type { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Buttons from "../../../atoms/Buttons/Buttons";
import { AtomInputFormik } from "../../../atoms/Input/AtomInputFormik"; 


const lcTypeOptions = [
  { value: "Sight", label: "Sight" },
  { value: "Usance", label: "Usance" },
];

const lcCurrencyOptions = [
  { value: "FCY", label: "FCY" },
  { value: "INR", label: "INR" },
  { value: "LCY", label: "LCY" },
];

const validationSchema = Yup.object({
  cifNumber: Yup.string().required("CIF Number is required"),
  lcType: Yup.string().required("LC Type is required"),
  lcCurrency: Yup.string().required("LC Currency is required"),
});

const IssuanceModalForm: FC = () => {
  const navigate = useNavigate(); 

  return (
    <Formik
      initialValues={{
        cifNumber: "",
        lcType: "",
        lcCurrency: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Submitted:", values);
        navigate("/IssuanceForm");
      }}
    >
      {({ handleSubmit }) => (
        <Form className="space-y-4">
     
          <AtomInputFormik
            name="cifNumber"
            label="CIF Number"
            placeholder="Enter CIF Number"
            required
            type="text"
          />

     
          <AtomInputFormik
            name="lcType"
            label="LC Type"
            placeholder="Select LC Type"
            type="select"
            options={lcTypeOptions}
            required
          />

   
          <AtomInputFormik
            name="lcCurrency"
            label="LC Currency"
            placeholder="Select LC Currency"
            type="select"
            options={lcCurrencyOptions}
            required
          />

   
          <div className="flex justify-end">
            <Buttons
              type="submit"
              label="Submit"
              color="secondary"
              className="mt-4"
              onClick={() => handleSubmit()}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default IssuanceModalForm;
