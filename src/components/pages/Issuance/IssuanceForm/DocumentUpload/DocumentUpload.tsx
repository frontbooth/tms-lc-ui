import type { FC } from "react";
import { useState } from "react";
import { Select, Upload, Button as AntButton } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Buttons from "../../../../atoms/Buttons/Buttons"; 

const { Option } = Select;

interface DocumentRow {
  id: number;
}

const DocumentUpload: FC = () => {
  const [rows, setRows] = useState<DocumentRow[]>([{ id: Date.now() }]);

  const addRow = () => {
    setRows(prev => [...prev, { id: Date.now() }]);
  };

  const removeRow = (id: number) => {
    setRows(prev => prev.filter(row => row.id !== id));
  };

  return (
    <div className="space-y-4">
      {rows.map(row => (
        <div
          key={row.id}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center"
        >

          <div className="w-full">
            <label className="block mb-1 text-sm font-medium">Document Type</label>
            <Select placeholder="Select Document Type" className="w-full">
              <Option value="passport">Passport</Option>
              <Option value="license">License</Option>
              <Option value="idcard">ID Card</Option>
            </Select>
          </div>


          <div className="w-full">
            <label className="block mb-1 text-sm font-medium">Upload Document</label>
            <Upload
              name="file"
              multiple={false}
              maxCount={1}
              beforeUpload={() => false}
              style={{ display: 'block', width: '100%' }}
              className="w-full"
            >
              <AntButton icon={<UploadOutlined />} className="w-full">
                Click to Upload
              </AntButton>
            </Upload>
          </div>

     
          <div className="flex items-end h-full w-full">
            {rows.length > 1 && (
              <Buttons
                color="danger"
                label=""
                showremoveicon
                className="w-full"
                type="button"
                onClick={() => removeRow(row.id)}
              />
            )}
          </div>
        </div>
      ))}


      <div className="flex justify-end">
        <Buttons
          color="primary"
          label="Add Document"
          showicon
          type="button"
          onClick={addRow}
        />
      </div>
    </div>
  );
};

export default DocumentUpload;
