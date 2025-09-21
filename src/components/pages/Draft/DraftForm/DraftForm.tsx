import type { FC } from "react";
import ChildLayout from "../../../templates/ChildLayout";
import Accordion from "../../../organism/Accordian/Accordian";
import Buttons from "../../../atoms/Buttons/Buttons";

const DraftForm: FC = () => {
    return (
        <ChildLayout title="Letter of Credit Draft Form" showButton={false}>
            <Accordion title="LC Draft Request" isFirstOpen>
                <p>Request details </p>
            </Accordion>
            <Accordion title="Customer Details">
                <p>form fields.</p>
            </Accordion>

            <Accordion title="LC Draft Details">
                <p>form fields.</p>
            </Accordion>

            <Accordion title="Document Upload">
                <p>form fields.</p>
            </Accordion>

            <div className="flex justify-between my-8">
                <Buttons label="Back" color="primary" />
                <Buttons label="Submit" color="primary" showarrowicon />
            </div>
        </ChildLayout>
    );
};

export default DraftForm;
