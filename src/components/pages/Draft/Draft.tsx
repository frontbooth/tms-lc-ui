import type { FC } from "react";
import { useState } from "react";
import ChildLayout from "../../templates/ChildLayout";
import MainTable from "../../organism/Table/MainTable";
import type { ColumnsType } from "antd/es/table";
import ReusableModal from "../../molecules/Modal/ReusableModal"; 
import DraftModalForm from "./DraftModalForm/DraftModalForm";

interface DraftRecord {
  id: string;
  customerName: string;
  beneficiaryName: string;
  cif: string;
  lcReferenceNo: string;
}

const Draft: FC = () => {
  const [searchText, setSearchText] = useState("");


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNew = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const dataSource: DraftRecord[] = [
    {
      id: "1",
      customerName: "ABC Pvt. Ltd.",
      beneficiaryName: "XYZ Trading Co.",
      cif: "123456",
      lcReferenceNo: "LC001",
    },
    {
      id: "2",
      customerName: "DEF Enterprises",
      beneficiaryName: "LMN Exports",
      cif: "789012",
      lcReferenceNo: "LC002",
    },
    {
      id: "3",
      customerName: "ABC Pvt. Ltd.",
      beneficiaryName: "XYZ Trading Co.",
      cif: "123456",
      lcReferenceNo: "LC003",
    },
    {
      id: "4",
      customerName: "DEF Enterprises",
      beneficiaryName: "LMN Exports",
      cif: "789012",
      lcReferenceNo: "LC004",
    },
  ];

  const columns: ColumnsType<DraftRecord> = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Beneficiary Name",
      dataIndex: "beneficiaryName",
      key: "beneficiaryName",
    },
    {
      title: "CIF",
      dataIndex: "cif",
      key: "cif",
    },
    {
      title: "LC Reference No",
      dataIndex: "lcReferenceNo",
      key: "lcReferenceNo",
    },
  ];

  return (
    <>
      <ChildLayout
        title="Letter of Credit Draft"
        showButton={true}
        onButtonClick={handleAddNew}
      >
        <MainTable<DraftRecord>
          searchText={searchText}
          setSearchText={setSearchText}
          columns={columns}
          dataSource={dataSource}
          pageSize={10}
          showResultCount={true}
          showSearch={true}
        />
      </ChildLayout>

      <ReusableModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        name="Add New Draft"
        modalIcon="true"
        width={700}
      >
       <DraftModalForm />
      </ReusableModal>
    </>
  );
};

export default Draft;
