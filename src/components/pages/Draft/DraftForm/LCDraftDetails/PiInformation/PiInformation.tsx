import type { FC } from "react";

const PiInformation: FC = () => {
  const piData = [
    {
      label: "Applicant Details",
      fields: [
        { field: "Name", value: "John Traders Pvt. Ltd." },
        { field: "Address", value: "New Baneshwor, Kathmandu" },
        { field: "Phone", value: "+977-1-5555555" },
        { field: "Email", value: "info@johntraders.com" },
      ],
    },
    {
      label: "Beneficiary Details",
      fields: [
        { field: "Name", value: "Global Exports Inc." },
        { field: "Address", value: "Tsim Sha Tsui, Hong Kong" },
        { field: "Phone", value: "+852-23456789" },
        { field: "Email", value: "contact@globalexports.com" },
      ],
    },
    { label: "Applicant's EXIM Code", fields: [{ field: "Code", value: "EXIM123456" }] },
    { label: "Description of Goods", fields: [{ field: "Goods", value: "Electronic Components and Accessories" }] },
    { label: "Currency, Quantity, Unit Price and Total Price", fields: [{ field: "Details", value: "USD | 100 Units | $50 each | Total $5000" }] },
    { label: "PI Number and Date", fields: [{ field: "PI", value: "PI-2401 | 12 Oct 2025" }] },
    { label: "Incoterm/Delivery Term", fields: [{ field: "Incoterm", value: "FOB - Hong Kong" }] },
    { label: "Payment Term/Mode", fields: [{ field: "Payment", value: "LC at Sight" }] },
    { label: "Harmonic Code", fields: [{ field: "Code", value: "8473.30.10" }] },
    { label: "Port or Place of Loading/Port of Discharge", fields: [{ field: "Port", value: "NM" }] },
    { label: "Country of Origin", fields: [{ field: "Country", value: "China" }] },
    { label: "Custom Entry Point", fields: [{ field: "Entry Point", value: "NM" }] },
    { label: "Final Destination", fields: [{ field: "Destination", value: "NM" }] },
    { label: "Business Credibility Report (BCI)", fields: [{ field: "BCI", value: "Required for LC >= USD 50,000 (Dummy BCI Report Attached)" }] },
  ];

  return (
    <div className="bg-gray-50 shadow-md rounded-2xl p-8 w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800 border-b pb-3">
        Proforma Invoice (PI) Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {piData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-5 bg-gray-50 hover:bg-gray-100 transition"
          >
            <p className="font-medium text-gray-800 mb-3">{item.label}</p>
            <div className="text-gray-700 text-sm space-y-1">
              {item.fields.map((f, i) => (
                <p key={i}>
                  <span className="font-semibold">{f.field}:</span> {f.value}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PiInformation;
