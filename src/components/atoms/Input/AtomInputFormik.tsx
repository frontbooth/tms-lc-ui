import { Checkbox, DatePicker, Input, Radio, Select } from "antd";
import type { InputRef } from "antd";
import dayjs, { Dayjs } from "dayjs";
import type { FormikValues } from "formik";
import { useFormikContext } from "formik";
import { forwardRef, useState } from "react";
import { formatAmount } from "../../../utils/usFormat";
import type { ReactNode, FocusEvent } from "react";

// --------------------------------------------
// Type for synthetic value events (masked/amount inputs)
// This allows us to simulate Formik-style events.
// --------------------------------------------
type ValueChangeEvent = { target: { value: string } };

// --------------------------------------------
// Props for MaskedInput component
// Supports AntD Input styling, size, mask formatting
// --------------------------------------------
interface MaskedInputProps {
  maskFormat: string; // e.g., "999-999-9999"
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | ValueChangeEvent) => void;
  size?: "small" | "middle" | "large";
  style?: React.CSSProperties;
  [key: string]: any;
}

// --------------------------------------------
// MaskedInput: formats input according to mask
// --------------------------------------------
const MaskedInput: React.FC<MaskedInputProps> = ({
  maskFormat,
  placeholder,
  value,
  onChange,
  size,
  style,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>(value || "");

  // Function to apply mask
  const formatValue = (val: string) => {
    if (!val) return "";
    let formatted = "";
    let valIndex = 0;
    for (let i = 0; i < maskFormat.length && valIndex < val.length; i++) {
      const maskChar = maskFormat[i];
      if (maskChar === "9") {
        if (/\d/.test(val[valIndex])) {
          formatted += val[valIndex];
          valIndex++;
        } else {
          valIndex++;
          i--;
        }
      } else {
        formatted += maskChar;
      }
    }
    return formatted;
  };

  // Handler for input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, "");
    const formattedValue = formatValue(rawValue);
    setInputValue(formattedValue);
    onChange?.({ target: { value: formattedValue } });
  };

  return (
    <Input
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      size={size}
      style={style}
      {...props}
    />
  );
};

// --------------------------------------------
// Type for select, radio, checkbox options
// --------------------------------------------
interface Option {
  value: string | number;
  label: string | ReactNode;
}

// --------------------------------------------
// Props for AtomInputFormik
// Supports multiple input types: text, number, textarea, password, mask, radio, checkbox, select, date, amount
// --------------------------------------------
interface AtomInputFormikProps {
  name: string;
  type?:
    | "text"
    | "number"
    | "textarea"
    | "password"
    | "mask"
    | "radio"
    | "checkbox"
    | "select"
    | "date"
    | "amount";
  label?: string; // Label above input
  checkedLabel?: string; // Label next to checkbox
  required?: boolean;
  maskFormat?: string; // for mask type
  max?: number; // max length
  options?: Option[];
  multiple?: boolean; // for select multiple
  size?: "small" | "middle" | "large";
  showSearch?: boolean; // for select search
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | ValueChangeEvent) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement> | ValueChangeEvent) => void;
  style?: React.CSSProperties;
  labelClassName?: string;
  [key: string]: any;
}

