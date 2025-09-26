import type { FC } from "react";
import ChildLayout from "../../../templates/ChildLayout";
import Accordion from "../../../organism/Accordion/Accordion";
import CustomerDetails from "./CustomerDetails/CustomerDetails";
import LCDraftDetails from "./LCDraftDetails/LCDraftDetails";
import RequestDetails from "./RequestDetails/RequestDetails";
import Buttons from "../../../atoms/Buttons/Buttons";

const DraftPreview: FC = () => {
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

          <div className="flex justify-end my-8">
  
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

export default DraftPreview;
