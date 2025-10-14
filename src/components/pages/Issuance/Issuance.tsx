import { useState } from "react";
import type { FC } from "react";
import ChildLayout from "../../templates/ChildLayout";
import MainTable from "../../organism/Table/MainTable";
import ReusableModal from "../../molecules/Modal/ReusableModal";
import ReusableTabs from "../../molecules/Tabs/Tabs/ReusableTabs";
import type { ColumnsType } from "antd/es/table";
import IssuanceModalForm from "./IssuanceModalForm/IssuanceModalForm";

interface IssuanceRecord {
  id: string;
  customerName: string;
  beneficiaryName: string;
  cif: string;
  lcReferenceNo: string;
}

const Issuance: FC = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("0");

  const handleAddNew = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleTabChange = (key: string) => setActiveTab(key);

  const columns: ColumnsType<IssuanceRecord> = [
    { title: "Customer Name", dataIndex: "customerName", key: "customerName" },
    { title: "Beneficiary Name", dataIndex: "beneficiaryName", key: "beneficiaryName" },
    { title: "CIF", dataIndex: "cif", key: "cif" },
    { title: "LC Reference No", dataIndex: "lcReferenceNo", key: "lcReferenceNo" },
  ];


  const bucketData: IssuanceRecord[] = [
    { id: "1", customerName: "ABC Pvt. Ltd.", beneficiaryName: "XYZ Trading Co.", cif: "123456", lcReferenceNo: "LC001" },
    { id: "2", customerName: "DEF Enterprises", beneficiaryName: "LMN Exports", cif: "789012", lcReferenceNo: "LC002" },
  ];

  const initiatedData: IssuanceRecord[] = [
    { id: "3", customerName: "GHI Ltd.", beneficiaryName: "OPQ Traders", cif: "345678", lcReferenceNo: "LC003" },
  ];

  const inProgressData: IssuanceRecord[] = [
    { id: "4", customerName: "JKL Corp.", beneficiaryName: "RST Exports", cif: "901234", lcReferenceNo: "LC004" },
  ];


  const tabDataMap: Record<string, IssuanceRecord[]> = {
    "0": bucketData,
    "1": initiatedData,
    "2": inProgressData,
  };

  return (
    <>
      <ChildLayout
        title="Letter of Credit Issuance"
        showButton={true}
        onButtonClick={handleAddNew}
      >
        <ReusableTabs
          value={activeTab}
          handleTabChange={handleTabChange}
        />

  
        <MainTable<IssuanceRecord>
          searchText={searchText}
          setSearchText={setSearchText}
          columns={columns}
          dataSource={tabDataMap[activeTab] || []}
          pageSize={10}
          showResultCount={true}
          showSearch={true}
        />
      </ChildLayout>

      <ReusableModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        name="Add New Issuance"
        modalIcon="true"
        width={700}
      >
        <IssuanceModalForm />
      </ReusableModal>
    </>
  );
};

export default Issuance;
