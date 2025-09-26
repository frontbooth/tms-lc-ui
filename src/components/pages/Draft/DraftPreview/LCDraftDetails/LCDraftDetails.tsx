import type { FC } from 'react'

const LCDraftDetails: FC = () => {
  const dummyData = [
    { label: 'Extract Previous Draft', value: 'Yes' },
    { label: 'LC Reference Number', value: 'LC123456789' },
    { label: 'Sequence of Total', value: '1 of 1' },
    { label: 'Form of Documentary Credit', value: 'Irrevocable' },
    { label: 'Type of Credit', value: 'Sight Credit' },
    { label: 'Documentary Credit Number', value: 'DC987654321' },
    { label: 'Date of Issue', value: '2025-09-20' },
    { label: 'Applicable Rules', value: 'UCP 600' },
    { label: 'Date of Expiry', value: '2025-12-31' },
    { label: 'Place of Expiry', value: 'Kathmandu, Nepal' },
    { label: 'Applicant', value: 'ABC Pvt. Ltd.' },
    { label: 'Beneficiary', value: 'XYZ Traders' },
    { label: 'Currency Code', value: 'USD' },
    { label: 'Amount', value: '100,000' },
    { label: 'Tolerance', value: '±5%' },
    { label: 'Available With', value: 'Any Bank' },
    { label: 'Available By', value: 'Payment' },
    { label: 'Mixed Payment Details', value: 'N/A' },
    { label: 'Payment Terms', value: 'At Sight' },
    { label: 'Drawee', value: '42A: SIDD NPK AXXX' },
    { label: 'Partial Shipments', value: 'Allowed' },
    { label: 'Transhipments', value: 'Not Allowed' },
    { label: 'Place of Taking in Charge / Dispatch / Receipt', value: 'Factory, Kathmandu' },
    { label: 'Port of Loading', value: 'Port of Kolkata' },
    { label: 'Port of Discharge / Destination', value: 'Port of Chennai' },
    { label: 'Latest Date of Shipment', value: '2025-11-30' },
    { label: 'Place of Final Destination', value: 'Kathmandu Warehouse' },
    { label: 'Description of Goods', value: 'Electronics and Accessories' },
    { label: 'Documents Required', value: 'Invoice, Bill of Lading, Insurance Certificate' },
    { label: 'Additional Conditions', value: 'N/A' },
    { label: 'Charges', value: 'Bank Charges to be borne by Applicant' },
    { label: 'Period of Presentation', value: '21 Days' },
    { label: 'Confirmation Instructions', value: 'Confirm' },
    { label: 'Requested Confirmation Party', value: 'XYZ Bank Ltd.' },
    { label: 'Reimbursing Bank', value: 'ABC Bank Ltd.' },
    { label: 'Instructions to Paying/Accepting/Negotiating Bank', value: 'Please pay at sight' },
    { label: 'Advise Through Bank', value: 'DEF Bank Ltd.' },
    { label: 'Sender to Receiver Information', value: 'Handle with care, urgent delivery' },
  ]

  return (
    <div>
      <div className="cursor-pointer rounded-[8px] bg-white text-gray-800">
        <div className="relative py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 py-4 gap-4">
            {dummyData.map((item, index) => (
              <div key={index} className="flex flex-col p-2 border border-gray-300 rounded-md">
                <strong>{item.label}:</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LCDraftDetails
