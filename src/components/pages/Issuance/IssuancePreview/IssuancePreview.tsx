import type { FC } from "react";
import ChildLayout from "../../../templates/ChildLayout";
import Accordion from "../../../organism/Accordion/Accordion";
import CustomerDetails from "./CustomerDetails/CustomerDetails";
import RequestDetails from "./RequestDetails/RequestDetails";
import Buttons from "../../../atoms/Buttons/Buttons";
import LCDetails from "./LCDetails/LCDetails";

interface IssuancePreviewProps {
  setShowPreview?: React.Dispatch<React.SetStateAction<boolean>>;
}

const IssuancePreview: FC<IssuancePreviewProps> = ({ setShowPreview }) => {
  return (
    <ChildLayout

      showButton={false}
      withCardStyle={false}
    >
      <Accordion title="Request Details" isFirstOpen>
        <RequestDetails />
      </Accordion>

      <Accordion title="Customer Details">
        <CustomerDetails />
      </Accordion>

      <Accordion title="LC Details">
        <LCDetails />
      </Accordion>

      <div className="flex justify-between my-8">
        <Buttons
          label="Back"
          color="primary"
          showarrowicon
          type="button"
          onClick={() => {
            if (setShowPreview) {
              setShowPreview(false);
            } else {
              window.history.back();
            }
          }}
        />

        <Buttons
          label="Submit"
          color="secondary"
          showarrowicon
          type="submit"
        />
      </div>
    </ChildLayout>
  );
};

export default IssuancePreview;
