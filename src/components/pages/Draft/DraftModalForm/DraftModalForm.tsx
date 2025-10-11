import type { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Buttons from "../../../atoms/Buttons/Buttons";
import { AtomInputFormik } from "../../../atoms/Input/AtomInputFormik";
import { fetchCurrency, selectAllCurrency } from "../../../../redux/slice/currencySlice";
import { fetchLcTypes, selectAllLcTypes } from "../../../../redux/slice/lcTypeSlice";
import type { AppDispatch, RootState } from "../../../../redux/store";

const useAppDispatch = () => useDispatch<AppDispatch>();

const validationSchema = Yup.object({
  cifNumber: Yup.string().required("CIF Number is required"),
  lcType: Yup.string().required("LC Type is required"),
  lcCurrency: Yup.string().required("LC Currency is required"),
});

interface DraftModalFormProps {
  onSubmitSuccess?: () => void;
}

const DraftModalForm: FC<DraftModalFormProps> = ({ onSubmitSuccess }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // selectors
  const currencies = useSelector((state: RootState) => selectAllCurrency(state));
  const lcTypes = useSelector((state: RootState) => selectAllLcTypes(state));

  useEffect(() => {
    dispatch(fetchCurrency())
      .unwrap()
      .catch((err) => console.error("Failed to fetch currencies:", err));

    dispatch(fetchLcTypes())
      .unwrap()
      .catch((err) => console.error("Failed to fetch LC types:", err));
  }, [dispatch]);

  const lcCurrencyOptions =
    currencies && currencies.length
      ? currencies.map((c) => ({ value: c.id, label: c.name }))
      : [{ value: "", label: "Loading currencies..." }];

  const lcTypeOptions =
    lcTypes && lcTypes.length
      ? lcTypes.map((t) => ({ value: t.id, label: t.name }))
      : [{ value: "", label: "Loading LC types..." }];

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

        if (onSubmitSuccess) onSubmitSuccess();

        navigate("/DraftForm");
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

export default DraftModalForm;
