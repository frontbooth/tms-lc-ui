import type { FC } from 'react'

const CustomerDetails: FC = () => {
  const dummyData = [
    { label: 'Applicant Name', value: 'Jane Doe' },
    { label: 'Address', value: 'Kathmandu, Nepal' },
    { label: 'Email ID', value: 'jane.doe@example.com' },
    { label: 'URM', value: 'URM001' },
    { label: 'CIF', value: 'CIF123456' },
    { label: 'Registration Number', value: 'REG987654' },
    { label: 'PAN', value: 'PAN123456' },
    { label: 'EXIM Code', value: 'EXIM7890' },
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

export default CustomerDetails
