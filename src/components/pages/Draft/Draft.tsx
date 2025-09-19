import type { FC } from "react";
import ChildLayout from "../../templates/ChildLayout"; 

const Draft: FC = () => {
  const handleAddNew = () => {
    alert("Add New clicked!");
  };

  return (
    <ChildLayout
      title="Letter of Credit Draft"
      showButton={true} 
      onButtonClick={handleAddNew} 
    >
      <p>This is the Draft page content.</p>
    </ChildLayout>
  );
};

export default Draft;
