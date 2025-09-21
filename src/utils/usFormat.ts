export const formatAmount = (amount: string | number): string => {
  if (typeof amount === "string") return amount;

  const num = parseFloat(amount.toString());
  if (isNaN(num)) return "0.00";

  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
};

export const removeUSFormatAmount = (amount?: string | number): number => {
  if (amount === undefined || amount === null) return 0;
  return Number(amount.toString().replace(/,/g, ""));
};