// --------------------------------------------
// AtomInputFormik Component
// Wraps AntD inputs with Formik integration
// --------------------------------------------
const AtomInputFormik = forwardRef<InputRef, AtomInputFormikProps>(
  (
    {
      size = "large",
      type = "text",
      maskFormat,
      max,
      options = [],
      placeholder,
      multiple,
      name,
      onChange,
      onBlur,
      label,
      checkedLabel,
      labelClassName = "block text-sm font-normal text-gray-700 mb-2",
      required,
      showSearch = true,
      ...props
    },
    ref
  ) => {
    // Formik hooks
    const {
      values,
      errors,
      touched,
      handleChange: formikHandleChange,
      handleBlur: formikHandleBlur,
      setFieldValue,
    } = useFormikContext<FormikValues>();

    const value = values?.[name];
    const error = touched?.[name] && errors?.[name];

    const errorStyle: React.CSSProperties = { borderColor: "#ff4d4f" };

    // Generic change wrapper to handle Formik and external onChange
    const handleChangeWrapper = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | ValueChangeEvent
    ) => {
      if (!("nativeEvent" in e)) {
        formikHandleChange({ target: { name, value: e.target.value } });
      } else {
        formikHandleChange(e);
      }
      onChange?.(e);
    };

    // Generic blur wrapper
    const handleBlurWrapper = (
      e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement> | ValueChangeEvent
    ) => {
      if (!("nativeEvent" in e)) {
        formikHandleBlur({ target: { name, value: e.target.value } } as any);
      } else {
        formikHandleBlur(e);
      }
      onBlur?.(e);
    };

    // Specialized handlers for radio, select, checkbox
    const handleRadioChange = (e: any) => {
      setFieldValue(name, e.target.value);
      onChange?.(e);
    };

    const handleSelectChange = (val: any) => {
      setFieldValue(name, val);
      onChange?.({ target: { value: val } });
    };

    const handleCheckboxChange = (e: any) => {
      setFieldValue(name, e.target.checked);
      onChange?.(e);
    };

    // Convert string to Dayjs for DatePicker
    const pickerValue: Dayjs | null =
      value && typeof value === "string" ? dayjs(value) : (value as Dayjs) || null;

    // Render input based on type
    const renderInput = () => {
      const commonProps = {
        name,
        placeholder,
        size,
        style: error ? { ...errorStyle, ...props.style } : props.style,
        ...props,
      };

      switch (type) {
        case "textarea":
          return (
            <Input.TextArea
              {...commonProps}
              ref={ref}
              value={value}
              onChange={handleChangeWrapper}
              onBlur={handleBlurWrapper}
              maxLength={max}
            />
          );
        case "number":
          return (
            <Input
              {...commonProps}
              ref={ref}
              value={value}
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, "");
                setFieldValue(name, digits);
                onChange?.(e);
              }}
              inputMode="numeric"
              pattern="\d*"
              onBlur={handleBlurWrapper}
              style={{ width: "100%", ...(error ? errorStyle : {}), ...props.style }}
            />
          );
        case "date":
          return (
            <DatePicker
              {...commonProps}
              value={pickerValue}
              disabledDate={props.disabledDate}
              onChange={(date) =>
                setFieldValue(name, date ? date.toISOString() : "")
              }
              style={{ width: "100%", ...(error ? errorStyle : {}), ...props.style }}
            />
          );
        case "password":
          return (
            <Input.Password
              {...commonProps}
              ref={ref}
              value={value}
              onChange={handleChangeWrapper}
              onBlur={handleBlurWrapper}
              maxLength={max}
            />
          );
        case "mask":
          return (
            <MaskedInput
              {...commonProps}
              ref={ref}
              value={value}
              maskFormat={maskFormat!}
              onChange={handleChangeWrapper}
            />
          );
        case "radio":
          return (
            <Radio.Group
              name={name}
              value={value}
              onChange={handleRadioChange}
              onBlur={(e: FocusEvent<HTMLDivElement>) => handleBlurWrapper(e as any)}
              size={size}
              {...props}
            >
              {options.map((option: Option) => (
                <Radio key={option.value} value={option.value}>
                  {option.label}
                </Radio>
              ))}
            </Radio.Group>
          );
        case "checkbox":
          return (
            <Checkbox
              name={name}
              checked={value}
              onChange={handleCheckboxChange}
              onBlur={(e: FocusEvent<HTMLDivElement>) => handleBlurWrapper(e as any)}
              {...props}
            >
              <div className="text-[14px] font-lite text-gray-700">
                {checkedLabel}
              </div>
            </Checkbox>
          );
        case "select":
          return (
            <Select
              {...commonProps}
              showSearch={showSearch}
              optionFilterProp="label"
              filterOption={(input, option: any) =>
                option.label.toString().toLowerCase().includes(input.toLowerCase())
              }
              onChange={handleSelectChange}
              mode={multiple ? "multiple" : undefined}
              style={{ width: "100%", ...(error ? errorStyle : {}), ...props.style }}
              options={options.map((option: Option) => ({
                value: option.value,
                label: option.label,
              }))}
            />
          );
        case "amount":
          return (
            <Input
              {...commonProps}
              ref={ref}
              value={value}
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                let val = (e.target as HTMLInputElement).value;
                val = val.replace(/[^0-9,.]/g, "");
                const decimalIndex = val.indexOf(".");
                if (decimalIndex !== -1) {
                  const beforeDecimal = val.substring(0, decimalIndex + 1);
                  const afterDecimal = val.substring(decimalIndex + 1, decimalIndex + 3);
                  val = beforeDecimal + afterDecimal;
                }
                (e.target as HTMLInputElement).value = val;
                setFieldValue(name, val);
                onChange?.({ target: { value: val } });
              }}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                const rawValue = e.target.value;
                if (rawValue) {
                  const numericValue = parseFloat(rawValue.replace(/,/g, ""));
                  if (!isNaN(numericValue)) {
                    const formatted = formatAmount(numericValue);
                    e.target.value = formatted;
                    setFieldValue(name, formatted);
                    onChange?.({ target: { value: formatted } });
                  }
                }
                formikHandleBlur(e);
                onBlur?.(e);
              }}
            />
          );
        default:
          return (
            <Input
              {...commonProps}
              ref={ref}
              value={value}
              onChange={handleChangeWrapper}
              onBlur={handleBlurWrapper}
              maxLength={max}
            />
          );
      }
    };

    return (
      <div>
        {/* Label rendering */}
        {label && type !== "checkbox" && (
          <div className="flex items-start relative">
            {required && (
              <span className="text-red-400 text-[20px] absolute left-[-10px]">*</span>
            )}
            <label className={labelClassName} htmlFor={name}>
              {label}
            </label>
          </div>
        )}
        {renderInput()}
        {/* Error message */}
        {error && (
          <div className="text-[#ff4d4f] text-[14px]">{String(error)}</div>
        )}
      </div>
    );
  }
);

export { AtomInputFormik };
