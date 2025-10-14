import type { FC } from 'react'

const RequestDetails: FC = () => {
  const dummyData = [
    { label: 'Request Initiated By', value: 'John Doe' },
    { label: 'Request Initiated From', value: 'Kathmandu Branch' },
    { label: 'SOL ID', value: 'SOL12345' },
    { label: 'Requested Date', value: '2025-09-26' },
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

export default RequestDetails
