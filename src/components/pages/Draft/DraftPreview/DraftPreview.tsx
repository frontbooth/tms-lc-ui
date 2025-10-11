import type { FC } from "react";
import ChildLayout from "../../../templates/ChildLayout";
import Accordion from "../../../organism/Accordion/Accordion";
import CustomerDetails from "./CustomerDetails/CustomerDetails";
import LCDraftDetails from "./LCDraftDetails/LCDraftDetails";
import RequestDetails from "./RequestDetails/RequestDetails";
import Buttons from "../../../atoms/Buttons/Buttons";

interface DraftPreviewProps {
  setShowPreview?: React.Dispatch<React.SetStateAction<boolean>>; // make optional
}

const DraftPreview: FC<DraftPreviewProps> = ({ setShowPreview }) => {
  return (
    <ChildLayout
      title="Letter of Credit Draft Form"
      showButton={false}
      withCardStyle={false}
    >
      <Accordion title="Request Details" isFirstOpen>
        <RequestDetails />
      </Accordion>

      <Accordion title="Customer Details">
        <CustomerDetails />
      </Accordion>

      <Accordion title="LC Draft Details">
        <LCDraftDetails />
      </Accordion>

      <div className="flex justify-between my-8">
        {setShowPreview && (
          <Buttons
            label="Back"
            color="primary"
            showarrowicon
            type="button"
            onClick={() => setShowPreview(false)}
          />
        )}
        <Buttons label="Submit" color="secondary" showarrowicon type="submit" />
      </div>
    </ChildLayout>
  );
};

export default DraftPreview;
